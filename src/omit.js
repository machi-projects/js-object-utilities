export default (obj, keys, target)=>{
	
  keys = keys || [];
  target = target || {};
  
  Object.keys(obj).forEach((key)=>{
	  if (keys.indexOf(key) === -1){
		  target[key] = obj[key];
	  }
  });
  
  return target;
  
}