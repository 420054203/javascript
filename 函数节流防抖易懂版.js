
//函数防抖（debounce）
//函数防抖的简单实现：

const debounce = (func, wait) => {
    let timer;
  
    return () => {
      clearTimeout(timer);
      timer = setTimeout(func, wait);
    };
  };

  //函数节流（throttle）
 // 1）函数节流的 setTimeout 版简单实现
  
  const throttle_1 = (func, wait) => {
    let timer;
  
    return () => {
      if (timer) {
        return;
      }
  
      timer = setTimeout(() => {
        func();
        timer = null;
      }, wait);
    };
  };
 // 2）函数节流的时间戳版简单实现
//根据函数节流的原理，我们也可以不依赖 setTimeout实现函数节流。

const throttle_2 = (func, wait) => {
  let last = 0;
  return () => {
    const current_time = +new Date();
    if (current_time - last > wait) {
      func.apply(this, arguments);
      last = +new Date();
    }
  };
};