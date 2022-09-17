import React, { Component, Suspense, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/global/Layout'
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
        </Routes>
      </Suspense>
    </Layout>
    </BrowserRouter>
  )
}

export default App