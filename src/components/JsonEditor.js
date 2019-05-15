import React, { Component } from "react";
import { prefixClass as pfx, deepEquals } from "../utils";
import { toErrorList } from "../validate";
import CodeMirror from "react-codemirror2";

const cmOptions = {
  theme: "default",
  height: "auto",
  viewportMargin: Infinity,
  mode: {
    name: "javascript",
    json: true,
    statementIndent: 2
  },
  lineNumbers: true,
  lineWrapping: true,
  indentWithTabs: false,
  tabSize: 2
};

class JsonEditor extends Component {
  constructor(props) {
    super(props);

    this.state = this.getStateFromProps(props);
    this.state.formJson = JSON.stringify(props.formData, null, 2);
    this.state.formJsonError = false;
    this.state.fromJsonErrorList = [];
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.getStateFromProps(nextProps));
  }

  isJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  getStateFromProps(nextProps) {
    return {
      formJson:
        this.state &&
        this.isJsonString(this.state.formJson) &&
        deepEquals(nextProps.formData, this.state.formJson)
          ? this.state.formJson
          : JSON.stringify(nextProps.formData, null, 2)
    };
  }

  onJsonChange = (editor, metadata, code) => {
    var err = false;
    var parsed = null;
    let fromJsonErrorList = [];

    try {
      parsed = JSON.parse(code);
    } catch (e) {
      err = true;
      fromJsonErrorList.push("Could not parse JSON. Syntax error.");
    }

    //expected array but found object.

    this.setState((prevState, props) => {
      let isParsedArray = Array.isArray(parsed);
      let isParsedObject =
        typeof parsed === "object" && !Array.isArray(parsed) && parsed !== null;

      !err &&
        props.checkObjectType &&
        (isParsedObject
          ? !err && props.onChange(parsed)
          : fromJsonErrorList.push("Could not parse JSON. Expected object."));

      !err &&
        props.checkArrayType &&
        (isParsedArray
          ? !err && props.onChange(parsed)
          : fromJsonErrorList.push("Could not parse JSON. Expected array."));
      return {
        formJson: code,
        formJsonError: err,
        fromJsonErrorList: fromJsonErrorList
      };
    });
  };

  renderErrorSchema(errorSchema) {
    let errorList = toErrorList(errorSchema);
    return (
      <ul>{errorList.map((key, index) => <li key={index}>{key.stack}</li>)}</ul>
    );
  }

  render() {
    return (
      <div>
        <CodeMirror
          value={this.state.formJson}
          onChange={this.onJsonChange}
          options={cmOptions}
        />
        {
          <div className={pfx("editor-validation-errors")}>
            <ul>
              {this.state.fromJsonErrorList.length > 0 &&
                this.state.fromJsonErrorList.map((error, index) => {
                  return <li key={index}>{error}</li>;
                })}
            </ul>
            <ul>
              {this.props.validationErrors.length > 0 &&
                this.props.validationErrors.map((error, index) => {
                  return <li key={index}>{error.stack}</li>;
                })}
            </ul>
          </div>
        }
      </div>
    );
  }
}

export default JsonEditor;
