const express = require("express");
const app = express();

app.use(express.json());

// Import routes
const bookRoutes = require("./routes/bookRoutes");
app.use("/books", bookRoutes);

app.listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000");
});
