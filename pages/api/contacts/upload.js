import csv from 'csv-parser';
import { db } from '../../../utils/db';
import { Readable } from 'stream';
import multer from 'multer';
import nextConnect from 'next-connect';

const upload = multer({ storage: multer.memoryStorage() });
const handler = nextConnect();

handler.use(upload.single('file'));

handler.post(async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const contacts = [];
  const bufferStream = new Readable();
  bufferStream.push(req.file.buffer);
  bufferStream.push(null);

  bufferStream
    .pipe(csv())
    .on('data', (data) => contacts.push(data))
    .on('end', async () => {
      try {
        await db.bulkAddContacts(contacts);
        res.status(201).json({ message: 'Contacts uploaded successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to upload contacts' });
      }
    })
    .on('error', (error) => {
      console.error(error);
      res.status(500).json({ message: 'Error processing CSV file' });
    });
});

export default handler;
