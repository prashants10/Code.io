export async function pingCheck(req, res) {
  try {
    return res.json({
      message: "Pong",
    });
  } catch (err) {
    return res.json(502).json({
      message: "Internal Server Error",
    });
  }
}
