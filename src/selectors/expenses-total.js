export default (expenses) => {
    return expenses.map(({ amount }) => amount).reduce((a, b) => a + b, 0);
};