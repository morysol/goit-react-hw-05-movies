import { useLocation } from 'react-router-dom';
//
import { NavLink } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  const linkTo = location.pathname === '/' ? 'movies/' : '';

  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <NavLink to={`${linkTo}${id}`}>{title}</NavLink>
        </li>
      ))}
    </ul>
  );
};
