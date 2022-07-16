import React from 'react'
import Header from './components/Header'
import CTA from './components/CTA/CTA'
import './index.css'

const App = () => {
  return (
    <>
        <div class="grid grid-cols-6 bg-gray-800 p-4">
            <div class=" circles ml-10 mt-6 mb-6">
                <div></div>
                <div></div>
                <div></div>
                <span></span>
                
            </div>
            <h1 class="w-50 mt-6 p-2 text-cyan-600 font-serif font-semibold text-3xl">
                <div class="wrapper">
                    <div class="typing-demo">
                            This is my IT Absolvent Homework library.
                    </div>
                </div>
            </h1>
        </div>
        
        <Header/>
        <CTA/>
    </>
  )
}

export default App