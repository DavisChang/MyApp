/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Aframe.css';
import TestAframe from '../../components/TestAframe';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';

const title = 'Aframe';
function Aframe(props, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <div>
          {
            canUseDOM && <TestAframe />
          }
        </div>
      </div>
    </div>
  );
}

Aframe.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Aframe);
