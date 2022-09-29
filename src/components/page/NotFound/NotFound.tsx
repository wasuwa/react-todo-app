import React from 'react';
import { Header } from "../../ui/Header/Header"
import { PageError } from "../../ui/PageError/PageError"

export const NotFound = () => {
  return (
    <>
      <Header />
      <main className='bg-primary-background'>
        <div className='m-one'>
          <PageError text='ページが見つかりません' />
        </div>
      </main>
    </>
  )
}
