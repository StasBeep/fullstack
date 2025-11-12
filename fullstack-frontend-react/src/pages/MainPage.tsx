import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getCommon } from "../api/controllers/common-contreller";

import {
  Box,
  Button,
  Typography
} from "@mui/material";

const MainPage = () => {
  const navigate = useNavigate();

  const [data, setData] = React.useState();

  useEffect(() => {
    getCommon()
      .then((response) => {
        console.log(response);
        setData(response.data.message);
      })
      .catch((e) => console.log(e));
  }, []);

  return <Box
    sx={{
      width: '1200px',
      m: '0 auto'
    }}
  >
    
  </Box>
};

export default MainPage;