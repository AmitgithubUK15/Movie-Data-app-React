import { useEffect, useState } from "react";
import Trending from "../components/Trending";
import './Home.css'

const Home = ()=>{
  
  const [trending,settrending] = useState();

  console.log(trending);
  useEffect(()=>{

    async function handlemain(){
     try{
      const req = await fetch("https://movies-api14.p.rapidapi.com/home",{
        method:"GET",
        headers: {
          'X-RapidAPI-Key': '7e57b8f0d2msh79692790ac4fa1fp1f7c4ajsnb626322a46f9',
          'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
        }
      })
  
      if(!req.ok){
        throw Error(req.statusText);
      }
      else{
        const response = await req.json();
  
  
        settrending(response[0].movies)
        // console.log(response);
      }
     }
     catch(err){
        console.error(err.message);
     }
   }
   handlemain();
  },[])



    return (
        <>
         <div className="contenor">
          <div className="contenor_wraper" style={{width:"1511px"}}>
        
              <Trending  trendingsid={trending} />
             
          </div>  
         </div>
        </>
    )
}

export default Home;