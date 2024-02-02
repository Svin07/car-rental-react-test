import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('../pages/Home/Home'));
const Catalog = lazy(() => import('../pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../pages/Favorites/Favorites'));
const Movies = lazy(() => import('../pages/Cars/Cars'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<Movies />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};
