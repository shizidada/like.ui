import React from "react";
import { inject, observer } from "mobx-react";
import Clock from "../../components/Clock";

import "./index.less";

@inject("store")
@observer
class LoginPage extends React.Component {
  componentDidMount() {
    this.props.store.start();
  }

  componentWillUnmount() {
    this.props.store.stop();
  }

  render() {
    console.log(this.props);
    return (
      <div className="login-page-container">
        <Clock
          lastUpdate={this.props.store.lastUpdate}
          light={this.props.store.light}
        />
      </div>
    );
  }
}

export default LoginPage;