import React, { StrictMode } from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { variableNameSetter } from './utils/globalVariables';
import { windowPrompt } from './utils/nativeFunctions';
initializeIcons();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

window.prompt = (text) => {
  variableNameSetter('varName', text);
  windowPrompt();
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
