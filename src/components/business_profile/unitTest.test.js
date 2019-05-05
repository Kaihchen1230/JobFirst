import {render, fireEvent, wait} from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import 'jest-dom/extend-expect';
import BriefInfo from './briefInfo';

const todos = [
  {
    title: 'todo1'
  },
  {
    title: 'todo2'
  }];

describe('Todos', () => {
  it('finds title', () => {
    const {getByText, getByTestId, container} 
        = render(
            <BriefInfo companyType ="internet"
                       headquarter ="NY"
                       size = {2}
                       companyWebsite = "alibaba.com"
                       jobAmount ={3}
            />);
    const elem = getByTestId('item');
    expect(elem.innerHTML).toBe('todo1');

  })
});