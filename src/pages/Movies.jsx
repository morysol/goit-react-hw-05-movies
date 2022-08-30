import { useState, useEffect } from 'react';
//
import { SearchForm } from 'components/SearchForm/SearchForm';
import { getMoviesList } from 'api/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [searchString, setSearchString] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);
  const [fetchedError, setFetchedError] = useState(null);

  useEffect(() => {
    //

    (async function () {
      if (searchString === null) return;
      try {
        // handle success
        const respone = await getMoviesList({ query: searchString });
        setFetchedData(respone.data.results);
        setFetchedError(null);
        // return axios.get(queryString);
      } catch (error) {
        // handle error
        setFetchedError(`error with your query ${error.message} `);
        setFetchedData(null);
        // return `error with your query ${error} `;
      }
    })();
  }, [searchString]);

  const onSubmit = (data, e) => {
    e.preventDefault();
    // console.log(`\u001b[35m  <<<  >>> \x1b[0m  `);

    // console.log(data);
    // console.log(e);
    setSearchString(data.searchString);
    // debugger;
  };
  return (
    <main>
      <div>
        <SearchForm onSubmit={onSubmit} />

        {fetchedData?.length > 0 && <MoviesList movies={fetchedData} />}
        {fetchedError && <p> There is an fetch error {fetchedError} </p>}
      </div>
    </main>
  );
};
