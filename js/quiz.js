	function show(){
	var total=0;
	var answers= ['a','b','c','d','a'];
	var q= document.getElementsByClassName('q').length;
		var i=1;
		for(var i=1;i<=q;i++){
		var a= document.forms.form1.elements['q'+i].value; // or var a= document.forms['form1']['q'+i].value; or document.forms['form1'].elements['q'+i].value;
		if(a==answers[i-1]){
			total++;
		}
	
	}
	var score= (total/q)*(100);
		document.getElementById('Answer').innerHTML='<h3 id="score">Congrtulations you scored '+score+'%</h3>';
		window.location.href='#top';
}