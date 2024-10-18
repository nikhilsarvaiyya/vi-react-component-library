import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/vi-lib.css'
import Home from './pages/Home';
import Layout from './core/Layout';
import menuJs from './assets/js/menu';

let menu = menuJs
let MenuBar = menu.map((item, i) => {
  return <Route key={i} path={item.path} element={item.component} />
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout menu={menu}  />}>
          <Route index element={<Home menu={menu}/>} />
          {MenuBar}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
