export default(a)=>{
	if(!a){
		return false;
	}
	let t = {};
	return a.constructor === t.constructor;
}
