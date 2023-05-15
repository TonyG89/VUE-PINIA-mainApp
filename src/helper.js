export function getMinMaxValues(array) {
  let min = Infinity
  let max = -Infinity

  for (const value of array) {
    if (value < min) {
      min = value
    }
    if (value > max) {
      max = value
    }
  }

  return [min, max]
}

// example keyMap = {oldKey1: 'newKey1', oldKey2:'newKey2', ...} 
export function renameKeys(arr, keyMap) {
  if (!Array.isArray(arr)) return []

  return arr.map(obj => {
    const newObj = {};
    for (let key in obj) {
      key in keyMap ? newObj[keyMap[key]] = obj[key] : newObj[key] = obj[key];
    }
    return newObj;
  })
}

export function arrObjToObjObj(arr = []) {
  const obj = arr.reduce((acc, item) => {
    acc[item.id] = item
    return acc
  }, {})
  return obj
}
