// 防抖函数
export function debounce(func, delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay);
  }
}

// 时间戳转换日期格式
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftzero(str));
    }
  }
  return fmt
}

function padLeftzero(str) {
  return ('00' + str).substr(str.length);
}

/**
 * 将Date转换成指定格式的时间字符串
 * @param time Date对象，必填
 * @param cFormat 字符串类型 表示格式字符串，可选，默认{y}-{m}-{d} {h}:{i}:{s}
 * {y}: 代表年
 * {m}: 代表月
 * {d}: 代表日
 * {h}: 代表小时
 * {i}: 代表分钟
 * {s}: 代表秒
 * {a}: 代表毫秒
 *
 * 举例 Date 为当前时间2000-10-10 14:32:12
 * 1. {y}-{m}-{d} 00:00:00      输出：2000-10-10 00:00:00
 * 2. {y}-{m}-{d} {h}:{i}:{s}   输出：2000-10-10 14:32:12
 * @returns {string|null}
 */
// export function formatDate(time, cFormat) {
//   if (arguments.length === 0) {
//     return null
//   }
//   const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
//   let date
//   if (typeof time === 'object') {
//     date = time
//   } else {
//     if (('' + time).length === 10) time = parseInt(time) * 1000
//     date = new Date(time)
//   }
//   const formatObj = {
//     y: date.getFullYear(),
//     m: date.getMonth() + 1,
//     d: date.getDate(),
//     h: date.getHours(),
//     i: date.getMinutes(),
//     s: date.getSeconds(),
//     a: date.getDay()
//   }
//   const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
//     let value = formatObj[key]
//     if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
//     if (result.length > 0 && value < 10) {
//       value = '0' + value
//     }
//     return value || 0
//   })
//   return time_str
// }

/**
 * 对Date进行增减天数，并转换为字符串输出
 *
 * 举例:
 * 1. 昨天的时间: addDays(-1)
 * 2. 昨天0点0分0秒: addDays(-1,null,'{y}-{m}-{d} 00:00:00')
 * 3. 明天0点0分0秒: addDays(1,null,'{y}-{m}-{d} 00:00:00')
 * 4. 明天23点59分59秒： addDays(1,null,'{y}-{m}-{d} 23:59:59')
 *
 * @param days 必填 需要增减的天数 如：1为加1天，-1为减一天
 * @param time Date对象，可选，默认为当前时间
 * @param cFormat Format 字符串类型 表示格式字符串，可选，默认{y}-{m}-{d} {h}:{i}:{s}
 * @returns {string|null}
 */
export function addDays(days, time,  cFormat) {
  if (!days) {
    days = 1
  }
  if(!time){
    time = new Date();
  }
  return formatDate(time.setTime(time.getTime() + 3600 * 1000 * 24 * days),cFormat);
}

/**
 * el-date-picker 快捷选项
 * 设置 :picker-options = "pickerOptions"
 * @type {*[]}
 */
export const pickerOptions = [
  {
    text: '今天',
    onClick(picker) {
      const end = new Date()
      const start = new Date(new Date().toDateString())
      end.setTime(start.getTime())
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近一周',
    onClick(picker) {
      const end = new Date(new Date().toDateString())
      const start = new Date()
      start.setTime(end.getTime() - 3600 * 1000 * 24 * 7)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近一个月',
    onClick(picker) {
      const end = new Date(new Date().toDateString())
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近三个月',
    onClick(picker) {
      const end = new Date(new Date().toDateString())
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      picker.$emit('pick', [start, end])
    }
  }]
