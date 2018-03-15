var i = 1;
var j= -1;
var list = ["Software Engineer, Adaptive Programmer, Masters Student " ];
var a=list[0];
var len = list.length;
var num = 0;

function txt(){
	var strs = a.slice(0,i);

	$("#textdisp").html(strs +'|');

	if(i >= 0)
	{
		if (i != a.length)
			{
				i++;
			}
	}


}
function ret_index(a){
	var index = list.indexOf(a);
	if (index!= (len-1))
		{return (index+1);}
	else
		{return 0;}

}


setInterval(txt,80);
