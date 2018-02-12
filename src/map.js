export default (obj,func)=>{
	let newMapObj = {};
	Object.keys(obj).map((key,idx)=>{
		newMapObj[ key ] = func(key,obj[obj],idx);
	});
	return newMapObj;
}