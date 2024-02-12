import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Home.css'
import ResultList from "../components/ResultList";



function Result() {
    const { searchdata } = useParams();
    const [data, setdata] = useState([]);
    const [nofinddata,setnofnd] = useState([])
    const [matchflag,setmatchflag] = useState(false);
    const [notmatchflag ,setnotmatch]  = useState(false);  


    useEffect(() => {
        window.scrollTo(0,0)
        async function handleReq() {
            const matchdata = [];
            const notmacharr = [];
            let flag = true;
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
                            matchdata.push(res[i].movies[j])
                            flag = true;
                            break;
                        }
                        else{
                            flag = false;
                            let arrrandom = Math.round(Math.random() *1);
                            let randomnum = Math.floor(Math.random() * res[i].movies.length);
                            if(notmacharr.length < 15){
                                notmacharr.push(res[arrrandom].movies[randomnum])
                            }
                        }
                    }
                }

                if(flag === false &&notmacharr.length === 15){
                  setnofnd(notmacharr);
                  setmatchflag(false);
                  setnotmatch(true)
                }
               else{
                setdata(matchdata);
               setmatchflag(true);
               setnotmatch(false)
               }
       
            } catch (error) {
                console.log(error.message);
            }

        }

        handleReq();

    }, [searchdata]);


    


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
                            <h1 style={{margin:"7px 3px"}}><span>{matchflag === true ? "Title": "Not Found Suggest some result"}</span></h1>
                        </div>

                        {matchflag && 
                        <div className="datalist" style={{display:"block"}}>
                            <ResultList data={data}/>
                        </div>
                        }
                        
                        {notmatchflag &&
                        <div className="datalist2" style={{display:"block"}}>
                            <ResultList data={nofinddata}/>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Result;