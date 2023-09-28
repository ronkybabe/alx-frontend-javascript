/**
 * Creates and returns a budget object with the given income, GDP, and per capita values.
 *
 * @param {number} income - The income value to be included in the budget object.
 * @param {number} gdp - The GDP (Gross Domestic Product) value to be included in the budget object.
 * @param {number} capita - The per capita value to be included in the budget object.
 * @returns {Object} - A budget object containing income, GDP, and per capita values.
 */
export default function getBudgetObject(income, gdp, capita) {
  // Create a budget object with the provided values
  const budget = {
    income,
    gdp,
    capita,
  };

  // Return the budget object
  return budget;
}
