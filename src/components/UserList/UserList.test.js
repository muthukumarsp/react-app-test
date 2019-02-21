import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from 'react-testing-library';
import 'jest-dom/extend-expect';
import UserList from './UserList';

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
  const { getByText, getByTestId } = render(<UserList userList={testData} />);
});
