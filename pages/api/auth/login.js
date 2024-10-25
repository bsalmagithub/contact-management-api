import bcrypt from 'bcrypt';
import { db } from '../../../utils/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const user = await db.getUserByEmail(email);
    if (!user) return res.status(401).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    res.status(200).json({ message: 'Login successful' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
