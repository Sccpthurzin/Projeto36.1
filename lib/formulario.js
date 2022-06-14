class formulario {
    constructor(){
    this.input=createInput("").attribute("placeholder","digite seu nome") 
    this.button=createButton("Play")
    this.title=createImg("./assets/TITULO.png")    
    this.welcome=createElement("h2")
    
    }
    Posicoesdeelemento(){
    this.title.position(120,50)
    this.input.position(width/2-110,height/2-80)
    this.button.position(width/2-90,height/2-20)
    this.welcome.position(width/2-300/height/2-100)
    }
    Estilodeelemento(){
    this.title.class("gameTitle")
    this.input.class("customInput")
    this.button.class("customButton")
    this.welcome.class("greeting")
    }
    hide(){
    this.welcome.hide();
    this.button.hide();
    this.input.hide();
    }
    clicarnobutao(){
        this.button.mousePressed(() => {
                this.input.hide();
                this.button.hide();
                var message = `
                Olá ${this.input.value()}
                </br>espere o outro jogador entrar...`;
                this.welcome.html(message);    
        })
        }
    show(){
    this.Posicoesdeelemento();
    this.Estilodeelemento();
    this.clicarnobutao();
    }
    
    
}