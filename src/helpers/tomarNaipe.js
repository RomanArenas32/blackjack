
export const tomarNaipe = (baraja) => {
  const newBaraja = [...baraja]; // Hacer una copia del array original
  const carta = newBaraja.pop(); // Sacar la última carta de la copia
  return carta;
};