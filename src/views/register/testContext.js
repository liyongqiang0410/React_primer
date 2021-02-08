/*
 * @Author: your name
 * @Date: 2021-02-07 16:56:37
 * @LastEditTime: 2021-02-07 17:01:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app\src\views\register\testContext.js
 */
import { createContext } from 'react'
const testContext = createContext();
const { Provider, Consumer } = testContext
export {
  testContext,
  Provider,
  Consumer
}