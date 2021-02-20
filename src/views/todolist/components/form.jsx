import React, { Component, Fragment } from "react";
import { Input, Space, Button, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pwd: "",
    };
  }
  handleIdChange = () => {
    return (e) => {
      this.setState({
        id: e.target.value,
      });
    };
  };

  handlePwdChange = () => {
    return (e) => {
      this.setState({
        pwd: e.target.value,
      });
    };
  };
  sub = () => {
    return () => {
      if (this.state.id && this.state.pwd) {
        this.props.onReceiveLabel(this.state.id, this.state.pwd);
        this.setState({
          id: "",
          pwd: "",
        });
      } else {
        message.error("Input cannot be empty");
      }
    };
  };

  render() {
    return (
      <Fragment>
        <Space direction="vertical">
          账号:
          <Input placeholder="input user name" value={this.state.id} allowClear onChange={this.handleIdChange()} />
          密码:
          <Input.Password
            placeholder="input password"
            value={this.state.pwd}
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            allowClear
            onChange={this.handlePwdChange()}
          />
          <Button onClick={this.sub()}>新增</Button>
        </Space>
      </Fragment>
    );
  }
}
export default Form;
