import {
    setStartDate,
    setEndDate,
    setTextFilter,
    sortByAmount,
    sortByDate
} from '../../actions/filters';
import moment from 'moment';

test('sould generate set start date action object', () => {
    const startDate = moment(0);
    const action = setStartDate(startDate);

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate
    });
});

test('sould generate set end date action object', () => {
    const endDate = moment(0);
    const action = setEndDate(endDate);

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate
    });
});

test('sould generate set text filter action object with provided values', () => {
    const text = 'abc';
    const action = setTextFilter(text);

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('sould generate set text filter action object with default values', () => {
    const text = '';
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('sould generate sort by amount action object', () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('sould generate sort by date action object', () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});
