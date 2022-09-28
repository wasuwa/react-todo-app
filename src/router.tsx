import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from './components/page/NotFound/NotFound';

import { Top } from './components/page/Top/Top';

export const Router = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Top />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

