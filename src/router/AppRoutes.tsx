import { createEffect } from 'solid-js';

import { Provider, router, Router } from '../router';

import Landing from '@/views/Landing';
import Workspace from '@/views/Workspace';
import NotFound from '@/views/NotFound';
import { useAppStore } from '@/stores/AppStore';

export default function AppRoutes() {
  const [store] = useAppStore();
  createEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      console.log(store);
      if (!store.isAuthorized) {
        router.navigate('landing');
        return;
      }
      router.navigate('workspace');
    });
  });

  return (
    <Provider>
      <Router>
        {{
          fallback: NotFound,
          landing: {
            render: Landing,
          },
          workspace: {
            render: Workspace,
          },
        }}
      </Router>
    </Provider>
  );
}
