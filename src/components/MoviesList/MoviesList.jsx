import { useLocation, NavLink } from 'react-router-dom';
//
import { MoviesContainer } from './MoviesList.styled';
export const MoviesList = ({ movies }) => {
  const location = useLocation();

  const linkTo = location.pathname === '/' ? 'movies/' : '';

  return (
    <MoviesContainer>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <NavLink to={`${linkTo}${id}`}>{title}</NavLink>
        </li>
      ))}
    </MoviesContainer>
  );
};
