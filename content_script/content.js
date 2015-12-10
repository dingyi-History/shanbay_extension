// alert("hello");
var oBody = document.body;
var oP = oBody.getElementsByTagName('p');
var oPCopy = Array.prototype.slice.call(oP);
for (var i = 0,len=oPCopy.length; i < len; i++) {
	try{
		oPCopy[i].parentNode.removeChild(oPCopy[i]);
	}catch(e){
		alert(i+e);
	}

};
