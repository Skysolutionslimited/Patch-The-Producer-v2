import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Dash, Login, Signup, Genres, Test } from './pages';
import { Global } from './components/Styled';
import { render } from 'react-dom';
import React from 'react';

const rootElement = document.getElementById('root');
render(
	<BrowserRouter>
  	<Global />
  	<Routes>
      <Route path='/' element={<Home />} />
      <Route path='Dash' element={<Dash />} />
      <Route path='Login' element={<Login />} />
      <Route path='Signup' element={<Signup />} />
      <Route path='Genres' element={<Genres />} />
      <Route path='Test' element={<Test />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);