// components/AddContact.js
import { useState } from 'react';
import styles from '../styles/Home.module.css'; // Import your CSS module

const AddContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/contacts/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone }),
    });

    if (response.ok) {
      alert('Contact added successfully!');
      setName('');
      setEmail('');
      setPhone('');
    } else {
      alert('Failed to add contact.');
    }
  };

  return (
    <form className = {styles.form} onSubmit={handleSubmit}>
      <div className = {styles.formdiv}>
        <label className={styles.label}>Name:</label>
        <input className={styles.inputtext}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
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
        <label className={styles.label}>Phone:</label>
        <input className={styles.inputtel}
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <button className={styles.button} type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;
