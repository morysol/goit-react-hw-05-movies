//
import styled from '@emotion/styled';
// import { withTheme } from '@mui/material/styles';

// import Button from "@material-ui/core/Button"

// export const StyledButton= styled(withTheme(Button))(props => ({
//   background: props.theme.palette.background.paper,
// }))

export const MoviesContainer = styled('ul')`
  width: 320px;
  background: ${props => props.theme.palette.error.light};
  background: #b2dfdb;
  color: ${props => props.theme.palette.secondary};

  padding: ${props => props.theme.spacing(2)};
  margin: ${props => props.theme.spacing(1, 2)};
  list-style: none;
`;
