import { useEffect } from "react";
import { getCommon } from "../../api/controllers/common-controller";

const MainPage = () => {
    useEffect(() => {
        getCommon()
            .then((response) => {
                console.log(response);
            })
            .catch((e) => console.log(e));
    }, []);

    return <div>
        Main Page
    </div>
}

export default MainPage;