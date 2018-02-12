export const IsEqualGivenKeys=(a, b, keys=[])=>{
	
	let equalKeysList = keys.filter((keyId ,i)=>{
		
		if(deepEqualObject(a[keyId],b[keyId])){
			return true;
		}
		return false;
	})
	
	return equalKeysList.length == keys.length ? true : false; 
}

export const deepEqualObject = (a, b) => {
	  
	if (a === b){ return true; }
	
	//isCaseSensitive
	if (a == b){ return true; }
	
	  var arrA = Array.isArray(a)
	    , arrB = Array.isArray(b)
	    , i;

	  if (arrA != arrB){ return false; }
	  
	  if (arrA && arrB) {
	    if (a.length != b.length){ return false; }
	    for (i = 0; i < a.length; i++){
	      if (!deepEqualObject(a[i], b[i])){ return false; }
	    }
	    return true;
	  }

	  if (a && b && typeof a === 'object' && typeof b === 'object') {
	    var keys = Object.keys(a);
	    if (keys.length !== Object.keys(b).length){ return false; }

	    var dateA = a instanceof Date
	      , dateB = b instanceof Date;
	    if (dateA && dateB){ return a.getTime() == b.getTime(); }
	    if (dateA != dateB){ return false; }

	    var regexpA = a instanceof RegExp
	      , regexpB = b instanceof RegExp;
	    if (regexpA && regexpB){ return a.toString() == b.toString() };
	    if (regexpA != regexpB){ return false };

	    for (i = 0; i < keys.length; i++){
	      if (!Object.prototype.hasOwnProperty.call(b, keys[i])){ return false; }
	    }

	    for (i = 0; i < keys.length; i++){
	      if(!deepEqualObject(a[keys[i]], b[keys[i]])) { return false; }
	    }

	    return true;
	  }

	  if (a && b && typeof a === 'function' && typeof b === 'function') {
		  return true;
	  }
	  
	  return false;
};
