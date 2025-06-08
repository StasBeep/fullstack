import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { createData, editDataId, getDataId } from "../../api/controllers/common-contreller";

import {
    Box,
    Button,
    TextField,
    Typography
} from "@mui/material";

const CreateEditElement = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState(0);

    useEffect(() => {
        if (id) {
            getDataId(+id)
                .then((response) => {
                    setName(response.data.name);
                    setAge(response.data.age);
                })
                .catch((e) => console.log(e));
        }
    }, [id]);

    const processingRequest = () => {
        const data = {
            name: name,
            age: age
        }

        id ?
            editDataId(+id, data)
                .then(() => {
                    navigate(-1);
                })
                .catch((e) => console.log(e))
            :
            createData(data)
                .then(() => {
                    navigate(-1);
                })
                .catch((e) => console.log(e))
    }

    return <Box
        sx={{
            width: '900px',
            m: '0 auto'
        }}
    >
        <Typography
            component={'h2'}
            sx={{
                fontSize: '26px',
                my: 1,
                textDecoration: 'underline'
            }}
        >
            {id ? 'Редактировать запись' : 'Создать новую запись'}
        </Typography>
        <Typography>
            Имя:
        </Typography>
        <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
                mb: 2
            }}
        />
        <Typography>
            Возраст:
        </Typography>
        <TextField
            value={age === 0 ? '' : age}
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
            {id ? `Редактировать запись` : `Создать новую запись`}
        </Button>
    </Box>
}

export default CreateEditElement;