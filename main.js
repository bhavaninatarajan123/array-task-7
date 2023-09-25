var a=[];
var n=parseInt(prompt("Enter the size of the array"));

	
for (let i=0; i<n; i++){
	a[i]=parseInt(prompt("Enter the" + (i+1) +" value"));
}

document.write("Given Array = "+a+"<br><br>");

count=0;
for(let i=0; i<a.length;i++){
    var b=a[i].toString().length;
    count=count+b;

}
document.write("there are"+count+"digits in the array");
