class jogo{
   constructor(){
   


   }

  start() {
  formulario1=new formulario();
  formulario1.show();
  jogador1=new jogador();
  quantidadedejogadores=jogador1.obterquantidadedejogadores();
  
  }
  obterestadodejogo(){
  var referenciadoestadodejogo=database.ref("Estado")
  referenciadoestadodejogo.on("value",function(data){
  Estado=data.val();
  }); 
  }
}


