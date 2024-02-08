import { Link, useParams } from 'react-router-dom';
import './Detail.css';
import { useEffect, useState } from 'react';

const WebseriesDetail = () => {
  const { movieId, title, Genres, type, treaser } = useParams();
  const [selectedSeason, setSelectedSeason] = useState('');
  const [seasons, setSeasons] = useState([]);
  const [backdropPath, setBackdropPath] = useState('');
  const [overview, setOverview] = useState('');
  const [showSeason, setShowSeason] = useState('');
  const [showSeasonVisible, setShowSeasonVisible] = useState(false);
  const [selectVisible, setSelectVisible] = useState(false);


  const seriesId = Number(movieId);

  useEffect(() => {
    async function fetchData() {
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
              
             
              
            }
            else {
              setBackdropPath(series.seasons[0].backdrop_path);
              setShowSeason(1);
              setOverview(series.seasons[0].overview);
              setShowSeasonVisible(true);
              setSelectVisible(false);
            }
          }
        }
      
      } catch (error) {
        console.error("Error fetching data:", error);
      }
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
            <div className='ws_infoheader'></div>
            <div className='ws_series_info'></div>
            <div className='rel_series_wrp'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebseriesDetail;
