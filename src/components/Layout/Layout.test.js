/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import createApolloClient from '../../core/createApolloClient';
import App from '../App';
import Layout from './Layout';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {};

describe('Layout', () => {
  test('renders children correctly', () => {
    const store = mockStore(initialState);
    const client = createApolloClient();

    const wrapper = renderer
      .create(
        <App context={{ insertCss: () => {}, fetch: () => {}, store, client }}>
          <Layout>
            <div className="child" />
          </Layout>
        </App>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
