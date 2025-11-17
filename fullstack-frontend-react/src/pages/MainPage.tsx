import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getCommon } from "../api/controllers/common-contreller";

import {
  Box
} from "@mui/material";

const MainPage = () => {
  const navigate = useNavigate();

  const [data, setData] = React.useState<string>('Нет связи с сервером');

  useEffect(() => {
    getCommon()
      .then((response) => {
        console.log(response);
        setData(response.data.message);
        navigate(-1);
      })
      .catch((e) => console.log(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Box
    sx={{
      width: '1200px',
      m: '0 auto'
    }}
  >
    {data}
  </Box>
};

export default MainPage;