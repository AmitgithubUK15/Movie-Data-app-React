import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'
import './Home.css'


function Result() {
    const { searchdata } = useParams();
    const [data, setdata] = useState([]);
    const [movietype,setmovie] = useState(true);
    const [seriestype,setseries] = useState(false)


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
                            matchdata.push(res[i].movies[j])
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



    return (
        <>
        <div>
            {data.length > 0 && data.map((val,index) => (
                <div key={index}>
                    <Link to={val.contentType === "Movie" ? `/test/${encodeURIComponent(val.contentType)}` : `/test/${encodeURIComponent(val.original_title)}`}>
                        {val._id}
                    </Link>
                </div>
            ))}
        </div>
    </>
    );
}

export default Result;

