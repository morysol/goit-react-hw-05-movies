import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getMoviesReview } from 'api/api';

export const Reviews = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [fetchedError, setFetchedError] = useState(null);

  //
  const { id } = useParams();
  // (async function () {
  //   try {
  //     // handle success
  //     const respone = await getMoviesReview({ id, language: 'en-US' });
  //     console.log(respone);
  //     // return axios.get(queryString);
  //   } catch (error) {
  //     // handle error
  //     // return `error with your query ${error} `;
  //   }
  // })();

  useEffect(() => {
    (async function () {
      try {
        // handle success
        const respone = await getMoviesReview({ id, language: 'en-US' });
        setFetchedData(respone.data); // .cast
        // return axios.get(queryString);
      } catch (error) {
        // handle error
        // return `error with your query ${error} `;
        setFetchedError(`  ${error.message}  `);
      }
    })();
  }, [id]);

  return <div>Reviews</div>;
};
