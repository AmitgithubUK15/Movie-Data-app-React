import { Link, useParams } from 'react-router-dom';
import './Detail.css';
import { useEffect, useState } from 'react';
import DetailInfo from '../components/DetailInfo';
import Relatedseries from '../components/Relatedseries';
import Treaser from '../components/Treaser';

const WebseriesDetail = () => {
  const { movieId, title, Genres, type, treaser } = useParams();
  const [selectedSeason, setSelectedSeason] = useState('');
  const [seasons, setSeasons] = useState([]);
  const [backdropPath, setBackdropPath] = useState('');
  const [overview, setOverview] = useState('');
  const [showSeason, setShowSeason] = useState('');
  const [showSeasonVisible, setShowSeasonVisible] = useState(false);
  const [selectVisible, setSelectVisible] = useState(false);
  const [content,setcontent] = useState();
  const [Director,setdirector] = useState();
  const [Language,setlanguage] =useState();
  const [subtitles,setsubtitles] = useState();
  const [producers,setproducers] = useState();
  const [star,setstar] = useState();
  const [handledetail,sethandle] = useState(true);
  const [handlerelated,setrelative] = useState(false);
  const [suggestSeries,setsuggest] = useState();
  const [treaserdisplay,settreasedis] = useState(false);


  const setrelated = [];
  const seriesId = Number(movieId);

  useEffect(() => {
    async function fetchData() {
      window.scrollTo(0,0)
      try {
        const req = await fetch("/Json/Movies.json");
        const res = await req.json();

        for (let i in res[1].movies) {
          if (res[1].movies[i]._id === seriesId) {
            const series = res[1].movies[i];
            if (series.seasons.length !== 1) {
              setSeasons(series.seasons);
              setBackdropPath(series.seasons[series.seasons.length - 1].backdrop_path);
              setOverview(series.seasons[series.seasons.length - 1].overview);
              setShowSeasonVisible(false);
              setSelectVisible(true);
              setSelectedSeason(series.seasons[series.seasons.length - 1].season);
              setcontent(series.seasons[0].ContentAdvisor)
              setdirector(series.seasons[0].director);
              setlanguage(series.seasons[0].AudioLanguage)
              setsubtitles(series.seasons[0].Subtitles)
              setproducers(series.seasons[0].Producers)
              setstar(series.seasons[0].Staring)
            }
            else {
              setBackdropPath(series.seasons[0].backdrop_path);
              setShowSeason(1);
              setOverview(series.seasons[0].overview);
              setShowSeasonVisible(true);
              setSelectVisible(false);
              setcontent(series.seasons[0].ContentAdvisor)
              setdirector(series.seasons[0].director);
              setlanguage(series.seasons[0].AudioLanguage)
              setsubtitles(series.seasons[0].Subtitles)
              setproducers(series.seasons[0].Producers)
              setstar(series.seasons[0].Staring)
            }
          }
          else{
            setrelated.push(res[1].movies[i])
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

  let genresArr = Genres.split(",");

  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
    let currentval = Number(event.target.value)
    for(let j in seasons){
      let num = Number(seasons[j].season);
      if(currentval === num){
        setBackdropPath(seasons[j].backdrop_path)
        setOverview(seasons[j].overview);
      }
      else{
        continue;
      }
    }
  };

  function showdetails(){
    sethandle(true);
    setrelative(false);
    settreasedis(false)
  }
 
  function showrelated(){
    sethandle(false);
    setrelative(true);
    settreasedis(false)
  }

  function showtreaser(){
    settreasedis(true)
    sethandle(false);
    setrelative(false);
  }

  return (
    <div className='Detailwrp'>
      <div className='innerwrp'>
        <div className='mainwpr'
          style={{
            backgroundImage: `linear-gradient(to  right, rgb(2 2 17),rgb(0 4 18 / 10%)),linear-gradient(to  top, rgb(2 2 17),rgb(0 4 18 / 15%)),url(${backdropPath})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}>
          <div className='textwrp'>
            <div className='txtinner'>
              <div className='contentwpr'>

                <div className='logoname'>
                  <span style={{ fontSize: "26px", letterSpacing: "4px", fontWeight: "500" }}>DAILYFLEX</span>
                </div>
                <div className='mov_alldeatail'>
                  <h1 style={{ marginTop: "10px", marginBottom: "5px" }}>
                    <span>{title}</span>
                  </h1>
                </div>

                <div className='Sen_detail'>
                  {showSeasonVisible && <div className='s1' style={{ display: "block" }} >
                    <span style={{ margin: "12px 0", fontSize: "22px" }}>Season {showSeason}</span>
                  </div>
                  }
                  {selectVisible &&
                    <div className='selctdiv' style={{ display: "block" }}>
                      <div className='seasonselect'>
                        <select value={selectedSeason} onChange={handleSeasonChange} style={{ width: "100%", height: "50px", padding: "17px 23px",outline:"none", backgroundColor: "rgb(58, 58, 58)", border: "none" }}>
                          {seasons.map((season, index) => (
                            <option key={index} value={season.season}>Season {season.season}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  }
                </div>

                <div className='movietype'>
                  <span style={{ fontSize: "23px", fontWeight: "600" }}>{type}</span>
                </div>

                <div className='overview' style={{ padding: "10px 0" }}>
                  <div style={{ fontSize: "20px", margin: "0" }}>
                    <p style={{ padding: "0 0", margin: "2px 0" }}>{overview}</p>
                  </div>
                </div>
                <div className='release'>
                  {genresArr.map((val, index) => (
                    <Link key={index} to="/explore" style={{ marginRight: "15px", color: "white", fontSize: "20px", letterSpacing: "2px" }}>
                      <span >{val}</span>
                    </Link>
                  ))}
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
                  <button className='navingbtn' onClick={showtreaser}>Trailer</button>
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
           
           {treaserdisplay && 
           <div className='allinfor' style={{display:"block",padding:"40px 0"}}>
             <Treaser treaser={treaser} backdropPathposter={backdropPath} />
           </div>
           }   

            </div>
          </div>
        </div>
        <div className='rel_series_wrp'>
            {
                handlerelated && 
              <div className='rel_series' style={{display:"block",overflow:"hidden"}}>
              <Relatedseries relativeseries={suggestSeries}/>
              </div>
              }
            </div>
      </div>
    </div>
  );
};

export default WebseriesDetail;
