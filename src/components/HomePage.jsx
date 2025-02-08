function HomePage({ setCurrentPage }) {
    return (
      <div style={{
        background: '#1a1a1a',
        minHeight: '100vh',
        color: 'white',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '40px'}}>Painted Legends</h1>
        
        {/* Main Store Section - Larger and More Prominent */}
        <div style={{
          background: '#2a2a2a',
          padding: '40px',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'transform 0.2s',
          maxWidth: '800px',
          margin: '0 auto 40px auto'
        }}
        onClick={() => setCurrentPage('store')}
        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>Painted Miniatures Store</h2>
          <p style={{fontSize: '1.2rem', color: '#aaa'}}>Browse our collection of custom painted miniatures</p>
          <button style={{
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '8px',
            marginTop: '20px',
            fontSize: '1.1rem',
            cursor: 'pointer'
          }}>
            Enter Store
          </button>
        </div>
  
        {/* Other Showcases Section - Smaller Cards Below */}
        <h3 style={{fontSize: '1.5rem', marginBottom: '20px', textAlign: 'left', maxWidth: '1200px', margin: '0 auto 20px auto'}}>
          Other Collections
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Mortal Kombat Showcase */}
          <div style={{
            background: '#2a2a2a',
            padding: '20px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
          onClick={() => window.location.href = 'https://mk-prints.vercel.app/'}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <h2>Mortal Kombat Collection</h2>
            <p style={{color: '#aaa'}}>View our exclusive Mortal Kombat figure showcase</p>
          </div>
  
          {/* Custom Projects */}
          <div style={{
            background: '#2a2a2a',
            padding: '20px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
          onClick={() => window.location.href = 'https://your-other-site.com'}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <h2>Custom Projects</h2>
            <p style={{color: '#aaa'}}>Check out our special custom painting projects</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default HomePage