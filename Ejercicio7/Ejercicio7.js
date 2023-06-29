function returnFalsyValues(obj, fn) {
    const result = {};
    
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (!fn(value)) {
          result[key] = value;
        }
      }
    }
    
    return result;
  }