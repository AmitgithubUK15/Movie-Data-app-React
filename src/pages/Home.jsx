import { useEffect, useState } from "react";
import Trending from "../components/Trending";
import './Home.css'
import { Link } from "react-router-dom";
import NewMoive from "../components/NewMoive";
import NewWebseries from "../components/NewWebseries";

const Home = () => {

  const [trending, settrending] = useState();
  const [newmovie, setnewmovie] = useState();
  const [Webseries, setWebseries] = useState();

  console.log();
  useEffect(() => {

    async function handlemain() {
      try {
        const req = await fetch("/Json/Movies.json", {
          method: "GET",
          // headers: {
          //   'X-RapidAPI-Key': '7e57b8f0d2msh79692790ac4fa1fp1f7c4ajsnb626322a46f9',
          //   'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
          // }
        })

        if (!req.ok) {
          throw Error(req.statusText);
        }
        else {
          const response = await req.json();


          settrending(response[0].movies)
          setnewmovie(response[0].movies)
          setWebseries(response[1].movies);
          // console.log(response[1].movies);
        }
      }
      catch (err) {
        console.error(err.message);
      }
    }
    handlemain();
  }, [])



  return (
    <>
      <div className="contenor">
        <div className="contenor_wraper" style={{ width: "1516px" }}>

          <Trending trendingsid={trending} />

          <div className="alltypeshowwrp" >
            <div className="imgdivwrp" style={{
              backgroundImage: `linear-gradient(to right, rgb(8, 1, 16), rgb(0 4 18 / 67%)), linear-gradient(to top, rgb(2, 2, 17), rgb(0 4 18 / 0%)), url(./images/lionsgate.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "none",
              height: "480px",
              display: "flex",
              alignItems: "center"
            }}>
              <section style={{ padding: "0 70px" }}>
                <div>
                  <h1 style={{ margin: "0" }}>
                    <span style={{ fontSize: "35px" }}>Get Explore All Trending</span><br></br>
                    <span>Shows & Movies</span>
                  </h1>
                </div>
                <div style={{ padding: "29px 0" }}>
                  <Link to={`/explore`}>
                    <button style={{ border: "none", background: "white", color: "black", padding: "13px 28px", fontSize: "20px", borderRadius: "10px", cursor: "pointer" }}>Exlore More</button>
                  </Link>
                </div>

              </section>
            </div>
            <NewMoive newmoviesdata={newmovie} />
            <div>
              <div className='web_heading'>
                <div style={{ padding: "0 34px", textAlign: "left" }}>
                  <h2 style={{ margin: "15px 0" }}>
                    <span style={{ color: "#1a98ff" }}>Dailyflex </span>
                    <span>new web series</span>
                  </h2>
                </div>
              </div>
              <NewWebseries WebseriesData={Webseries} />

            </div>
            <NewMoive newmoviesdata={newmovie} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;