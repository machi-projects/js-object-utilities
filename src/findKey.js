export default (obj, func, defaultValue)=>{
	
	return Object.keys(obj).reduce((accumulator, currentValue)=>{
		
		return func(obj[currentValue]) ? currentValue : accumulator;
		
	},defaultValue);

}