/*
  Todos os atributos necessários. Assim, usando Try e Catch, trate os erros e apresente uma mensagem quando houver atributos vazios.
*/
class Aviso extends Error{
  constructor(message){
    super(message);
    this.name = "Falta de Atributos"
  }
}

class Estudante {
  constructor(nome, idade, turma) {
    this.nome = nome;
    this.idade = idade;
    this.turma = turma;
  }

  mostrarAtributos() {
    try{
      return this.atributos();
  }
  catch (erro){
      console.log(erro)
  }
  } 
  

  atributos() {
    if (this.nome != "" && this.idade != "" && this.turma != ""){
      return this.nome + this.idade + this.turma;
  }else{
      throw new Aviso("")
  }
  }
}

const estudante = new Estudante("", "", "");
const atributos = estudante.mostrarAtributos();

/*
console.log(atributos.nome);   
console.log(atributos.idade);  
console.log(atributos.turma); 
*/
