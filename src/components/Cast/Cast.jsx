import { useParams } from 'react-router-dom';

import { getMoviesCast } from 'api/api';

export const Cast = () => {
  //
  const { id } = useParams();
  (async function () {
    try {
      // handle success
      const respone = await getMoviesCast({ id });
      console.log(respone);
      // return axios.get(queryString);
    } catch (error) {
      // handle error
      // return `error with your query ${error} `;
    }
  })();
  return <div>cast</div>;
};
