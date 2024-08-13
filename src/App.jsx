import { useState } from 'react'

import './App.css'
import ShoppingList from './ShoppingList'
import PropertyList from './PropertyList'
import Clicker from './Clicker'

function App() {
  const data = [
    { item: 'eggs', quantity: 4, completed: false },
    { item: 'chocolate', quantity: 1, completed: true },
    { item: 'abbles', quantity: 18, completed: false }
  ]

  const properties = [
    { id: 129031, name: "Desert Yurt", rating: 2.9, price: 150 },
    { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
    { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
    { id: 129033, name: "Redwood Treehouse Escape", rating: 3.9, price: 120 },
    { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
    { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
  ];

  return (
    <>
      <div>
        <Clicker />
        <PropertyList properties={properties} />
        {/* <ShoppingList items={data} /> */}
      </div>
    </>
  )
}

export default App
