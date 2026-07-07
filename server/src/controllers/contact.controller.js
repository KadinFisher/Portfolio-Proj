export function createContactMessage(req, res) {
  const { name, email, message } = req.body;

  // TODO: Later, insert this into PostgreSQL.
  // For now, just return a success response.

  res.status(201).json({
    message: 'Contact message received. Later this will be saved to PostgreSQL.',
    data: {
      name,
      email,
      message
    }
  });
}
