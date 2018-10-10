fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, func) {
        if (collection.length === undefined) {
          let keys = Object.keys(collection)
          for ( i = 0; i < keys.length; i++){
            func(collection[keys[i]], keys[i], collection)
          }
        }else {
          for ( i = 0; i < collection.length; i++) {
            func(collection[i], i, collection)
          }
      }
      return collection
    },

    map: function(collection, func) {
      let nucollection = null
      if (collection.length === undefined) {
        nucollection = []
        let keys = Object.keys(collection)
        for ( i = 0; i < keys.length; i++) {
          nuel = func(collection[keys[i]])
          nucollection.push(nuel)
        }
      } else {
        nucollection = collection.slice()
        for ( i = 0; i < collection.length; i++) {
          nuel = func(collection[i])
          nucollection[i] = nuel
        }
    }
    return nucollection
    },

    reduce: function(collection, func, total = 0) {
      collection.forEach(function(element) {
        total = func(total, element, collection)
      })
      return total
    },
    
    find: function(collection, func) {
      foundElement = undefined
      collection.forEach(function(element) {
        if (foundElement === undefined && func(element)) {
          foundElement = element
        }
      })
      return foundElement
    },

    
    filter: function(collection, func) {
      nucollection = []
       collection.forEach(function(element){
         if (func(element)){
          nucollection.push(element)
         }
       })
       return nucollection 
    },
    
    size: function(collection) {
      if (collection.length === undefined) {
        let keys = Object.keys(collection)
        return keys.length
      } else {
      return collection.length
      }
    },
    
    first: function(collection, n = null) {
      if (n !== null){
        return collection.slice(0, n)
      }else {
      return collection[0]
      }
    },
    
    last: function(collection, n = null) {
      if (n !== null){
        return collection.slice(collection.length-n, collection.length)
      }else {
        return collection[collection.length-1]
      }
    },
    
    compact: function(array) {
      nuarry = []
      array.forEach(function(element){
        if (element){
          nuarry.push(element)
        }
      })
      return nuarry
    },
    
    // sortBy: function(collection, func) {
    //   const nuarry = [...collection]
    //   return nuarry.sort(function(a, b) {
    //     return func(a) - func(b)
    //   })
    // },

    sortBy: function(collection, func) {
      let nuarry = collection.slice()
      return nuarry.sort(function(a, b) {
        return func(a) - func(b)
      })
    },

    flatten: function(array, mutable = null) {
      let arrayTypeStr = '[object Array]';
      
      let result = [];
      let nodes = (mutable && array) || array.slice();
      let node;
  
      if (!array.length) {
          return result;
      }
  
      node = nodes.pop();
      
      do {
          if (toString.call(node) === arrayTypeStr) {
              nodes.push.apply(nodes, node);
          } else {
              result.push(node);
          }
      } while (nodes.length && (node = nodes.pop()) !== undefined);
  
      result.reverse(); // we reverse result to restore the original order
      return result;
  },

  // uniq: function(arr, func) {
  //   let nuarry = []
  //   let obj = {}
  //   for(let i = 0; i < arr.length; i++){
  //     if(obj[arr[i]] !== true){
  //       obj[arr[i]] = true
  //       nuarry.push(arr[i])
  //     }
  //   }
  //   console.log(nuarry)
  //     // if (nuarry.indexOf(array[i])){
  //     //   nuarry.push(array[i])
  //     //   console.log(nuarry)
  //     //   debugger
  //     // }
  //   return nuarry
  // },

  // uniq: function(array, func) {
  //   create new array 
  //   loop over their array
  //   if our array contains the element, skip
  //   if our array does not, add the element
  //   return our array
  // },

  uniqSorted: function(collection, iteratee) {
    const sorted = [collection[0]]
    for (let idx = 1; idx < collection.length; idx++) {
      if (sorted[idx-1] !== collection[idx])
        sorted.push(collection[idx])
    }
    return sorted
  },

  uniq: function(collection, sorted=false, iteratee=false) {
    if (sorted) {
      return fi.uniqSorted(collection, iteratee)
    } else if (!iteratee) {
      return Array.from(new Set(collection))
    } else {
      const modifiedVals = new Set()
      const uniqVals = new Set()
      for (let val of collection) {
        const moddedVal = iteratee(val)
        if (!modifiedVals.has(moddedVal)) {
          modifiedVals.add(moddedVal)
          uniqVals.add(val)
        }
      }
      return Array.from(uniqVals)
    }
  },

  keys: function(obj) {
    // Using for loop
    const keys = []
    for (let key in obj){
      keys.push(key)
    }
    return keys
  },

  values: function(obj) {
    // Using for loop
    const values = []
    for (let key in obj){
      values.push(obj[key])
    }
    return values

    // Using the custom 'map' method from above
    // return this.map(obj, (value) => value)

  },

  functions: function(obj) {
    const functionNames = []

    for (let key in obj) {
      if (typeof obj[key] === "function"){
        functionNames.push(key)
      }
    }

    return functionNames.sort()
  },


  }
})()

fi.libraryMethod()
