// components/LoginForm.js
import { useState } from 'react';
import styles from '../styles/Home.module.css'; // Import your CSS module

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      alert('Login successful!');
    } else {
      alert('Login failed.');
    }
  };

  return (
    <form className = {styles.form} onSubmit={handleSubmit}>
      <div className = {styles.formdiv}>
        <label className={styles.label}>Email:</label>
        <input className={styles.inputemail}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className = {styles.formdiv}>
        <label className={styles.label}>Password:</label>
        <input className={styles.inputpassword}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className={styles.button} type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
