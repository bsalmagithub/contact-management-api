import { db } from '../../../utils/db';
import { validateContact } from '../../../utils/validation';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { error } = validateContact(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const contact = await db.addContact(req.body);
    res.status(201).json(contact);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
