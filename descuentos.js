// Definir las variables
const precioOriginal = 600;
const descuento = 25;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento
  const precioConDescuento = precio * (porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

console.log(calcularPrecioConDescuento(3000, 15));