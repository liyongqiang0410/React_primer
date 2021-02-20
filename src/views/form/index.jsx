import React, { Component, Fragment } from "react";
import { Input, Select, Col, Row, Button, Space } from "antd";
const { TextArea } = Input;
const { Option } = Select;
const selData = [
  { no: 0, address: "北京" },
  { no: 1, address: "上海" },
  { no: 2, address: "广州" },
  { no: 3, address: "深圳" },
];
class form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      details: "",
      address: 0,
    };
  }

  handleChange = () => {
    return (event) => {
      this.setState({
        name: event.target.value,
      });
    };
  };

  textAreaChange = () => {
    return (e) => {
      this.setState({
        details: e.target.value,
      });
    };
  };

  selChange = () => {
    return (value) => {
      this.setState({
        address: value,
      });
    };
  };

  sub = () => {
    return (event) => {
      console.log(this.state);
    };
  };

  render() {
    return (
      <Fragment>
        <Space direction="vertical" style={{ width: "100%" }}>
          <h1>表单</h1>
          <Row>
            <Col span={5}>
              <Input placeholder="User name" value={this.state.name} onChange={this.handleChange()} allowClear />
            </Col>
          </Row>
          <Row>
            <Col span={5}>
              <TextArea showCount maxLength={100} value={this.state.details} onChange={this.textAreaChange()} allowClear />
            </Col>
          </Row>
          <Row>
            <Col span={5}>
              <Select defaultValue={this.state.address} style={{ width: 120 }} onChange={this.selChange()}>
                {selData.map((item) => {
                  return (
                    <Option key={item.no} value={item.no}>
                      {item.address}
                    </Option>
                  );
                })}
              </Select>
            </Col>
          </Row>
          <Button type="dashed" disabled={this.state.name ? false : true} onClick={this.sub()}>
            提交
          </Button>
        </Space>
      </Fragment>
    );
  }
}

export default form;
