//Desafio 1

const hobbies = ["assistir série, anime e etc", "jogar basquete", "jogar videogame", "ler", "correr", "tocar violão"]; //Dá o valor de todos os hobbies

hobbies.forEach(function(hobby) {
  console.log("Olá, eu sou o hobby de " + hobby + "!"); //Constrói e dá output na frase solicitada juntamente com todos os hobbies
});



//Desafio 2

const bookTitles = hobbies.map(function(hobby) { //Transforma o array anterior em um novo
    return "O incrível mundo de " + hobby; //Cria a frase pedida
    });
    console.log("Catálogo de Livros baseado em Hobbies:");
    console.log(bookTitles); //Da output na frase



//Desafio 3

const jogarHobbies = hobbies.filter(function(hobby) { //Cria a variável que será usada para filtrar
    return hobby.startsWith('jogar'); //Usa o "startsWith" para filtrar
  });
  console.log("Hobbies que começam com jogar:");
  console.log(jogarHobbies); //Da output no que queremos
  



//Desafio 4

const runningPosition = hobbies.findIndex(function(hobby) { //Cria a variável que irá procurar e achar o hobbie
  return hobby === 'correr'; //Especifica que queremos o hobbie "correr"
});

console.log("A posição de 'correr' na lista de hobbies é: " + runningPosition); //Da output da posição do hobbie "correr"



//Desafio 5 (Esse eu tentei fazer algo maior kkkk)

const allHobbies = hobbies.reduce(function(accumulator, hobby, index) { //Cria a variável allHobbies, que será responsável para fazer a frase solicitada
    if (index === 0) { //Cria a condição de que se o valor da index do allHobbies for igual a 0, retorna o hobby
      return hobby;
    } else if (index === hobbies.length - 1) { //Se for o último elemento, adicionamos " e " antes do hobby.
      return accumulator + " e " + hobby;
    } else { 
      return accumulator + ", " + hobby; //Para todos os outros elementos, adicionamos uma vírgula antes do hobby.
    }
  }, "");
  
  console.log("Meus hobbies são: " + allHobbies); //Da output na frase requerida



  //Desafio 5 (Tem dois)

  const sizeHobbies = hobbies.filter(function(hobby) { //Cria a variável que irá filtrar os hobbies
    return hobby.length > 8; //Faz a condição que um hobbie tem que ter para ser mostrado
  });
  
  console.log("Hobbies com mais de 8 letras:");
  console.log(sizeHobbies); //Da output nos hobbies



  //Desafio 6

  const allLowercase = hobbies.every(function(hobby) { //Cria a variável que iremos usar para descobrir se todos os hobbies começam com letra minúscula
    return hobby[0] === hobby[0].toLowerCase(); //Pega a primeira letra de todos os hobbies e verifica se são caractéres em minúsculo
  });
  
  console.log("Todos os meus hobbies começam com letras minúsculas? " + allLowercase); //Mostra a mensagem pedida



  //Desafio 7

  const hobbyWithZ = hobbies.find(function(hobby) { //Cria a variável usada para ver se tem hobbies com "z"
    return hobby.includes('z'); //Faz a verificação
  });
  
  console.log("Meu primeiro hobby com a letra 'z' é: " + hobbyWithZ); //Traz a mensagem requerida (No caso não tem hobbies com "z")



  //Desafio 8

  const secondFourHobbies = hobbies.slice(1, 4);
console.log("Meus hobbies do segundo ao quarto são: ", secondFourHobbies);

  
  


  