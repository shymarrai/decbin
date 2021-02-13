
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
    var padrao1 = ["rgb(82, 82, 252)","rgb(255, 254, 170)","rgb(19, 187, 199)","#fff"]
    var padrao2 = ["rgb(3, 1, 29)","rgb(93, 218, 240)","rgb(4, 41, 44)","#fff"]
    var padrao3 = ["rgb(154, 255, 213)","rgb(10, 93, 107)","rgb(4, 41, 44)","#000"]
    var padrao = [padrao1,padrao2,padrao3]
    getPadrao = padrao[Math.floor(Math.random()*padrao.length)]
    console.log(getPadrao)
    document.documentElement.style.setProperty('--darkblue', getPadrao[0]);
    document.documentElement.style.setProperty('--darkbrown', getPadrao[1]);
    document.documentElement.style.setProperty('--darkgreen', getPadrao[2]);
    document.documentElement.style.setProperty('--darkwhite', getPadrao[3]);
}