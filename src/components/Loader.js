import spinner from './spinner.gif';

const Loader = () => {
  return (
   <div className='loader'>
    <img src={spinner} alt='Loding...' />
   </div>
  );
};

export default Loader;