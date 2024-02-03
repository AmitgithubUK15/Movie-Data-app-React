import { Link, useParams } from 'react-router-dom';
import './Detail.css'

const Details = () => {
  const { movieId,title,image,type, overview,Genres} = useParams();

  // Extracting only the numeric part from the movieId (assuming movieId is a string)
  // const numericMovieId = movieId.replace(/\D/g, '');

  let genresarr = Genres.split(",")
  console.log(genresarr);
 
  let movietile = type.charAt(0).toUpperCase() + type.slice(1);
  console.log(movieId);
  console.log(title)
  console.log(image);
  // console.log('Movie ID:', numericMovieId);

  return (
    <div className='Detailwrp'>
      <div className='innerwrp'>
        <div className='mainwpr' style={{backgroundImage:`linear-gradient(to  right, rgb(2 2 17),rgb(0 4 18 / 10%)),linear-gradient(to  top, rgb(2 2 17),rgb(0 4 18 / 15%)),url(${image})`, backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
        <div className='textwrp'>
            <div className='txtinner'>
              <div className='contentwpr'>

               <div className='logoname'>
                 <span style={{fontSize:"26px", letterSpacing:"4px",fontWeight:"500"}}>DAILYFLEX</span>
               </div>
               <div className='mov_alldeatail'>
                <h1>
                  <span>{title}</span>
                </h1>
               </div>
               <div className='movietype'>
                <span style={{fontSize:"23px",fontWeight:"600"}}>{movietile}</span>
               </div>
               <div className='overview' style={{padding:"10px 0"}}>
                <div style={{fontSize:"20px",margin:"0"}}>
                  <p style={{padding:"0 0", margin:"2px 0"}}>{overview}</p>
                </div>
               </div>
               <div className='release'>
                   {genresarr.map((val,index)=>(
                    <Link key={index} to="/explore" style={{marginRight:"15px", color:"white", fontSize:"20px", letterSpacing:"2px"}}>
                    <span >{val}</span>
                    </Link>
                   ))}
                   {/* <span>{Genres}</span> */}
                </div>
              </div>
            </div>
          </div>    
        </div>
         
      </div>
    </div>
  );
};

export default Details;
