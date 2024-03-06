/*function pessoa() {
    this.idade = 0
}
setInterval(function() {
    this.idade++
    console.log(this.idade)
},1000)
new pessoa*/
// vai ser exacutado a cada um segundo, mas somente o NaN, porque o This não grudou na idade
// o que o programa pede é que seja add 1 ano a cada segundo na propriedade idade, mas ele apenas vai iniciar o programa
// por isso agora entra o Bind como solução

/*function pessoa() {
    this.idade = 0
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}


new pessoa*/ 

//agora usando o self
// o self vai anconrar o this com uma variavel global, porque o this pode sempre variar se estiver sozinho
function pessoa() {
    this.idade = 0

    const self = this  
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    },1000)
}
new pessoa