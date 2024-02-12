import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import './Home.css'



function Result() {
    const { searchdata } = useParams();
    const [data, setdata] = useState([]);
    const [imgindex, setindex] = useState();
  



    useEffect(() => {
        async function handleReq() {
            const matchdata = [];
            try {

                const obj = {
                    method: 'GET',
                };

                const req = await fetch(`/Json/Movies.json`, obj);
                const res = await req.json();

                let inputval = searchdata.charAt(0).toUpperCase() + searchdata.slice(1);

                for (let i = 0; i < res.length; i++) {
                    for (let j in res[i].movies) {
                        let starts = res[i].movies[j].original_title;
                        let str = starts.slice(0, 4);
                        let inputstart = inputval.slice(0, 4);
                        let Uppercase = inputval.toUpperCase().slice(0, 4);

                        if (inputstart === str || Uppercase === str) {
                            matchdata.unshift(res[i].movies[j])
                        }
                    }
                }
                setdata(matchdata);

            } catch (error) {
                console.log(error.message);
            }

        }

        handleReq();

    }, [searchdata]);


    function handlezoom(index){
        setindex(index);
    }

    function setnormal(){
        setindex(null);
    }


    return (
        <>
            <div className="outerwpr">
                <div className="out_2wpr">
                    <div className="showinput">
                        <div style={{ textAlign: "left", width: "55%", margin: "0 auto" }}>
                            <h1>
                                <span>Search {`"${searchdata}"`}</span>
                            </h1>
                        </div>
                    </div>
                   
                    <div className="searchresult">
                        <div className="titles">
                            <h1 style={{margin:"7px 3px"}}><span>Title</span></h1>
                        </div>

                        <div className="datalist">
                            {data.length > 0 && data.map((val, index) => (
                                <div key={index} className="movie-list-item">
                                    <div className="list_inner_wrp">
                                        <div className="list_inner_wrp2">
                                            <div className="leftsidepull">
                                                <div className="item_poster_wrp" onMouseEnter={()=>handlezoom(index)} onMouseLeave={setnormal}>
                                                    <img src={`${val.poster_path}`} alt="" className={`poster_image ${imgindex === index ? "zoomingeffect":""}`} />
                                                </div>
                                            </div>
                                            <div className="rightsidepull">
                                                <div className="item_name">
                                                    <h1 style={{ margin: "7px 0" }}>
                                                        <span>{val.original_title}</span>
                                                    </h1>
                                                </div>
                                                <div className="item_type">
                                                    <span>{val.contentType === "Movie" ? "Movie" : "Show"}</span>
                                                </div>
                                                <div className="overview_para">
                                                    <p>{val.contentType === "Movie" ? val.overview : val.seasons[0].overview}</p>
                                                </div>
                                                <div className="item_button">
                                                    <Link to={val.contentType === "Movie" ? `/detail/${val._id}/${encodeURIComponent(val.original_title)}/${val.genres}/${encodeURIComponent(val.contentType)}/${encodeURIComponent(val.overview)}/${val.backdrop_path ? encodeURIComponent(val.backdrop_path) : 'val.backdrop_path'}` : `/seriesdetail/${encodeURIComponent(val._id)}
                                               /${encodeURIComponent(val.original_title)}
                                               /${encodeURIComponent(val.genres)}
                                               /${encodeURIComponent(val.contentType)}
                                               /${encodeURIComponent(val.trailer)}`} className="item_link">
                                                        <button className="list_realBtn">Get details</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Result;

