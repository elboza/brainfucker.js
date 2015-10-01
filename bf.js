function char2bf(c){
	rc="";
	a=c.charCodeAt(0);
	div=Math.floor(a/10);
	r=a%10;
	
	rc += Array(11).join('+');
	rc += "[>";
	rc += Array(div+1).join('+');
	rc += "<-]>";
	rc += Array(r+1).join('+');
	rc += ".[-]";
	
	return rc;
}
function string2bf(s){
	rc="";
	for(i=0;i<s.length;i++){
		rc += char2bf(s.charAt(i));
	}
	return rc;
}
function pretty_bf(s){
	//str.match(/.{1,3}/g)
	x=string2bf(s);
	r=x.match(/.{1,5}/g);
	return r.join(' ');
}
