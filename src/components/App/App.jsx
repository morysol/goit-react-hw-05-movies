import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

// import { SharedLayout } from '../SharedLayout/SharedLayout';
import { Home } from '../../pages/Home';
import { Movies } from '../../pages/Movies';
import { MovieDetails } from '../../pages/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { NotFound } from '../../pages/NotFound';
//
// const SharedLayout = lazy(() => import('../SharedLayout/SharedLayout'));
//

const createAsyncComponent = path => {
  // console.log(path);
  // console.log(path === '../SharedLayout/SharedLayout');

  const componentName = path.match(/[a-zA-Z]+$/)[0];
  // return lazy(() =>
  //   import(path)
  //     .then(module => ({ ...module, default: module[componentName] }))
  //     .catch(console.log)
  // );
  return lazy(() =>
    // import(`${path}`)
    import('../SharedLayout/SharedLayout')
      .then(module => ({ ...module, default: module[componentName] }))
      .catch(console.log)
  );
};

// const SharedLayout = createAsyncComponent('../SharedLayout/SharedLayout.jsx');
const SharedLayout = createAsyncComponent('../SharedLayout/SharedLayout');

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

// '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.
