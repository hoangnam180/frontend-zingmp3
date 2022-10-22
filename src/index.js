import React from 'react';
import App from '~/App';
import ReactDOM from "react-dom";
import GlobalStyles from '~/components/GlobalStyles';
import {Provider} from 'react-redux'
import store from "~/redux/app/store"
const rootNode = document.getElementById('root');
ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles>
        <Provider store={store} >
            <App />
        </Provider>
        </GlobalStyles>
    </React.StrictMode>, rootNode);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
