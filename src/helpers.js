//Slow down input field (testing)
//Once database is linked remove this promise
export const waait = () => new Promise(res => setTimeout
  (res, Math.random() * 2000))

//Gen random color:
const generateRandomColor = () => {
  const existingBudgetsLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetsLength * 34} 65% 50%`
}

// Local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

//Create budget
export const createBudget = ({
  name, amount
}) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor()
  }
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem("budgets",
  JSON.stringify([...existingBudgets, newItem]))
}

// delete item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key)
}