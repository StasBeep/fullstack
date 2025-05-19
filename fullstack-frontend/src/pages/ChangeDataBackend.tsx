import React, { useEffect } from "react";

import { getDataId } from "../api/controllers/common";

import { dataDto } from "../common/data.types";

import {
    Box
} from "@mui/material";

const ChangeDataBackend = () => {
    const [data, setData] = React.useState<dataDto>();

    useEffect(() => {
        getDataId(1)
            .then((response) => {
                setData(response.data);
            })
            .catch(e => console.log(e));
    }, []);

    return <Box
        sx={{
            width: '900px',
            m: '0 auto'
        }}
    >
        <ul>
            <li>id: {data?.id}</li>
            <li>name: {data?.name}</li>
            <li>age: {data?.age}</li>
        </ul>
    </Box>
}

export default ChangeDataBackend;