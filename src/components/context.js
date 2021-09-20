import * as React from "react";

const AppContext = React.createContext();

export class ContextProvider extends React.Component {
  render() {
    return (
      <AppContext.Provider value={this.props.markdownRenderer}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export class ContextConsumer extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {markdownRenderer => this.props.children(markdownRenderer)}
      </AppContext.Consumer>
    );
  }
}
