import React, { useEffect } from "react";

import { getData } from "../api/controllers/common";

import { dataDto } from "../types/common/data.types";

import {
    Box,
    Button,
    List,
    ListItem,
    Typography
} from "@mui/material";

const ChangeDataBackend = () => {
    const [data, setData] = React.useState<dataDto[]>();

    useEffect(() => {
        getData()
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
        <Button
            variant='contained'
            color='success'
            sx={{
                my: 1
            }}
        >
            Создать новую запись
        </Button>
        <List>
            {
                data?.map((item, key) => (
                    <ListItem
                        key={`listItem-${key}`}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            border: '1px solid #007dea'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <Typography
                                component={'h3'}
                            >
                                Имя: {item.name}
                            </Typography>
                            <Typography
                                component={'h4'}
                            >
                                Возраст: {item.age}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <Button
                                color='info'
                                variant='contained'
                            >
                                Изменить
                            </Button>
                            <Button
                                color='error'
                                variant='contained'
                                sx={{
                                    mt: 1
                                }}
                            >
                                Удалить
                            </Button>
                        </Box>
                    </ListItem>
                ))
            }
        </List>
    </Box>
}

export default ChangeDataBackend;