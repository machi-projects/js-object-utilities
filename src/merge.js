import isPlainObject from './isPlainObject';

let merge = (target,from)=>{

	Object.keys(from).forEach((key)=>{

		let oldVal = target[ key ];
		let newVal = from[ key ];
		if ( isPlainObject(newVal) && isPlainObject(oldVal)  ) {

			target[key] = merge(oldVal, newVal);
		} 
		else if (Array.isArray(newVal)) {

			target[key] = newVal.slice();

		} else {

			target[key] = newVal ? deepClone(newVal) : newVal;
		}
	});
	
	return target;
}

let deepClone = function(obj) {
    if (typeof obj !== 'object'){ 
    		return obj; 
    	}
    var clone = Array.isArray(obj) ? obj.slice() : Object.assign({}, obj);
    for (var key in clone) {
      clone[key] = deepClone(clone[key]);
    }
    return clone;
};

export default(orig, ...objects)=>{
	
	if(objects && objects.length > 0){
		
		var len = objects.length;
		var idx = 0;
		while (idx < len) {
			var val = objects[idx];
			if(val){
				merge(orig, val);
			}
			idx++;
		}
		return orig;
	}
	
	return orig;
}