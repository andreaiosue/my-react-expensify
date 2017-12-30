import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const expected = 0;
    const result = selectExpensesTotal([]);
    expect(result).toBe(expected);
});

test('should add up a single expense', () => {
    const expected = expenses[1].amount;
    const result = selectExpensesTotal([ expenses[1] ]);
    expect(result).toBe(expected);
});

test('should add up multiple expenses', () => {
    let expected = 0;
    expenses.forEach(({ amount }) => expected += amount);
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(expected);
});
