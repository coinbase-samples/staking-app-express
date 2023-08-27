class StakingApi {
    private static _instance: StakingApi;

    private constructor() { }

    static getInstance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new StakingApi();
        return this._instance;
    }
}

export default StakingApi;
