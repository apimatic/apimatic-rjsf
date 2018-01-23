// import React from "react";
import { expect } from "chai";
import { Simulate } from "react-addons-test-utils";

import { createFormComponent, createSandbox } from "./test_utils";

describe("ObjectField", () => {
  let sandbox;

  beforeEach(() => {
    sandbox = createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("schema", () => {
    const schema = {
      type: "object",
      additionalProperties: {
        type: "string"
      }
    };

    const formData = {
      first: "val1",
      second: "val2"
    };

    it("should render title and description", () => {
      const { node } = createFormComponent({
        schema: { ...schema, title: "some title", description: "some des" }
      });

      expect(node.querySelector("legend").textContent).eql("some title*");
      expect(node.querySelector(".field-description").textContent).eql(
        "some des"
      );
    });

    it("should render fields for key and value from formData", () => {
      const { node } = createFormComponent({ schema, formData });

      const rows = node.querySelectorAll(".map-item");

      expect(rows).to.have.length.of(2);

      expect(rows[0].querySelectorAll("input")[0].value).eql("first");
      expect(rows[0].querySelectorAll("input")[1].value).eql("val1");

      expect(rows[1].querySelectorAll("input")[0].value).eql("second");
      expect(rows[1].querySelectorAll("input")[1].value).eql("val2");
    });

    it("should update key in formData", () => {
      const { comp, node } = createFormComponent({ schema, formData });
      const input = node.querySelector("input");

      Simulate.change(input, {
        target: { value: "changed" }
      });

      expect(Object.keys(comp.state.formData)).to.have.length.of(2);
      expect(comp.state.formData.changed).eql(formData.first);
      expect(comp.state.formData.second).eql(formData.second);
    });

    it("should update value in formData", () => {
      const { comp, node } = createFormComponent({ schema, formData });
      const input = node.querySelectorAll("input")[1];

      Simulate.change(input, {
        target: { value: "changed" }
      });

      expect(Object.keys(comp.state.formData)).to.have.length.of(2);
      expect(comp.state.formData.first).eql("changed");
      expect(comp.state.formData.second).eql(formData.second);
    });

    it("should show error on duplicate keys", () => {
      const { node } = createFormComponent({ schema, formData });
      const input = node.querySelector("input");

      Simulate.change(input, {
        target: { value: "second" }
      });

      const errs = node.querySelectorAll(".error-detail");
      expect(errs).to.be.of.length(2);
      expect(errs[0].textContent).eql("Key is duplicated.");
      expect(errs[1].textContent).eql("Key is duplicated.");
    });

    it("should render add button", () => {
      const { node } = createFormComponent({ schema });

      expect(node.querySelectorAll(".btn-add")).to.have.length.of(1);
    });

    it("should not render add button when addable true in ui options", () => {
      const { node } = createFormComponent({
        schema,
        formData,
        uiSchema: { "ui:options": { addable: false } }
      });

      expect(node.querySelectorAll(".btn-add")).to.have.length.of(0);
    });

    it("should not render add button when maxProperties is reach", () => {
      const { node } = createFormComponent({
        schema: { ...schema, maxProperties: 2 },
        formData
      });

      expect(node.querySelectorAll(".btn-add")).to.have.length.of(0);
    });

    it("should not render delete buttons when removable false in ui options", () => {
      const { node } = createFormComponent({
        schema,
        formData,
        uiSchema: { "ui:options": { removable: false } }
      });

      expect(node.querySelectorAll(".map-item-remove")).to.have.length.of(0);
    });

    it("should add new key when add btn is clicked", () => {
      const { comp, node } = createFormComponent({ schema });

      const addBtn = node.querySelector("[type=button]");
      Simulate.click(addBtn);
      expect(comp.state.formData).to.haveOwnProperty("key0");

      Simulate.click(addBtn);
      expect(Object.keys(comp.state.formData)).to.have.length.of(2);
      expect(comp.state.formData).to.haveOwnProperty("key0");
      expect(comp.state.formData).to.haveOwnProperty("key1");
    });

    it("should remove key when delete btn is clicked", () => {
      const { comp, node } = createFormComponent({ schema, formData });

      const addBtn = node.querySelector(".map-item-remove");
      Simulate.click(addBtn);

      expect(Object.keys(comp.state.formData)).length(1);
      expect(comp.state.formData.second).eql("val2");
    });

    it("should nullify form data when value-checkbox is unchecked", () => {
      const { comp, node } = createFormComponent({
        schema: { type: "object", properties: { obj: schema } },
        formData: { obj: formData }
      });

      const chkbox = node.querySelector("[type=checkbox]");
      Simulate.change(chkbox);

      expect(comp.state.formData.obj).eq(undefined);
      expect(node.querySelectorAll("input[type=text]")).to.have.length.of(0);
    });

    it("should restore form data when value-checkbox is re-checked", () => {
      const { comp, node } = createFormComponent({
        schema: { type: "object", properties: { obj: schema } },
        formData: { obj: formData }
      });

      const chkbox = node.querySelector("[type=checkbox]");
      Simulate.change(chkbox);
      Simulate.change(chkbox);

      expect(comp.state.formData.obj).to.deep.eq(formData);
      expect(node.querySelectorAll("input[type=text]")).to.have.length.of(4);
      expect(chkbox.checked).eq(true);
    });

    it("should update form data to defaults when value-checkbox is checked when previously null", () => {
      const { comp, node } = createFormComponent({
        schema: { type: "object", properties: { obj: schema } }
      });

      const chkbox = node.querySelector("[type=checkbox]");
      Simulate.change(chkbox);

      expect(comp.state.formData.obj).to.haveOwnProperty("key0");
    });
  });
});
