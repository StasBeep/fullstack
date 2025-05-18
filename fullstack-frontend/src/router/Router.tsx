import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import ChangeDataBackend from '../pages/ChangeDataBackend';

const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<MainPage />} />
      <Route path="/change-backend" index element={<ChangeDataBackend />} />
    </Routes>
  );
};

export default Router;
