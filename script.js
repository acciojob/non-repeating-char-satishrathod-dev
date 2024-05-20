function firstNonRepeatedChar(str) {
 // Write your code here
	const arr = str.split("");
	for(let i=0; i<arr.length; i++){
		if(arr[i]==arr[i+1]){
			continue;
		}
		else{
			return arr[i];
		}
	}
	return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
