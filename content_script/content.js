var oDivs = document.getElementsByTagName('div');
var oImg = document.getElementById('img-1');
for (var i = 0,len = oDivs.length; i < len; i++) {
	if(oDivs[i].getElementsByTagName('p').length == 0 && 
	   oDivs[i].getElementsByTagName('h1').length == 0)
	   // findImg( oDivs[i]) == 0)
	{
		oDivs[i].style.display = "none";
	}
};
findImg();
function findImg () {
	var oImg = document.getElementById('img-1');
	while(oImg.parentNode != document.body)
	{
		alert(oImg.nodeName);
		// if(oImg.parentNode === oDiv)
		// {
		// 	alert('msg');
		// 	return 1;
		// }
		
		oImg = oImg.parentNode;

	}
	return 0;
}