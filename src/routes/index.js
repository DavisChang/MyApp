/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import App from '../components/App';
import { Provider } from 'react-redux';

// Child routes
import home from './home';
import contact from './contact';
import login from './login';
import register from './register';
import content from './content';
import error from './error';

// DevTools
import DevToolsPanel from '../containers/DevToolsPanel';

export default {

  path: '/',

  children: [
    home,
    contact,
    login,
    register,
    content,
    error,
  ],

  async action({ next, render, context, store }) {
    const component = await next();
    if (component === undefined) return component;
    return render(
      <div>
        <Provider store={store}>
          <App context={context}>{component}</App>
        </Provider>
        <DevToolsPanel store={store} />
      </div>
    );
  },

};
