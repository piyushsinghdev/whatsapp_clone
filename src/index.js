import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StoreProvider } from 'easy-peasy';
import { store } from './store.js';
import { BrowserRouter } from "react-router-dom";
import PageRoute from './routes/PageRoute';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <StoreProvider store={store}>
      <PageRoute/>
    </StoreProvider>
  </BrowserRouter>

);


