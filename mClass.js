let mClass = (function () {
  let mClass = function (name) {
    if (typeof new.target === undefined) {
      throw new Error('Constructor must be called by new')
    }
    this.name = name
  }
  Object.defineProperty(mClass.prototype, 'sayName', {
    value: function () {
      if (typeof new.target !== undefined) {
        throw new Error('Method cannot be called by new')
      }
      console.log(this.name)
    },
    enumerable: true,
    configurable: true,
    writable: true,
  })
  return mClass
})()
