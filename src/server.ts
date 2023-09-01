import express from "express";
import kilnRoutes from "./routes/kiln";

const app = express();
const PORT = 3000;
const BASE_API = "/v1";

app.use(`${BASE_API}/kiln`, kilnRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
