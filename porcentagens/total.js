/**
 * Calcula a porcentagem de casas visitadas em relação ao total de casas.
 * @param {number} casasVisitadas - Número de casas visitadas.
 * @param {number} totalCasas - Total de casas a serem visitadas.
 * @returns {number} Porcentagem de casas visitadas.
 */
function calcularPorcentagem(casasVisitadas, totalCasas) {
  if (totalCasas === 0) return 0;
  return (casasVisitadas * 100) / totalCasas;
}

// Exemplo de uso:
const casasVisitadas = 68;
const totalCasas = 134;
const porcentagem = calcularPorcentagem(casasVisitadas, totalCasas);
console.log(`Porcentagem de casas visitadas: ${porcentagem.toFixed(2)}%`);