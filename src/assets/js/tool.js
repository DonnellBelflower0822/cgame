export function wait (time) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove()
    }, time)
  })
}
