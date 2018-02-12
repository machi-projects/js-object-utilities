export default (obj, keys, target)=>{
	
  target = target || {};
  Object.keys(obj).forEach((key)=>{
	  
	  if (keys.indexOf(key) > 0){
		  return;
	  }
	  
	  if (!Object.prototype.hasOwnProperty.call(obj, key)){
		  return;
	  }
	  
	  target[key] = obj[key];
  })
  
  return target;
  
}