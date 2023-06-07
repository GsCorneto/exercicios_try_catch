class Alerta extends Error{
  constructor(message){
    super(message);
    this.name = "Dados incompletos."
  }
}


class NerdIF {
  constructor(estudante, cosplay, nota_cosplay) {
    this.estudante = estudante;
    this.cosplay = cosplay;
    this.nota_cosplay = nota_cosplay;
  }

  retornarAtributos() {
    return this.atributos()
  }

  atributos() {
    if (this.estudante != "" && this.cosplay != "" && this.nota_cosplay != ""){
      return this.estudante + this.cosplay + this.nota_cosplay;
  }else{
      throw new Alerta("Caro avaliador, complete os dados de sua avaliação.")
  }
  }
  }


const aluno = new NerdIF("", "", "");
const atributos = aluno.retornarAtributos();
/*
console.log(atributos.estudante); 
console.log(atributos.cosplay);   
console.log(atributos.nota_cosplay);
*/
