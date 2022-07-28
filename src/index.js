import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import App from "./App";
import './index.css';

import reducers from './reducers/index'; 

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const app = ReactDOM.createRoot(document.getElementById('root'));

app.render(
     <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
     </React.StrictMode>

)

