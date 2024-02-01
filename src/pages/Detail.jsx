import { useParams } from 'react-router-dom';
import './Detail.css'

const Details = () => {
  const { movieId,title,image} = useParams();

  // Extracting only the numeric part from the movieId (assuming movieId is a string)
  // const numericMovieId = movieId.replace(/\D/g, '');

  console.log(movieId);
  console.log(title)
  console.log(image);
  // console.log('Movie ID:', numericMovieId);

  return (
    <div className='Detailwrp'>
      <div className='innerwrp'>
        <div className='mainwpr' style={{backgroundImage:`linear-gradient(to  top, rgb(2 2 17),rgb(0 4 18 / 15%)),url(${image})`, backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}></div>
      </div>
    </div>
  );
};

export default Details;
