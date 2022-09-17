import React, { Component, Suspense, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/global/Layout'
import ChooseIngredientsPage from './pages/ChooseIngredientsPage'
import HomePage from './pages/HomePage'
import NewFeedPage from './pages/NewFeedPage'

const App = () => {
  return (
    <BrowserRouter>
    <Layout >
      <Suspense fallback={<h2>Loading ...</h2>}>
        <Routes>
          <Route exact path="/" name="Home Page" element={<HomePage />} />
          <Route exact path="/new-feed" name="New Feed Page" element={<NewFeedPage />} />
          <Route exact path="/choose-ingredient" name="Choose Ingredient Page" 
          element={<ChooseIngredientsPage />} />

        </Routes>
      </Suspense>
    </Layout>
    </BrowserRouter>
  )
}

export default App