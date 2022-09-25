import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Top } from './components/page/Top/Top';

export const Router = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Top />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

