export default (obj,func)=>{
	Object.keys(obj).forEach((key,idx)=>{
		func && func(key,obj[obj],idx)
	});
}