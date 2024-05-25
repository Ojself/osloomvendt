const FormErrorMessage = ({ error }) => {
  if (!error) return null;
  console.warn('ERROR: ', error);
  return <p className='text-xs text-error '>{error.message || error}</p>;
};
export default FormErrorMessage;
