import { TextField, Button } from '@mui/material';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import * as SC from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    // formState: { errors, isSubmitSuccessful },
    formState: { errors },
  } = useForm();

  useEffect(() => {
    //
    reset();
  }, [reset]);

  const submitSearch = (data, e) => {
    onSubmit(data, e);
    reset();
  };

  // const onSubmit = data => console.log(data);

  // console.log(watch('example')); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <SC.Form onSubmit={handleSubmit(submitSearch)}>
      {/* register your input into the hook by invoking the "register" function */}
      {/* <input defaultValue="test" {...register('example')} /> */}

      {/* include validation with required or other standard HTML validation rules */}
      {errors.searchString && <span>This field is required</span>}
      <TextField
        id="filled-basic"
        label="Required"
        variant="filled"
        {...register('searchString', { required: true })}
      />
      {/* <input {...register('searchString', { required: true })} /> */}
      {/* errors will return when field validation fails  */}

      {/* <input type="submit" /> */}
      <Button type="submit" variant="contained">
        Search movies
      </Button>
    </SC.Form>
  );
};
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
