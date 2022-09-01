import { NavLink, Route, Routes } from 'react-router-dom';
//
import { Home } from '../../pages/Home';
import { Movies } from '../../pages/Movies';
import { MovieDetails } from '../../pages/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { NotFound } from '../../pages/NotFound';
//
import styled from '@emotion/styled';
//
const StyledNav = styled('nav')`
  display: flex;
  justify-content: center;
  gap: 32px;
`;
//
const StyledHeader = styled('header')`
  background-color: lightgray;
  padding: 8px 16px;
`;

export const App = () => {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </StyledNav>
      </StyledHeader>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

// '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.
