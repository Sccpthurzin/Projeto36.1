class jogador{

    constructor(){
    this.name=null
    this.id=null
    this.positionX=0
    this.positionY=0
    }
    obterquantidadedejogadores(){
    var referenciadejogadores=database.ref("quantidadedejogadores");
    referenciadejogadores.on("value",data=>{
    quantidadedejogadores=data.val();
    })
    }
    atualizarquantidade(quantidade){
    database.ref("/").update({
    quantidadedejogadores:quantidade
    })
    }
    adicionarjogador(){
    var idjogador="players/player"+this.id
    if(this.id==1){
    this.positionX=width/2-100

    }
    else{
    this.positionX=width/2+100
    }
    database.ref(idjogador).set({
    name:this.name,positionX:this.positionX,positionY:this.positionY
    })
    }
}