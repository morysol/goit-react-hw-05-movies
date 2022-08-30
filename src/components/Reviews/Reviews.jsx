import { useParams } from 'react-router-dom';

import { getMoviesReview } from 'api/api';

export const Reviews = () => {
  //
  const { id } = useParams();
  (async function () {
    try {
      // handle success
      const respone = await getMoviesReview({ id, language: 'en-US' });
      console.log(respone);
      // return axios.get(queryString);
    } catch (error) {
      // handle error
      // return `error with your query ${error} `;
    }
  })();

  return <div>Reviews</div>;
};
