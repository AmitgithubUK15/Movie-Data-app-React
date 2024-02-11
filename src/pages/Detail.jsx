import { Link, useParams } from 'react-router-dom';
import './Detail.css'
import { useEffect, useState } from 'react';
import DetailInfo from '../components/DetailInfo';
import NewMovie from '../components/NewMoive';

const Details = () => {
  const { movieId,title,image,type, overview,Genres} = useParams();
  const [handledetail,sethandle] = useState(true);
  const [handlerelated,setrelative] = useState(false);
  const [content,setcontent] = useState();
  const [Director,setdirector] = useState();
  const [Language,setlanguage] =useState();
  const [subtitles,setsubtitles] = useState();
  const [producers,setproducers] = useState();
  const [star,setstar] = useState();
  const [suggestSeries,setsuggest] = useState();


  let genresarr = Genres.split(",") 
 
  let movietile = type.charAt(0).toUpperCase() + type.slice(1);

  const setrelated = [];
  const seriesId = Number(movieId);

  useEffect(() => {
    async function fetchData() {
      window.scrollTo(0,0)
      try {
        const req = await fetch("/Json/Movies.json");
        const res = await req.json();

        for (let i in res[0].movies) {
          if (res[0].movies[i]._id === seriesId) {
            const series = res[0].movies[i];
            if (series.seasons.length !== 1) {
              setcontent(series.seasons[0].ContentAdvisor)
              setdirector(series.seasons[0].director);
              setlanguage(series.seasons[0].AudioLanguage)
              setsubtitles(series.seasons[0].Subtitles)
              setproducers(series.seasons[0].Producers)
              setstar(series.seasons[0].Staring)
            }
            else {
              setcontent(series.seasons[0].ContentAdvisor)
              setdirector(series.seasons[0].director);
              setlanguage(series.seasons[0].AudioLanguage)
              setsubtitles(series.seasons[0].Subtitles)
              setproducers(series.seasons[0].Producers)
              setstar(series.seasons[0].Staring)
            }
          }
          else{
            setrelated.push(res[0].movies[i])
          }
        }
      
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setsuggest(setrelated.reverse());
    // console.log(setrelated);
    }
     
    fetchData();


  }, [seriesId]);

  function showdetails(){
    sethandle(true);
    setrelative(false);
 
  }

  function showrelated(){
    sethandle(false);
    setrelative(true);

  }

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
         
        <div className='ws_info'>
          <div className='ws_info_innerwpr'>
            <div className='ws_minnav' style={{position:"sticky",top:"58px",zIndex:"999"}}>
              <div className='ws_navwrp'>
                <div className='mainnav'>
                  <button className='navingbtn' onClick={showdetails} >Details</button>
                  <button className='navingbtn' onClick={showrelated}>Related</button>
                </div>
              </div>
            </div>
            <div className='ws_series_info'>
            {handledetail && 
              <div className='allinfor' style={{display:"block"}}>
            <DetailInfo  content={content}  Alang={Language} Stitle={subtitles} direc={Director} produce={producers} Stars={star} />
              </div>
            }
           
            </div>
          </div>
        </div>

        <div className='rel_series_wrp'>
            {
                handlerelated && 
              <div className='rel_series' style={{display:"block",overflow:"hidden"}}>
              <NewMovie newmoviesdata={suggestSeries}/>
              </div>
              }
            </div>

      </div>
    </div>
  );
};

export default Details;
