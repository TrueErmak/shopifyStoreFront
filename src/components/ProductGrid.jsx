import { useState } from 'react'
import ShopifyBuyButton from './ShopifyBuyButton'

function ProductGrid({ setCurrentPage }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const products = [
    {
      id: 1,
      name: 'Harley Quinn',
      category: 'Fantasy',
      shopifyId: '7224054153271'
    },
    {
      id: 2,
      name: 'xenomorph-inspired figure',  // You can update this name to match your product
      category: 'Sci-Fi',  // Update category as needed
      shopifyId: '7227864416311'  // This is the new product ID from your code
    },
    {
      id: 3,
      name: 'Optimus prime',  
      category: 'Sci-Fi',  
      shopifyId: '7227864940599'   
    },
    {
      id: 4,
      name: 'Ermac',  
      category: 'MK',  
      shopifyId: '7227866513463'  
    },

    {
      id: 5,
      name: 'Sonya Blade',  
      category: 'MK',  
      shopifyId: '7227872149559'  
    },

    

    {
      id: 6,
      name: 'jax',  
      category: 'MK',  
      shopifyId: '7227875229751'  
    },

    {
      id: 7,
      name: 'Kitana',  
      category: 'MK',  
      shopifyId: '7227875622967'  
    },

    {
      id: 8, // next
      name: 'mellena',  
      category: 'MK',  
      shopifyId: '7227876671543'  
    },

    {
      id: 9,// next
      name: 'Noob',  
      category: 'MK',  
      shopifyId: '7227879718967'  
    },

    {
      id: 10,
      name: 'raiden',  
      category: 'MK',  
      shopifyId: '7227881553975'  
    },

    {
      id: 11,
      name: 'scorpion',  
      category: 'MK',  
      shopifyId: '7227883913271'  
    },

    {
      id: 12,
      name: 'sector',  
      category: 'MK',  
      shopifyId: '7227886698551'  
    },

    {
      id: 13,
      name: 'sindel-edenian',  
      category: 'MK',  
      shopifyId: '7227902427191'  
    },

    {
      id: 14,
      name: 'subzero',  
      category: 'MK',  
      shopifyId: '7227902623799'  
    },
    
    {
      id: 15,
      name: 'Jade',  
      category: 'MK',  
      shopifyId: '7227873230903'  
    }

    
  ]

  const categories = ['All', 'Fantasy', 'Sci-Fi', 'Historical', 'MK']

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div style={{background: '#1a1a1a', minHeight: '100vh', color: 'white', padding: '20px'}}>
      <button 
        onClick={() => setCurrentPage('home')}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          background: '#4CAF50',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        ← Back to Home
      </button>

      <h1>Painted Legends Store</h1>
      
      <div style={{marginBottom: '20px'}}>
        <input 
          type="text" 
          placeholder="Search miniatures..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '500px',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #333',
            background: '#2a2a2a',
            color: 'white'
          }}
        />

        <div style={{display: 'flex', gap: '10px'}}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                background: selectedCategory === category ? '#4CAF50' : '#2a2a2a',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div style={{
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '20px', 
        padding: '20px'
      }}>
        {filteredProducts.map(product => (
          <div key={product.id} style={{
            background: '#2a2a2a', 
            padding: '15px', 
            borderRadius: '8px',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <ShopifyBuyButton productId={product.shopifyId} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid