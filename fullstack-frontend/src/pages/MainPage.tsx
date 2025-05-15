import React, { useEffect } from "react";

import { getCommon } from "../api/controllers/common";

import {
  Box
} from "@mui/material";

const MainPage = () => {
  const [data, setData] = React.useState();

  useEffect(() => {
    getCommon()
      .then((response) => {
        console.log(response);
        setData(response.data.message);
      })
  }, []);

  return <Box
    sx={{
      width: '1200px',
      m: '0 auto'
    }}
  >
    {
      data ? data : 'Данные с сервера нет'
    }
  </Box>
};

export default MainPage;