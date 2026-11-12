import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {createStore, bindActionCreators} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';


import App from './components/App.jsx';

import './index.css';


const store = createStore(reducer);


createRoot(document.getElementById('root')).render(
    <StrictMode>

        <Provider store={store}>
            <App></App>
        </Provider>
    </StrictMode>,
)




