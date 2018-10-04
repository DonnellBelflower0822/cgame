export function wait (time) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove()
    }, time)
  })
}

export function getAbc (index) {
  index += ''
  switch (index) {
    case '0':
      return 'A'
    case '1':
      return 'B'
    case '2':
      return 'C'
  }
}
