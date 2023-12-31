/**
 * Get the current year.
 *
 * @returns {number} - The current year as a four-digit number.
 */
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

/**
 * Create and return a budget object for the current year with the given income, GDP, and per capita values.
 *
 * @param {number} income - The income value to be included in the budget object.
 * @param {number} gdp - The GDP (Gross Domestic Product) value to be included in the budget object.
 * @param {number} capita - The per capita value to be included in the budget object.
 * @returns {Object} - A budget object for the current year containing income, GDP, and per capita values.
 */
export default function getBudgetForCurrentYear(income, gdp, capita) {
  // Create a budget object with keys that include the current year
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  // Return the budget object
  return budget;
}
