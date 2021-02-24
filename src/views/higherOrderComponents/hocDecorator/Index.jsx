import React, { Component } from "react";
import hoc from "../hoc";

@hoc
class Index extends Component {
  render() {
    return (
      <>
        <h1> 装饰器</h1>
      </>
    );
  }
  componentDidMount() {
    console.log(this);
  }
}

export default Index;
/**
 * yarn add @babel/core @babel/plugin-proposal-decorators @babel/preset-env
 * .babelrc 配置
 * {
 *   "presets": ["@babel/preset-env"],
 *   "plugins": [
 *     [
 *       "@babel/plugin-proposal-decorators",
 *       {
 *         "legacy": true
 *       }
 *     ]
 *   ]
 * }
 * yarn add customize-cra react-app-rewired
 * 根目录
 * config-overrodes.js
 */
