import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const LoginPage = () => { 
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const navigate = useNavigate(); 

  // Predefined admin credentials
  const adminUsername = 'admin'; 
  const adminPassword = 'admin123'; 

  const handleLogin = async (e) => { 
    e.preventDefault(); 
    
    // Check if the input credentials match the predefined admin credentials
    if (username === adminUsername && password === adminPassword) { 
      localStorage.setItem('token', 'admin-token'); // Store a token or any relevant info 
      navigate('/skills'); // Redirect to skills page 
    } else { 
      try { 
        const response = await axios.post('http://localhost:5000/api/login', { username, password }); 
        localStorage.setItem('token', response.data.token); 
        navigate('/index'); 
      } catch (error) { 
        console.error('Login failed', error); 
      } 
    } 
  }; 

  return ( 
    <div 
      className="d-flex justify-content-center align-items-center vh-100" 
      style={{ 
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        position: 'relative', 
        zIndex: 1, 
      }}
    >
      {/* Background Overlay */}
      <div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backdropFilter: 'blur(10px)', 
        }}
      ></div>
      
      <div 
        className="card p-5 shadow-lg" 
        style={{ 
          width: '400px', 
          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
          borderRadius: '15px', 
          zIndex: 2, 
        }}
      >
        <h3 
          className="text-center mb-4" 
          style={{ 
            color: '#333', 
            fontWeight: 'bold', 
            letterSpacing: '1px', 
          }}
        >
          Login
        </h3>
        <form onSubmit={handleLogin}> 
          <div className="form-group mb-3"> 
            <label htmlFor="username" className="form-label">Email/Username</label> 
            <input 
              type="text" 
              id="username" 
              className="form-control" 
              placeholder="Enter your username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              style={{ 
                borderRadius: '10px', 
                border: '1px solid #ccc', 
                padding: '10px', 
                transition: 'border-color 0.3s ease', 
              }}
              onFocus={(e) => (e.target.style.borderColor = '#764ba2')} 
              onBlur={(e) => (e.target.style.borderColor = '#ccc')} 
            /> 
          </div> 

          <div className="form-group mb-3"> 
            <label htmlFor="password" className="form-label">Password</label> 
            <input 
              type="password" 
              id="password" 
              className="form-control" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              style={{ 
                borderRadius: '10px', 
                border: '1px solid #ccc', 
                padding: '10px', 
                transition: 'border-color 0.3s ease', 
              }} 
              onFocus={(e) => (e.target.style.borderColor = '#764ba2')} 
              onBlur={(e) => (e.target.style.borderColor = '#ccc')} 
            /> 
          </div> 

          <button 
            type="submit" 
            className="btn btn-primary w-100 mb-3" 
            style={{ 
              backgroundColor: '#764ba2', 
              borderColor: 'transparent', 
              fontWeight: 'bold', 
              transition: 'background-color 0.3s ease', 
            }} 
            onMouseOver={(e) => (e.target.style.backgroundColor = '#5f3b83')} 
            onMouseOut={(e) => (e.target.style.backgroundColor = '#764ba2')} 
          >
            Login
          </button> 
        </form> 

        <div className="mt-3 text-center"> 
          <span style={{ fontWeight: 'bold' }}>Don't have an account?</span> 
          <button 
            className="btn btn-link" 
            style={{ 
              color: '#764ba2', 
              textDecoration: 'none', 
              fontWeight: 'bold', 
              transition: 'color 0.3s ease', 
            }} 
            onClick={() => navigate('/signup')} 
            onMouseOver={(e) => (e.target.style.color = '#5f3b83')} 
            onMouseOut={(e) => (e.target.style.color = '#764ba2')} 
          >
            Sign Up
          </button> 
        </div> 
      </div> 
    </div> 
  ); 
}; 

export default LoginPage;
