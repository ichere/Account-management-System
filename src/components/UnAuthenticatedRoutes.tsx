
import LandingPage from '../pages/LandingPage'
import LoginPage from '../pages/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UNAUTHENTICATED_ROUTES } from '../navigation/routes';
import ProfilePage from '../pages/ProfilePage';

function UnAuthenticatedRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={UNAUTHENTICATED_ROUTES.landing} element={<LandingPage />} />
        <Route path={UNAUTHENTICATED_ROUTES.login} element={<LoginPage />} />
        <Route path={UNAUTHENTICATED_ROUTES.profile} element={<ProfilePage />} />
        <Route path="/*" element={<LandingPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default UnAuthenticatedRoutes;
