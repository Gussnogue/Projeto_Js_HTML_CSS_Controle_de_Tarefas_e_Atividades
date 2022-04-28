var idade = 16;
var nome = "Gustavo"

if(nome == "Gustavo" && idade == 16){
    console.log("O Gustavo pode entrar na aula de esgrima")
} else {
    console.log("Este não é o Gustavo");
}

if(1 == 1 && 3 > 2 && true){
    console.log("Passou");
}

if((1 == 1 && 3 > 3) && true){
    console.log("Passou");
} else if(nome === "Gustavo" && idade >= 14){
    console.log("Aqui passa!");
}