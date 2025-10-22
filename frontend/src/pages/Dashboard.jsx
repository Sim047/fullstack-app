import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { usersAPI } from '../services/api';

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, logout } = useAuth();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await usersAPI.getUsers();
      setUsers(response.data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container">
        <div style={{ 
          background: 'white', 
          borderRadius: '8px', 
          padding: '2rem',
          textAlign: 'center'
        }}>
          <p>Loading users...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div style={{ 
        background: 'white', 
        borderRadius: '12px', 
        padding: '2rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <h1 style={{ color: '#333', margin: 0 }}>
            Dashboard
          </h1>
          <button 
            onClick={logout}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </div>

        <div style={{
          backgroundColor: '#d4edda',
          border: '1px solid #c3e6cb',
          borderRadius: '6px',
          padding: '1rem',
          marginBottom: '2rem'
        }}>
          <h3 style={{ color: '#155724', margin: '0 0 0.5rem 0' }}>
            🎉 Welcome, {user?.name}!
          </h3>
          <p style={{ color: '#155724', margin: 0 }}>
            You have successfully logged in to your account.
          </p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3>Registered Users</h3>
          {users.length === 0 ? (
            <p>No users found in the database.</p>
          ) : (
            <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
              {users.map((user) => (
                <div 
                  key={user._id}
                  style={{
                    padding: '1rem',
                    border: '1px solid #ddd',
                    borderRadius: '5px'
                  }}
                >
                  <strong>{user.name}</strong> - {user.email}
                  <br />
                  <small>Joined: {new Date(user.createdAt).toLocaleDateString()}</small>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;