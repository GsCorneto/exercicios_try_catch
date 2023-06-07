/*
  Os atributos nomes, idade e especie são todos necessários. Assim, usando Try e Catch trate os erros e apresente uma mensagem de erro quando houve atributos vazios.
*/

class Aviso extends Error{
  constructor(message){
    super(message);
    this.name = "Falta de Atributos"
  }
}

class Animais {
  constructor(nome, idade, especie) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  mostrarAtributos(){
    try{
      return this.atributos();
  }
  catch (erro){
      console.log(erro)
  }
  } 

  atributos() {
    if (this.nome != "" && this.idade != "" && this.especie != ""){
      return this.nome + this.idade + this.especie;
  }else{
      throw new Aviso("Insira os atributos que faltam!")
  }
  }
}

const meuAnimal = new Animais("", "", "");
const atributos = meuAnimal.mostrarAtributos();
console.log(atributos)

// Imprimindo os atributos
//console.log(atributos.nome);   
//console.log(atributos.idade);  
//console.log(atributos.especie); 
//console.log()
