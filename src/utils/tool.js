const tool = {
  // 节流
  throttle: function (fun, time) {
    let that, args, timer
    let old = 0 // 设置初始时间戳
    return function () {
      that = this
      args = arguments
      let now = new Date().valueOf() // 获取初始的时间戳
      if (now - old > time) {
        if (timer) {
          clearTimeout(timer)
          timer = null
        }
        fun.apply(that, args)
        old = now
      }
      if (!timer) {
        timer = setTimeout(function () {
          old = new Date().valueOf() // 将old的值设置为最新的时间戳
          timer = null
          fun.apply(that, args)
        }, time)
      }
    }
  },
  // 防抖
  debounce: function (fun, time, immediate) {
    // result用来获取返回值
    let timer, result
    let debounced = function () {
      // 将当前的this赋值给that
      let that = this
      // 获取函数的参数
      let args = arguments
      // 取消当前的定时器效果
      clearTimeout(timer)
      if (immediate) {
        // 立即执行
        let callNow = !timer
        timer = setTimeout(function () {
          timer = null
        }, time)
        if (callNow) result = fun.call(that, ...args)
      } else {
        // 不立即执行
        // time时间后触发函数fun
        timer = setTimeout(function () {
          // 使用call改变函数内部的this指向，并传递参数
          fun.call(that, ...args)
        }, time)
      }
      return result
    }
    debounced.cancel = function () {
      clearTimeout(timer) // 清除定时器
      timer = null // 闭包会导致内存泄漏，因此需要将定时器制空
    }
    return debounced // 返回防抖函数
  }
}
export default tool
