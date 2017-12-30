import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('sould render ExpenseDashboardPage', () => {
    const wrapper = shallow(<ExpenseDashboardPage/>);

    expect(wrapper).toMatchSnapshot();
});