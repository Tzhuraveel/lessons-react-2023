import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import {setupStore} from "./redux/store";
import {Provider} from "react-redux";
import {unstable_HistoryRouter as BrowserRouter} from "react-router-dom";
import {history} from "./utils";

const root = ReactDOM.createRoot(document.getElementById('root'));


const store = setupStore();

root.render(
       <Provider store={store}>
         <BrowserRouter history={history}>
             <App/>
         </BrowserRouter>
       </Provider>
);

