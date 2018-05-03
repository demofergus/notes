/*
* 使用方法
* import { shy_string } from '@/coMethods/utils.js'
* myDom.addClass(el, className)
*/

export const shy_string = {
  //删除右边的空格
  trim (str) {
    return str.replace(/(^\s*)|(\s*$)/g, '')
  },

  //删除左边的空格
  function ltrim (str) {
    return str.replace(/(^\s*)/g, '');
　},

  //删除右边的空格
  function rtrim (str) {
    return str.replace(/(\s*$)/g, '')
  }
}
