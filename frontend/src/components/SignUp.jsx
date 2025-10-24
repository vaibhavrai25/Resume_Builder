import React, {useContext, useState} from 'react';
import { authStyles as styles } from '../assets/dummystyle';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../utils/helper';
import { Input } from './Inputs.jsx';
import axiosInstance from '../utils/axiosInstance.js';
import { API_PATHS } from '../utils/apiPaths.js';
const SignUp = ({setCurrentPage}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if(!fullName || !email || !password) {
      setError("All fields are required");
      return;
    }
    if(!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }
    if(!password || password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    setError(null);
    try {
  const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
    name: fullName,
    email,
    password,
  });
  const { token } = response.data;
  if (token) {
    localStorage.setItem('token', token);
    updateUser(response.data);
    navigate('/dashboard');
  }
} catch (error) {
  setError(error.response?.data?.message || 'Something went wrong. Please try again');
}


}

    
  return (
    <div className={styles.signupContainer}>
      <div className={styles.headerWrapper}>
        <h3 className={styles.signupTitle}>Create Account</h3>
        <p className={styles.signupSubtitle}>Join thousands of professionals today</p>
      </div>

      {/* form*/}
      <form onSubmit={handleSignUp} className={styles.signupForm}>
  <Input
    value={fullName}
    onChange={({ target }) => setFullName(target.value)}
    label='Full Name'
    placeholder='Vaibhav Rai'
    type='text'
  />

  <Input
    value={email}
    onChange={({ target }) => setEmail(target.value)}
    label='Email'
    placeholder='example@gmail.com'
    type='email'
  />

  <Input
    value={password}
    onChange={({ target }) => setPassword(target.value)}
    label='Password'
    placeholder='Min 8 characters'
    type='password'
  />

  {error && <div className={styles.errorMessage}>{error}</div>}
  <button type='submit' className={styles.signupSubmit}>
    Create Account
  </button>

  {/* footer*/}
  <p className={styles.switchText}>
  Already have an account?{' '}
  <button 
    onClick={() => setCurrentPage('login')}
    type='button' 
    // Use the same class as the login page's switch button
    className={styles.switchButton} 
  >
    Sign In
  </button>
</p>

</form>
      
    </div>
  )
}

export default SignUp