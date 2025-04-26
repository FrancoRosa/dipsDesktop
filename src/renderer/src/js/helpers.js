export const liquidColors = (product) => {
  let text = product.toLowerCase()
  switch (text) {
    case 'diesel':
      return '#f0da1f'
    case 'diesel dyed':
      return '#de7cd1'
    case 'regular':
      return '#59f2ec'
    case 'regular south':
      return '#59f2ec'
    case 'regular north':
      return '#59f2ec'
    case 'premium':
      return '#ef4526'
    case 'gas':
      return '#59f2ec'
    case 'def':
      return '#00008b'
    case 'diesel dyed cardlock':
      return '#de7cd1'
    case 'diesel dyed bulk':
      return '#de7cd1'
    case 'regular cardlock':
      return '#59f2ec'
    case 'regular bulk':
      return '#59f2ec'
    case 'premium bulk':
      return '#ef4526'
    case 'diesel cardlock':
      return '#f0da1f'
    case 'diesel bulk':
      return '#f0da1f'
    case 'regular dyed':
      return '#ffa500'
    case 'diesel 1':
      return '#f0da1f'
    case 'diesel 2':
      return '#f0da1f'
    case 'diesel 3':
      return '#f0da1f'
    case 'north diesel':
      return '#f0da1f'
    case 'south diesel':
      return '#f0da1f'

    case 'clear diesel':
      return '#f0da1f'

    case 'dyed diesel':
      return '#de7cd1'
    case 'diesel north':
      return '#f0da1f'
    case 'diesel centre':
      return '#f0da1f'
    case 'diesel south':
      return '#f0da1f'
    case 'diesel middle':
      return '#f0da1f'
    case 'diesel center':
      return '#f0da1f'
    case 'diesel east':
      return '#f0da1f'
    case 'diesel west':
      return '#f0da1f'

    case 'diesel s. cardlock':
      return '#f0da1f'

    case 'diesel m. cardlock':
      return '#f0da1f'

    case 'diesel n. cardlock':
      return '#f0da1f'

    case 'solvent east':
      return 'brown'
    case 'solvent west':
      return 'brown'

    case 'def cardlock':
      return '#00008b'
    case 'bulk def':
      return '#00008b'
    case 'south gas':
      return '#59f2ec'
    case 'north gas':
      return '#59f2ec'
    case 'potable water':
      return '#0000cd'
    case 'sewer':
      return '#964B00'
    case 'tank 4 diesel':
      return '#f0da1f'
    case 'tank 5 diesel':
      return '#f0da1f'
    case 'tank 6 diesel':
      return '#f0da1f'
    case 'tank 7 def':
      return '#00008b'

    default:
      return 'brown'
  }
}

export const products = (product_id) => {
  switch (product_id) {
    case 1:
      return 'unknown'
    case 2:
      return 'diesel'
    case 3:
      return 'diesel dyed'
    case 4:
      return 'regular'
    case 5:
      return 'premium'
    case 6:
      return 'gas'
    case 7:
      return 'def'
    case 8:
      return 'solvent'
    case 9:
      return 'diesel dyed cardlock'
    case 10:
      return 'diesel dyed bulk'
    case 11:
      return 'regular cardlock'
    case 12:
      return 'premium bulk'
    case 13:
      return 'diesel cardlock'
    case 14:
      return 'diesel bulk'
    case 15:
      return 'regular dyed'
    case 16:
      return 'diesel 1'
    case 17:
      return 'diesel 2'
    case 18:
      return 'diesel 3'
    case 19:
      return 'north diesel'
    case 20:
      return 'south diesel'
    case 21:
      return 'dyed diesel'
    case 22:
      return 'diesel north'
    case 23:
      return 'diesel centre'
    case 24:
      return 'diesel south'
    case 25:
      return 'diesel middle'
    case 26:
      return 'solvent east'
    case 27:
      return 'solvent west'
    case 28:
      return 'def cardlock'
    case 29:
      return 'bulk def'
    case 30:
      return 'south gas'
    case 31:
      return 'north gas'
    case 32:
      return 'regular south'
    case 33:
      return 'regular north'
    case 34:
      return 'diesel center'
    case 35:
      return 'diesel east'
    case 36:
      return 'diesel west'
    case 37:
      return 'diesel s. cardlock'
    case 38:
      return 'diesel m. cardlock'
    case 39:
      return 'diesel n. cardlock'
    case 40:
      return 'regular bulk'
    case 41:
      return 'clear diesel'
    case 42:
      return 'tank 4 diesel'
    case 43:
      return 'tank 5 diesel'
    case 44:
      return 'tank 6 diesel'
    case 45:
      return 'tank 7 def'
    case 46:
      return 'potable water'
    case 47:
      return 'sewer'

    default:
      return 'unknown'
  }
}

export const formatTime = (time) => {
  let date = time ? new Date(time).toLocaleString('sv') : new Date().toLocaleString('sv')
  date = date.split(':')
  date.pop()
  return date.join(':')
}
