const countSubstringOccurences = (substr = '', str = '') => {
  return (str.match(new RegExp(substr, 'g')) || []).length
}

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const toLowerCase = (str = '') => {
  try {
    return str.toLowerCase();
  } catch (err) {
    return ''
  }
}

const toUpperCase = (str = '') => {
  try {
    return str.toUpperCase();
  } catch (err) {
    return ''
  }
}

export {
  countSubstringOccurences,
  capitalizeFirstLetter,
  toLowerCase,
  toUpperCase
}
