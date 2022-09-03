import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { MoviesContainer } from './MoviesList.styled';
export const MoviesList = ({ movies }) => {
  const location = useLocation();

  // const linkTo = location.pathname === '/' ? 'movies/' : '';

  return (
    <MoviesContainer>
      {movies.map(({ id, title }) => (
        <li key={id}>
          {/* <NavLink to={`${linkTo}${id}`}>{title}</NavLink> */}
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </NavLink>
        </li>
      ))}
    </MoviesContainer>
  );
};

MoviesList.propTypes = {
  requiredArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
};
