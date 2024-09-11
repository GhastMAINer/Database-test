// api/upload.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { text } = req.body;

      // For simplicity, simulate storing the text
      // Replace this with actual BlobStore logic or any storage you are using
      console.log('Received text:', text);

      res.status(200).json({ message: 'Text uploaded successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
