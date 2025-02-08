import { useState } from 'react'

function ProductGrid({ setCurrentPage }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const products = [
    {
      id: 1,
      name: 'Dragon Slayer',
      paintedPrice: 149.99,
      unpaintedPrice: 29.99,
      image: 'https://placehold.co/400x400',
      description: 'Hand-painted dragon slayer miniature',
      category: 'Fantasy'
    },
    {
      id: 2,
      name: 'Space Marine',
      paintedPrice: 169.99,
      unpaintedPrice: 34.99,
      image: 'https://placehold.co/400x400',
      description: 'Custom painted space marine',
      category: 'Sci-Fi'
    },
    {
      id: 3,
      name: 'Elven Ranger',
      paintedPrice: 129.99,
      unpaintedPrice: 24.99,
      image: 'https://placehold.co/400x400',
      description: 'Detailed elven ranger with bow',
      category: 'Fantasy'
    }
  ]

  const categories = ['All', 'Fantasy', 'Sci-Fi', 'Historical']

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
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img 
              src={product.image}
              alt={product.name}
              style={{
                width: '100%', 
                height: '250px', 
                objectFit: 'cover', 
                borderRadius: '4px'
              }}
            />
            <h2 style={{margin: '10px 0'}}>{product.name}</h2>
            <p style={{color: '#aaa'}}>{product.description}</p>
            <p style={{color: '#4CAF50'}}>Category: {product.category}</p>
            <div style={{
              display: 'flex', 
              flexDirection: 'column',
              gap: '10px',
              marginTop: '10px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{color: '#4CAF50', fontSize: '1.1rem'}}>${product.paintedPrice}</span>
                <button style={{
                  background: '#4CAF50', 
                  color: 'white', 
                  border: 'none', 
                  padding: '8px 16px', 
                  borderRadius: '4px', 
                  cursor: 'pointer'
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#45a049'}
                onMouseLeave={e => e.currentTarget.style.background = '#4CAF50'}
                >
                  Add Painted to Cart
                </button>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{color: '#808080', fontSize: '1.1rem'}}>${product.unpaintedPrice}</span>
                <button style={{
                  background: '#808080', 
                  color: 'white', 
                  border: 'none', 
                  padding: '8px 16px', 
                  borderRadius: '4px', 
                  cursor: 'pointer'
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#666666'}
                onMouseLeave={e => e.currentTarget.style.background = '#808080'}
                >
                  Add Unpainted to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid