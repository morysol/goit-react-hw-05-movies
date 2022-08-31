import styled from '@emotion/styled';

export const Container = styled('div')`
  display: grid;
  /* grid-template-columns: 200px auto 100px; */
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto auto auto;
`;

export const Info = styled('div')`
  padding: 16px;
`;