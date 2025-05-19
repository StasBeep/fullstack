import { $api, config } from "../index";

export const getCommon = () => {
    return $api.get('/api', { headers: config() });
}

export const getDataId = (id: number) => {
    return $api.get(`/api/data/${id}`, { headers: config() });
}