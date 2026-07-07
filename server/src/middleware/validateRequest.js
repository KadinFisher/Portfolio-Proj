export function validateContactRequest(req, res, next) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  if (!email.includes('@')) {
    return res.status(400).json({ error: 'A valid email is required.' });
  }

  if (message.length < 10) {
    return res.status(400).json({ error: 'Message must be at least 10 characters.' });
  }

  next();
}
