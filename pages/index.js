// pages/index.js
import Link from 'next/link';
import AddContact from '../components/AddContact'; 
import LoginForm from '../components/LoginForm'; 
import RegisterForm from '../components/RegisterForm'; 
import styles from '../styles/Home.module.css'; 

const Home = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Welcome to the Contact Management API</h1>
    <p className={styles.description}>
      This API manages contacts. Use the links below to test available routes:
    </p>
    <ul className={styles.links}>
      <li className= {styles.navListItem}><Link href="/api/contacts">Get All Contacts</Link></li>
      <li className= {styles.navListItem}><Link href="/api/auth/login">Login</Link></li>
      <li className={styles.navListItem}><Link href="/api/auth/register">Register</Link></li>
    </ul>
    
    <div className={styles.formContainer}>
      <h2 className={styles.subheading}>Add a New Contact</h2>
      <AddContact />
      
      <h2 className={styles.subheading}>Login</h2>
      <LoginForm />
      
      <h2 className={styles.subheading}>Register</h2>
      <RegisterForm />
    </div>
  </div>
);

export default Home;
