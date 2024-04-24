import { Route, Routes } from 'react-router-dom';
import { Home, Catalog, Favorites } from 'pages';
import { SharedLayout } from 'components';
import { Features } from './Features/Features';
import { Reviews } from './Reviews/Reviews';
import { ToastContainer } from 'react-toastify';
import { NotFound } from '../pages/NotFound/NotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
