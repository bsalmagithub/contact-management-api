import bcrypt from 'bcrypt';
import { db } from '../../../utils/db';
import Joi from 'joi';

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await db.createUser(req.body.email, hashedPassword);
    res.status(201).json({ message: 'User created' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
