import React from 'react';
import DevTools from '../containers/DevTools';

function DevToolsPanel({ store }) {
  return (
    <div>
      {
        !!__DEV__ && (<DevTools store={store} />)
      }
    </div>
  );
}

DevToolsPanel.propTypes = {
  store: React.PropTypes.object.isRequired,
};

export default DevToolsPanel;
