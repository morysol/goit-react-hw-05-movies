import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

//
import { SearchForm } from 'components/SearchForm/SearchForm';
import { getMoviesList } from 'api/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  // const [searchString, setSearchString] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);
  const [fetchedError, setFetchedError] = useState(null);
  //
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  // console.log('query  ', query);

  const location = useLocation();
  // console.log('movies page  ', location);

  useEffect(() => {
    //

    (async function () {
      // if (searchString === null) return;
      if (!query) return;
      try {
        // handle success
        const respone = await getMoviesList({ query });
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
  }, [query, searchParams]);

  const onSubmit = (data, e) => {
    e.preventDefault();
    // console.log(`\u001b[35m  <<<  >>> \x1b[0m  `);

    // console.log(data);
    // console.log(e);
    // setSearchString(data.searchString);
    setSearchParams({ query: data.searchString });
    // debugger;
  };
  return (
    <main>
      <div>
        <SearchForm onSubmit={onSubmit} />

        {fetchedData?.length > 0 && (
          <MoviesList movies={fetchedData} state={{ from: location }} />
        )}
        {fetchedError && <p> There is an fetch error {fetchedError} </p>}
      </div>
    </main>
  );
};
