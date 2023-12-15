import express from "express";
import contextRoutes from "./routes/context_routes";
import listRoutes from "./routes/list_routes";
import workflowRoutes from "./routes/workflow_routes";

const app = express();
app.use(express.json());
const PORT = 3000;
const BASE_API = "/staking/api/v1alpha1";

app.get("/", (req, res) => {
  res.sendStatus(200);
});
app.get("/health", (req, res) => {
  res.sendStatus(200);
});

app.use(`${BASE_API}`, listRoutes);
app.use(`${BASE_API}`, workflowRoutes);
app.use(`${BASE_API}`, contextRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default 0;
