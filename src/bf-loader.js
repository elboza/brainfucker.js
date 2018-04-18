var bf=require('./brainfucker.js');

function process_bf(elem){
	let code=elem.innerText;
	var data='';
	var reverse=false;
	var ng=false;
	var oenv=false;
	if (elem.hasAttributes()) {
       let attrs = elem.attributes;
       var output = "";
       for(var i = attrs.length - 1; i >= 0; i--) {
         output += attrs[i].name + "->" + attrs[i].value;
         if(attrs[i].name=='reversefuck') reverse=true;
         if(attrs[i].name=='ng') ng=true;
         if(attrs[i].name=='data') data=attrs[i].value;
         if(attrs[i].name=='oenv') oenv=true;;
       }
     }
     let ret=bf.run(code,data,ng,reverse);
     if(oenv) elem.innerHTML=ret.env; else elem.innerHTML=ret.out;
}
function bf_loader(){
	let x=document.getElementsByTagName('brainfuck');
	for (var i = 0, len = x.length; i < len; i++) {
  	process_bf(x[i]);
	}
}
document.addEventListener('DOMContentLoaded', bf_loader, false);
