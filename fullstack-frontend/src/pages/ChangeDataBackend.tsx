import React, { useEffect } from "react";

import { getDataId, putDataId } from "../api/controllers/common";

import { dataDto } from "../types/common/data.types";

import {
    Box,
    Button
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

    const changeData = () => {
        let localData = data ? data : { id: 2, age: 30, name: 'Stas' };

        localData.name = 'Stas';
        localData.age = 31

        console.log(localData)

        if (localData.id) {
            putDataId(localData.id, localData)
                .then(response => {
                    setData(response.data)
                })
                .catch(e => console.log(e));
        }
    }

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
        <Button
            onClick={changeData}
            variant='contained'
            color='error'
        >
            Изменить данные
        </Button>
    </Box>
}

export default ChangeDataBackend;