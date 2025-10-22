import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Home() {
  const { isAuthenticated, user } = useAuth()

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '2rem auto', 
      textAlign: 'center',
      padding: '0 1rem'
    }}>
      <h1 style={{ color: '#333', marginBottom: '1rem' }}>
        Welcome to FullStack App! 🎉
      </h1>
      
      {isAuthenticated ? (
        <div style={{ 
          backgroundColor: 'white', 
          padding: '2rem', 
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          marginTop: '2rem'
        }}>
          <h2 style={{ color: '#28a745' }}>Welcome back, {user?.name}! 👋</h2>
          <p style={{ margin: '1rem 0', fontSize: '1.1rem' }}>
            You are successfully logged in.
          </p>
          <Link 
            to="/dashboard"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
              marginTop: '1rem'
            }}
          >
            Go to Dashboard
          </Link>
        </div>
      ) : (
        <div style={{ marginTop: '3rem' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            Get started by creating an account or logging in.
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link 
              to="/login"
              style={{
                padding: '1rem 2rem',
                backgroundColor: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                minWidth: '150px'
              }}
            >
              Login
            </Link>
            <Link 
              to="/register"
              style={{
                padding: '1rem 2rem',
                backgroundColor: '#28a745',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                minWidth: '150px'
              }}
            >
              Register
            </Link>
          </div>

          <div style={{ 
            marginTop: '3rem', 
            textAlign: 'left',
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <h3>Features:</h3>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
              <li style={{ padding: '0.5rem 0' }}>✅ User Registration & Login</li>
              <li style={{ padding: '0.5rem 0' }}>✅ JWT Authentication</li>
              <li style={{ padding: '0.5rem 0' }}>✅ Protected Routes</li>
              <li style={{ padding: '0.5rem 0' }}>✅ MongoDB Database</li>
              <li style={{ padding: '0.5rem 0' }}>✅ Password Hashing</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home