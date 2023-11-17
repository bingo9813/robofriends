import React from 'react';
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
// import registerServiceWorker from './registerServiceWorker';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

reportWebVitals();