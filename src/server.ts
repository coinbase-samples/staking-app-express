import express from 'express';
import kilnRoutes from './routes/kiln';
import StakingApi from './client/stakingApi';

const app = express();
const PORT = 3000;
const BASE_API = '/v1'

app.use(`${BASE_API}/kiln`, kilnRoutes);

StakingApi.getInstance();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
