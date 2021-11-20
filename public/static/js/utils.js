/**
 * 【工具类】- 目录
 * 1、深度Copy
 * 2、求数组和
 */


/**
 * 深度Copy
 * @param {*} obj
 * @returns
 */
function deepCopy(obj) {
  let type = Object.prototype.toString.call(obj);
  if (type == "[object Array]") {
    let backObj = [];
    for (let val of obj) {
      backObj.push(deepCopy(val));
    }
    return backObj;
  }
  if (type == "[object Object]") {
    let backObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        backObj[key] = deepCopy(obj[key]);
      }
    }
    return backObj;
  }
  return obj;
}
/**
 * 求数组和
 * @param {*} data
 * @param {*} key
 * @returns
 */
function getArraySum(data, key) {
  let sum = 0;
  data.forEach((item) => {
    sum += item[key];
  });
  return sum;
}
