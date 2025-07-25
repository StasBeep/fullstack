import React from 'react';
import ReactDOM from 'react-dom/client';
import { RootStoreContext } from './stores/RootStoreContext';
import rootStore from './stores/RootStore';
import App from './components/App';
import './styles/index.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <RootStoreContext.Provider value={rootStore}>
            <App />
        </RootStoreContext.Provider>
    </React.StrictMode>
);