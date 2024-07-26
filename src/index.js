import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './components/Form';
import Fetch from './components/Fetch';
import A from './components/A'
import RouterEg from './components/RouterEg'



//import App from './App';
import UseEffect from './components/UseEffect'
import MultipleReturn from './components/MultipleReturn';
import UseReducerEx from './components/UseReducerEx';
import FormVal from './components/FormVal';
import HookForm from './components/HookForm'
import UseMemo from './components/UseMemo';
import Parents from './Parents';
import UseLayoutEffect from './UseLayoutEffect';
import UseRefEg from './UseRefEg';
import { UseRefDOM } from './UseRefDOM';
import UseRef2 from './UseRef2';
import CustomHook from './CustomHook';
import CustomHooks2 from './CustomHooks2'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomHook />
    <CustomHooks2/>
  </React.StrictMode>
);

