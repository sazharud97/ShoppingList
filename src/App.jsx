import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingList from './ShoppingList'

function App() {
  const data = [
    { item: 'eggs', quantity: 4, completed: false },
    { item: 'chocolate', quantity: 1, completed: true },
    { item: 'abbles', quantity: 18, completed: false }
  ]
  return (
    <>
      <div>
        <ShoppingList items={data} />
      </div>
    </>
  )
}

export default App
