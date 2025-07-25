import { Route, Routes } from 'react-router-dom';

import MainPage from '../components/pages/MainPage';
import Mobx from '../components/pages/Mobx';

const Router = () => {
    return (
        <Routes>
            <Route path="/" index element={<MainPage />} />
            <Route path="/mobx" element={<Mobx />} />
        </Routes>
    );
};

export default Router;