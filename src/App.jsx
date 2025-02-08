import { useState } from 'react'
import ProductGrid from './components/ProductGrid'
import HomePage from './components/HomePage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div>
      {currentPage === 'home' ? 
        <HomePage setCurrentPage={setCurrentPage} /> : 
        <ProductGrid setCurrentPage={setCurrentPage} />
      }
    </div>
  )
}

export default App