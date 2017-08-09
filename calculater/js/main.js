var box=document.getElementById('dispaly');


function addtoScreen(x){

	box.value+=x;
	if(x==='c'){
	box.value='';
	}
}


function ans(){
	x=box.value
	if(x==="")
		x=0;
	x=eval(x);
	box.value=x;
	if(x===null){
	box.value='0';
	}
}
function power(y){
 y=box.value;
 y=eval(y*y);
 box.value=y;
}
function backspace(){

	var num  = box.value;
	var len = num.length-1;
	var newNum = num.substring(0,len);
	box.value=newNum;
}