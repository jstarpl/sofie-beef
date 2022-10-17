import { render, MountableElement } from 'solid-js/web';

import App from './views/App';
navigator.serviceWorker.register('serviceWorker.mjs', {
  type: 'module',
});
render(() => <App />, document.getElementById('app') as MountableElement);
