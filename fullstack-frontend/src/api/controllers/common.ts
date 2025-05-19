import { $api, config } from "../index";
import { dataDto } from "../../types/common/data.types";

export const getCommon = () => {
    return $api.get('/api', { headers: config() });
}

export const getDataId = (id: number) => {
    return $api.get(`/api/data/${id}`, { headers: config() });
}

export const putDataId = (id: number, body: dataDto) => {
    return $api.put(`/api/data/${id}`, body, { headers: config() });
}