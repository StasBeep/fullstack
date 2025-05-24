import React from "react";

import { createData } from "../api/controllers/common";

import {
    Box,
    Button,
    TextField,
    Typography
} from "@mui/material";

const CreateEditElement = () => {
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState(0);

    const processingRequest = () => {
        const data = {
            name: name,
            age: age
        }

        createData(data)
    }

    return <Box>
        <Typography>
            Имя:
        </Typography>
        <TextField
            onChange={(e) => setName(e.target.value)}
        />
        <Typography>
            Возраст:
        </Typography>
        <TextField
            type="number"
            onChange={(e) => setAge(+e.target.value)}
        />
        <Button
            variant='contained'
            color='success'
            onClick={processingRequest}
            sx={{
                display: 'block',
                mt: 2
            }}
        >
            Создать новую запись
        </Button>
    </Box>
}

export default CreateEditElement;