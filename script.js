
function Theme(){
    //    padrao 1
    // --darkblue: rgb(82, 82, 252);
    //--darkbrown: rgb(34, 16, 16,.2);
   // --darkgreen: rgb(19, 187, 199);
   // --darkwhite: #fff;
    
   //  padrao 2
   // --darkblue: rgb(3, 1, 29);
   // --darkbrown: rgb(93, 218, 240);
  //  --darkgreen: rgb(4, 41, 44);
  //

  //  padrao 3
  // --darkblue: rgb(154, 255, 213); **
  //  --darkbrown: rgb(10, 93, 107);
  //  --darkgreen: rgb(4, 41, 44);
  //  --darkwhite: #000;


    //  var padrao1 = ["rgb(82, 82, 252)","rgb(34, 16, 16,.2)","rgb(19, 187, 199)","#fff"] roxo
    var padrao2 = ["rgb(3, 1, 29)","rgb(93, 218, 240)","rgb(3, 1, 29)","#fff"] // azul escuro
    var padrao3 = ["rgb(154, 255, 213)","rgb(10, 93, 107)","rgb(4, 41, 44)","#000"] // azul esverdeado
    var padrao1 = ["rgb(241,233,208)","rgb(27,25,22)","rgb(233,59,38)","#000"] // laranja marrom
    var padrao = [padrao1,padrao2,padrao3]
    getPadrao = padrao[Math.floor(Math.random()*padrao.length)]

    document.documentElement.style.setProperty('--darkblue', getPadrao[0]); // fundo
    document.documentElement.style.setProperty('--darkbrown', getPadrao[1]); // fieldset
    document.documentElement.style.setProperty('--darkgreen',getPadrao[2]); // bordas
    document.documentElement.style.setProperty('--darkwhite', getPadrao[3]); // titulo
}


function generate(){
	var n = document.getElementById("valor").value;
	var option = document.getElementsByName("switch")
	
	for(var i = 0; i<=option.length; i++){
		if(option[i].checked){
			var opt = option[i].value
			break
		}
		
	}
		if(opt == "decbin"){
			
			return document.getElementById("resultado").value = bin(n);
			
			
		}else if(opt == "dechex"){
			
			return document.getElementById("resultado").value = hex(n);
			
		}else if(opt == "decoct"){
			
			return document.getElementById("resultado").value = oct(n);
			
		}
		
		
		
	
}


	function bin(n) {
		
		if(n >= 0) {
			n = (n >>> 0).toString(2);
		}else{
			n = (~n).toString(2);
		
		}
		return n;
	}
	
	function dec(n) {

		var dec = 0;
		for (var c = 0; c < n.length; c++) dec += Math.pow(2, c) * n[n.length - c - 1]; //calcula para pegar do último ao primeiro
		return n;
		
		
	}
	
	function hex(n) {
		
		if(n >= 0) {
			n = (n >>> 0).toString(16);
		}else{
			n = (~n).toString(16);
		
		}
		return n.toUpperCase();
	}
	
	function oct(n) {
	
	if(n >= 0) {
		n = (n >>> 0).toString(8);
	}else{
		n = (~n).toString(8);
	
	}
	return n;
}
function clipBoard() {
  /* Get the text field */
  var copyText = document.getElementById("resultado");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  document.execCommand("resultado");
}

