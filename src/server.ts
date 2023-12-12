import express from "express";
import commonRoutes from "./routes/common";
import kilnRouter from "./routes/kiln";

const app = express();
app.use(express.json());
const PORT = 3000;
const BASE_API = "/v1";

app.get('/', (req, res) => {
  res.sendStatus(200);
});
app.get('/health', (req, res) => {
  res.sendStatus(200);
});

app.use(`${BASE_API}/kiln`, kilnRouter);
app.use(`${BASE_API}/common`, commonRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default 0;