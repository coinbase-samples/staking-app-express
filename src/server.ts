import express from "express";
import contextRoutes from "./routes/context_routes";
import listRoutes from "./routes/list_routes";
import partialEthRoutes from "./routes/partial_eth_staking";

const app = express();
app.use(express.json());
const PORT = 3030;
const BASE_API = "/staking/api/v1alpha1";

app.get("/", (req, res) => {
  res.sendStatus(200);
});
app.get("/health", (req, res) => {
  res.sendStatus(200);
});

app.use(`${BASE_API}`, listRoutes);
app.use(`${BASE_API}`, partialEthRoutes);
app.use(`${BASE_API}`, contextRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default 0;
