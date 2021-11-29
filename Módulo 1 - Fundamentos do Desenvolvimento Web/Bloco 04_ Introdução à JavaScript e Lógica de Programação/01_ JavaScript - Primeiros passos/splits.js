//CONSTANTES E VARIÁVEIS


const age = 24;
let nome = "Gideão";
const myName = "Gideão de Carvalho";
const birthCity = "Pindamonhangaba";
let birthYear = 2030;

console.log(myName);
console.log(birthCity);
console.log(birthYear);
console.log(age);
console.log(nome);

// TIPOS PRIMITIVOS, TIPAGEM DINÂMICA E
// OPERAÇÕES ARITMÉTICAS

let movie = "Avengers"; //string litral
let score = 10; //number literal
let isValid = true; //boolean
let name; //undefined
let color = null; //redefinição
let salary = 3950;

console.log(salary + salary);
salary++;
console.log(salary);

  const base = 5;
  let height = 8;
  const area = base * height;
  const perimeter = base + height + area;
  console.log(area);
  console.log(perimeter);
  
  // CONDIÇÕES IF E ELSE

let trybe = 22;
if (trybe >= 14 && trybe < 14.40) {
    console.log("Esquenta");
}
else if (trybe >= 16.30 && trybe < 17.50) {
    console.log("Aula ao vivo");
}
else if (trybe >= 19.40 && trybe < 20) {
    console.log("Fechamento");
}
else {
    console.log("Fora dos momentos síncronos");
}

// OPERADORES LÓGICOS
// .Operador AND (E)

const comida = "pão na chapa";
const bebida = "cafézinho";

   if (bebida ==="cafézinho" && comida === "pão na chapa") {
       console.log("Muito obrigado pela refeição :)");
   } else {
       console.log("acho que houve um engano com o meu pedido")
   }

  const currentHour = 12;
  let message = ""; 
  if (currentHour >= 22) {
      console.log(message = "Não deveríamos comer nada é hora de dormir");
  }
  else if (currentHour >= 18 && currentHour < 22) {
      console.log(message = "Rango da noite, vamos jantar:D");
  }
  else if (currentHour > 11 && currentHour < 14) {
      console.log(message = "Hora do almoço");
  }
  else if (currentHour > 4 && currentHour < 11) {
      console.log(message = "Hmmm, cheiro de café recém passado");
  }
  //.Operador OR (ou)

const bebidaPrincipal =  "guaraná";
const bebidaAlternativa = "suco de laranja";

if (bebidaPrincipal === "cafezinho" || bebidaAlternativa === "suco de laranja") {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}