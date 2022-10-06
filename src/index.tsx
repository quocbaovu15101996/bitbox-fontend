import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import './styles/index.less';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './mock';
import { store, persistor } from './stores';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from 'modules/firebaseConfig';
import { PersistGate } from 'redux-persist/integration/react';
import LoadingData from 'components/loading-spinner/loading-data';

initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<LoadingData />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// hmr enable
if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
