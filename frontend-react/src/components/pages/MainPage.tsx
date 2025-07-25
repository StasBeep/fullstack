import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { getCommon } from "../../api/controllers/common-controller";

const MainPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        getCommon()
            .then((response) => {
                console.log(response);
            })
            .catch((e) => console.log(e));
    }, []);

    return <div>
        <h1>
            Main Page
        </h1>
        <button onClick={() => navigate('/mobx')}>
            Mobx
        </button>
    </div>
}

export default MainPage;