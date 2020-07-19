const groupByKey = (arr = [], key = '', options = {}) => {
  const prefix = options.prefix || '';
  try {
    if (!arr) {
      throw new Error('Invalid array');
    }

    let obj = {};
    arr.forEach((item, index) => {
      const itemValue = item[key];
      if (itemValue == null) {
        throw new Error(`Poorly formatted item at index: ${index}`);
      }

      const objKey = `${prefix}${itemValue}`;
      if (obj[objKey]) {
        obj[objKey] = [...obj[objKey], item];
      } else {
        obj[objKey] = [item];
      }
    });

    return obj;
  } catch (err) {
    return {};
  }
};

export { groupByKey };
