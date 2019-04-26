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

    try {
      parsed = JSON.parse(code);
    } catch (e) {
      err = true;
    }

    this.setState((prevState, props) => {
      //expected array but found object.
      if (
        !err &&
        ((props.checkArrayType && Array.isArray(parsed)) ||
          (props.checkObjectType && Array.isObject(parsed)))
      ) {
        props.onChange(parsed);
      } else {
        err = true;
      }
      return {
        formJson: code,
        formJsonError: err
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
        <div className={pfx("editor-validation-errors")}>
          {this.state.formJsonError && (
            <ul>
              <li>Could not parse JSON. Syntax error.</li>
            </ul>
          )}
          {Object.keys(this.props.errorSchema).length !== 0 &&
            this.renderErrorSchema(this.props.errorSchema)}
        </div>
      </div>
    );
  }
}

export default JsonEditor;
