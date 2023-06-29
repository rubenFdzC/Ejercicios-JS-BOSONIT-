function keysLowerCase(obj) {
    const keys = Object.keys(obj);
    const lowercaseObj = {};
  
    for (let key of keys) {
      lowercaseObj[key.toLowerCase()] = obj[key];
    }
  
    return lowercaseObj;
  }
  
  const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
  const myObjLowercase = keysLowerCase(myObject);
  console.log(myObjLowercase);
  