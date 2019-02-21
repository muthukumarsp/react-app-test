import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
  getAllByText
} from 'react-testing-library';
import 'jest-dom/extend-expect';
import AllUsersPage from './AllUsers';

afterEach(cleanup);

test('UserList component loads successfully!', () => {
  const testData = [
    {
      firstName: 'Suzy',
      lastName: 'Cunningham',
      email: 'suzy.cunningham@gmail.com',
      lastLogin: 'Oct 1, 2015',
      accountOpeningDate: '1 year ago'
    },
    {
      firstName: 'John',
      lastName: 'Williams',
      email: 'john.williams@gmail.com',
      lastLogin: 'Oct 1, 2015',
      accountOpeningDate: '1 year ago'
    }
  ];
  const { getByText, getByTestId, getByPlaceholderText, getAllByText } = render(
    <AllUsersPage userList={testData} />
  );
  const input = getByPlaceholderText('search');
  fireEvent.change(input, { target: { value: 'John' } });
  expect(input.value).toBe('John');
  expect(getAllByText('john', { exact: false })).toHaveLength(4); // 4 nodes including emails
  expect(getAllByText('jane', { exact: false })).toHaveLength(2); // 2 nodes including emails
});
