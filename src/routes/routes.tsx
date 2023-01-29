import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/Home';

export const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    );
}
