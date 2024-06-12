import express from "express";
import cors from "cors";

// Creating an Express app
const app = express();
const PORT = 5000;

// Middleware setup
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: "GET,PUT,POST,DELETE,OPTIONS,PATCH",
    allowedHeaders: "Content-Type, Accept, Authorization",
  })
);

// Route to fetch images from the Pixabay API
app.get("/api/images", async (req, res) => {
  try {
    const { category, page, per_page, order } = req.query;
    const response = await fetch(
      `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}&page=${page}&per_page=${per_page}&order=${order}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
