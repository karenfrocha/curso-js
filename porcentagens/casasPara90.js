/**
 * Calcula quantas casas faltam para atingir 90% do total de casas.
 * @param {number} casasVisitadas - Número de casas já visitadas.
 * @param {number} totalCasas - Total de casas a serem visitadas.
 * @returns {number} Número de casas que faltam para atingir 90%.
 */
function casasFaltandoPara90(casasVisitadas, totalCasas) {
  const meta = Math.ceil(totalCasas * 0.9);
  return Math.max(0, meta - casasVisitadas);
}

// Exemplo de uso:
const casasVisitadas = 68;
const totalCasas = 134;
const faltam = casasFaltandoPara90(casasVisitadas, totalCasas);
console.log(`Faltam ${faltam} casas para atingir 90% das visitas.`);
