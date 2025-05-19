import { $api, config } from "../index";

export const getCommon = () => {
    return $api.get('/api', { headers: config() });
}

export const getDataId = () => {
    return $api.get('/api/data/1', { headers: config() });
}