import { Circles } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Circles
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
