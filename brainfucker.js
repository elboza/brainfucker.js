function char2bf(c){
	var rc="";
	var a=c.charCodeAt(0);
	var div=Math.floor(a/10);
	var r=a%10;
	
	rc += Array(11).join('+');
	rc += "[>";
	rc += Array(div+1).join('+');
	rc += "<-]>";
	rc += Array(r+1).join('+');
	rc += ".[-]";
	
	return rc;
}
function string2bf(s){
	var rc="";
	for(var i=0;i<s.length;i++){
		rc += char2bf(s.charAt(i));
	}
	return rc;
}
function pretty_bf(s){
	//str.match(/.{1,3}/g)
	var x=string2bf(s);
	var r=x.match(/.{1,5}/g);
	return r.join(' ');
}
function trr(code,reversefuck){
	var tr={'+':'-','-':'+','.':',',',':'.','!':'?','?':'!','<':'>','>':'<','[':']',']':'['};
	if(reversefuck) return tr[code];
	return code;
}
function run(code,env,ng,reverse){
	if (typeof(ng)==='undefined') ng = false;
	if (typeof(env)==='undefined') env = null;
	if (typeof(reverse)==='undefined') reverse = false;
	var ip=0;
	var ep=0;
	var xenv=[];
	if(env==null){
		xenv=[];
	}
	else{
		xenv=[...env].map(char => char.charCodeAt(0))
	}
	var output="";
	while(ip<code.length){
		if(isNaN(xenv[ep])) xenv[ep]=0;
		var instr=trr(code[ip],reverse);
		switch(trr(code[ip],reverse)){
			case '+':
				xenv[ep]++;
				break;
			case '-':
				//if(xenv[ep]>0) xenv[ep]--;
				xenv[ep]--;
				break;
			case '>':
				++ep;//if(ep>=env.length) ep=0;
				break;
			case '<':
				--ep;//if(ep<0) ep=env.length-1;
				break;
			case '.':
				output+=String.fromCharCode(xenv[ep]);
				break;
			case ',':
				xenv[ep]=prompt("input a character",0);
				break;
			case '!':
				if(ng) output+=xenv[ep];
				break;
			case '[':
				if(xenv[ep]==0){
					var nest=1;ip++;
					while(nest){
						if(trr(code[ip],reverse)=='[') nest++;
						if(trr(code[ip],reverse)==']') nest--;
						++ip;
					}
					ip-=2;
				}
				break;
			case ']':
				if(xenv[ep]!=0){
					var nest=1;ip--;
					while(nest){
						if(trr(code[ip],reverse)==']') nest++;
						if(trr(code[ip],reverse)=='[') nest--;
						--ip;
					}
					//ip++;
				}
				break;
			default:
				
		}
		ip++;
	}
	env=xenv.map(x=>String.fromCharCode(x)).join("");
	return({"out":output,"env":env});
}
function out(code,env,ng,reverse){
	var x=run(code,env,ng,reverse);
	return x.out;
}
function process_bf(elem){
	var code=elem.innerText;
	var data='';
	var reverse=false;
	var ng=false;
	var oenv=false;
	if (elem.hasAttributes()) {
       var attrs = elem.attributes;
       var output = "";
       for(var i = attrs.length - 1; i >= 0; i--) {
         output += attrs[i].name + "->" + attrs[i].value;
         if(attrs[i].name=='reversefuck') reverse=true;
         if(attrs[i].name=='ng') ng=true;
         if(attrs[i].name=='data') data=attrs[i].value;
         if(attrs[i].name=='oenv') oenv=true;;
       }
     }
     var ret=run(code,data,ng,reverse);
     if(oenv) elem.innerHTML=ret.env; else elem.innerHTML=ret.out;
}
function loader(){
	var x=document.getElementsByTagName('brainfuck');
	for (var i = 0, len = x.length; i < len; i++) {
  	process_bf(x[i]);
	}
}
document.addEventListener('DOMContentLoaded', loader, false);
