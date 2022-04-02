// Codigo del Cuadrado
console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden ${ladoCuadrado} cm`);

const perimetroCuadrado = (lado) => {
  return lado * 4;
};

const areaCuadrado = (lado) => {
  return lado * lado;
}

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log(`El perimetro del cuadrado es ${perimetroCuadrado(56)} cm`);

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log(`El area del cuadrado es ${areaCuadrado} cm^2`);

console.groupEnd();

// Codigo del Triangulo
console.group("Triangulo")

const perimetroTriangulo = (lado1, lado2, base) => {
  return lado1 + lado2 + base;
}

const areaTriangulo = (base, altura) => {
  return (base * altura) / 2;
}

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(`Los lados del triangulo miden ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, ${baseTriangulo} cm`);

// const alturaTriangulo = 5.5;
// console.log(`La altura del triangulo es ${alturaTriangulo} cm`);

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log(`El perimetro del triangulo es ${perimetroTriangulo} cm`);

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log(`El area del triangulo es ${areaTriangulo} cm^2`);

console.groupEnd();

// Codigo del circulo
console.group("Circulo");

const diametroCirculo = (radio) => {
  return radio * 2;
}

const perimetroCirculo = (radio) => {
  return diametroCirculo(radio) * Math.PI;
}

const areaCirculo = (radio) => {
  return (radio ** 2) * Math.PI;
}

// Radio
// const radioCirculo = 4;
// console.log(`El radio del circulo es ${radioCirculo} cm`);

// // Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log(`El diametro del circulo es ${diametroCirculo} cm`);

// // PI
// const PI = Math.PI;
// console.log(`PI vale ${PI}`);

// // Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log(`El perimetro del circulo es ${perimetroCirculo} cm`);

// // Area
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log(`El area del circulo es ${areaCirculo} cm^2`);

console.groupEnd();