import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import App from './modules/app/routes';
import * as serviceWorker from './serviceWorker';

//Redux setup
import { Provider } from "react-redux";
import store from "./config/store";

//React Query setup
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';


require('dotenv').config();

// Create a client
const queryClient = new QueryClient();

ReactDOM.render(

    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <App />
        </Provider >
        <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
