import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
});

test('should remove expense', () => {
    const id = expenses[1].id;
    const action = {
        type: 'REMOVE_EXPENSE',
        id
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ]);
});

test('should not remove expense if id not found', () => {
    const id = -1;
    const action = {
        type: 'REMOVE_EXPENSE',
        id
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const expense = {
        id: '4',
        description: 'Laptop',
        note: '',
        amount: 195,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([
        ...expenses,
        expense
    ]);
});

test('should edit expense', () => {
    const id = expenses[1].id;
    const updates = {
        description: 'Car'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        updates
    };
    const state = expensesReducer(expenses, action);

    expect(state.find((expense) => expense.id === id).description).toBe(updates.description);
});

test('should not edit expense if expense not found', () => {
    const id = '-1';
    const updates = {
        description: 'Car'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        updates
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses
    };
    const state = expensesReducer([], action);

    expect(state).toEqual(expenses);
});