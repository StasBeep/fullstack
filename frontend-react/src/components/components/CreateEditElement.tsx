import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { createData, editDataId, getDataId } from "../../api/controllers/common-controller";

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

    return <div
        style={{
            width: '900px',
            margin: '0 auto'
        }}
    >
        <h2
            style={{
                fontSize: '26px',
                textDecoration: 'underline'
            }}
        >
            {id ? 'Редактировать запись' : 'Создать новую запись'}
        </h2>
        <p>
            Имя:
        </p>
        <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
                marginBottom: 2
            }}
        />
        <p>
            Возраст:
        </p>
        <input
            value={age === 0 ? '' : age}
            type="number"
            onChange={(e) => setAge(+e.target.value)}
        />
        <button
            onClick={processingRequest}
            style={{
                display: 'block',
                marginTop: 2
            }}
        >
            {id ? `Редактировать запись` : `Создать новую запись`}
        </button>
    </div>
}

export default CreateEditElement;