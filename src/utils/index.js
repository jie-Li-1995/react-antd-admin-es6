
export const token = {
  set: function (t) {
    window.localStorage.setItem('token', t)
  },
  get: function () {
    return window.localStorage.getItem('token')
  },
  clear: function () {
    window.localStorage.removeItem('token')
  }
}

export const cookie = {
  get: function (name) {
    let _start
    let _end
    if (document.cookie.length > 0) {
      _start = document.cookie.indexOf(name + '=')
      if (_start !== -1) {
        _start = _start + name.length + 1
        _end = document.cookie.indexOf(';', _start)
        if (_end === -1) _end = document.cookie.length
        return unescape(document.cookie.substring(_start, _end))
      }
    }
    return ''
  },
  clear: function () {
    const date = new Date()
    date.setTime(date.getTime() - 10000)
    document.cookie = 'ADToken=; expire=' + date.toGMTString()
  }
}

export const roles = {
  check: function (role) {
    let disabled = true
    const roles = userInfo.get().RolesSign + ','
    let rList = role.split('|')
    for (let i = 0; i < rList.length; i++) {
      if (roles.indexOf(rList[i] + ',') >= 0) {
        disabled = false
        break
      }
    }
    return disabled
  }
}

export const userInfo = {
  set: function (u) {
    window.localStorage.setItem('user', JSON.stringify(u))
  },
  get: function () {
    const user = window.localStorage.getItem('userInfo')
    return JSON.parse(user)
  },
  clear: function () {
    window.localStorage.removeItem('user')
  }
}

export const role = {
  set: function (u) {
    window.localStorage.setItem('role', JSON.stringify(u))
  },
  get: function () {
    const user = window.localStorage.getItem('role')
    return JSON.parse(user)
  },
  clear: function () {
    window.localStorage.removeItem('role')
  }
}

export const parentOption = {
  set: function (u) {
    window.localStorage.setItem('parentOption', JSON.stringify(u))
  },
  get: function () {
    return window.localStorage.getItem('parentOption')
  },
  clear: function () {
    window.localStorage.removeItem('parentOption')
  }
}

export const checkString = {
  IsPass: function (str, warn1, warn2, strLength) {
    let len = 0
    if (str === null || str === undefined) {
      this.$message.warning(warn1)
    } else if (str.toString().trim() === '') {
      this.$message.warning(warn1)
      return 0
    }
    if (str !== '' && str !== null && str !== undefined) {
      for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i)
        // 单字节加1
        if ((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {
          len++
        } else {
          len += 2
        }
      }
    } else {
      return 0
    }
    if (strLength) {
      if (len > strLength) {
        this.$message.warning(warn2)
        return 0
      }
    }
    return 1
  },
  NumberRound: function (num) {
    if (num >= 0) {
      return Math.round(num)
    } else {
      return -Math.round(-num)
    }
  },
  CheckProcent: function (point) {
    let reg = new RegExp('%')
    let a = point.toString().replace(reg, '')
    let arr = a.split('.')
    let b = arr[1] ? (Number(a) / 100).toFixed(arr[1].length + arr[0].length + 2) : (Number(a) / 100).toFixed(4)
    return Number(b)
  },
  addThousand (str) {
    str = str.toFixed(2)
    if (str.split('.').length !== 1) {
      return str.split('.')[0].toString().replace(/(\d{1,3})(?=(\d{3})+$)/g, '$1,') + '.' + str.split('.')[1]
    } else {
      return str.toString().replace(/(\d{1,3})(?=(\d{3})+$)/g, '$1,')
    }
  },
  deleteThousand (str) {
    let reg = new RegExp(/,/g)
    let a = str.toString().replace(reg, '')
    a = Number(a).toFixed(2)
    return Number(a)
  },
  addProcent (point) {
    point = point.toString()
    if (point !== '0' && point.split('.')[1].length > 3) {
      return Number((point * 100).toFixed(3)).toFixed(2) + '%'
    } else {
      return Number(point * 100).toFixed(2) + '%'
    }
  },
  Multiply (point) {
    let a = point.toString()
    let arr = a.split('.')
    let b = arr[1] && arr[1].length > 2 ? (Number(a) * 100).toFixed(arr[1].length - 2) : Number(a) * 100
    console.log(b)
    return Number(b)
  },
  CheckLength: function (str, strLength, warn) {
    let len = 0
    if (str !== '' && str !== null && str !== undefined) {
      for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i)
        // 单字节加1
        if ((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {
          len++
        } else {
          len += 2
        }
      }
    }
    if (len > strLength) {
      this.$message.warning(warn)
      return 0
    } else {
      return 1
    }
  },
  CheckLength2: function (str) {
    let len = 0
    if (str !== '' && str !== null && str !== undefined) {
      for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i)
        // 单字节加1
        if ((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {
          len++
        } else {
          len += 2
        }
      }
    }
    return len
  }
}
export const menu = {
  set: function (u) {
    window.localStorage.setItem('menu', JSON.stringify(u))
  },
  get: function () {
    return JSON.parse(window.localStorage.getItem('menu'))
  },
  clear: function () {
    window.localStorage.removeItem('menu')
  }
}

export const Version = {
  name: '3.0'
}

export const Amount = {
  format: function (amount) {
    if (!amount) return ''
    let amountStr = amount.toString().split('.')
    if (!amountStr[1]) amountStr[1] = '00'
    return `${amountStr[0].replace(/(\d{1,3})(?=(\d{3})+$)/g, '$1,')}.${amountStr[1]}`
  }
}
