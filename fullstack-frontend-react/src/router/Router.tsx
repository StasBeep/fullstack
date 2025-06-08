import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import ChangeDataBackend from '../pages/ChangeDataBackend';
import CreateEditElement from '../components/change-data-backend/CreateEditElement';
import MobxPage from '../pages/MobxPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<MainPage />} />

      <Route path="/change-backend" index element={<ChangeDataBackend />} />
      <Route path='/change-backend/new' element={<CreateEditElement />} />
      <Route path='/change-backend/edit/:id' element={<CreateEditElement />} />

      <Route path="/mobx" element={<MobxPage />} />
    </Routes>
  );
};

export default Router;
