import { db } from '../../../utils/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const contacts = await db.getContacts();
    res.status(200).json(contacts);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
