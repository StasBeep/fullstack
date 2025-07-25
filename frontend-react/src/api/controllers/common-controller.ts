import { $api, config } from "../index";

export const getCommon = () => {
    return $api.get('/api', { headers: config() });
}

export const testData = () => {
    return $api.get('/api/data/', { headers: config() })
}