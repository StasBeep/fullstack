import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { dataDto } from "../../types/data.types";
import { deleteDataId, getData } from "../../api/controllers/common-controller";

const ChangeDataBackend = () => {
    const navigate = useNavigate();

    const [data, setData] = React.useState<dataDto[]>();

    useEffect(() => {
        getData()
            .then((response) => {
                setData(response.data);
            })
            .catch(e => console.log(e));
    }, []);

    const deleteRecord = (idRecord: number) => {
        deleteDataId(idRecord)
            .then((response) => {
                console.log(response);
                getData()
                    .then((response) => {
                        setData(response.data);
                    })
                    .catch(e => console.log(e));
            })
            .catch((e) => console.log(e));
    }

    return <div
        style={{
            width: '900px',
            margin: '0 auto'
        }}
    >
        <button
            onClick={() => navigate('/change-backend/new/')}
        >
            Создать новую запись
        </button>
        <ol>
            {
                data?.map((item, key) => (
                    <li
                        key={`listItem-${key}`}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            border: '1px solid #007dea'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <h3>
                                Имя: {item.name}
                            </h3>
                            <h4>
                                Возраст: {item.age}
                            </h4>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <button
                                onClick={() => navigate(`/change-backend/edit/${item.id}`)}
                            >
                                Изменить
                            </button>
                            <button
                                onClick={() => deleteRecord(Number(item.id))}
                            >
                                Удалить
                            </button>
                        </div>
                    </li>
                ))
            }
        </ol>
    </div>
}

export default ChangeDataBackend;