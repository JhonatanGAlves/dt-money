export const getTransactions = (): Promise<any> => {
  return fetch("http://localhost:3000/transactions", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};
