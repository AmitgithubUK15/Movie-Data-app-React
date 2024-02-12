import { useEffect, useState } from 'react'
import './Explore.css'
import {Link} from "react-router-dom";



export default function Explore() {
  const [exp_heading, setexp_heading] = useState(`Explore`);
  const [data,setdata] = useState([]);
  const [manipulatingdata,setmanipulating] = useState();
 
  useEffect(()=>{

    async function handlemain(){
     try{
      const req = await fetch("/Json/Movies.json",{
        method:"GET",
        // headers: {
        //   'X-RapidAPI-Key': '7e57b8f0d2msh79692790ac4fa1fp1f7c4ajsnb626322a46f9',
        //   'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
        // }
      })
  
      if(!req.ok){
        throw Error(req.statusText);
      }
      else{
        const response = await req.json();
        
        setdata(response[0].movies)
        setmanipulating(response);
      
      }
     }
     catch(err){
        console.error(err.message);
     }
   }
   handlemain();
  },[])

  

  async function handlechange(e){
    let matcharr = [];
    setexp_heading(e.target.value)
    // console.log(manipulatingdata);

    for(let i in manipulatingdata){
      // console.log(manipulatingdata[i])
      for(let j in manipulatingdata[i].movies){
        // console.log(manipulatingdata[i].movies[j])
        for(let x in manipulatingdata[i].movies[j].genres){
          // console.log(manipulatingdata[i].movies[j].genres)
          if(e.target.value === manipulatingdata[i].movies[j].genres[x]){
              // console.log(manipulatingdata[i].movies[j].original_title)
              matcharr.push(manipulatingdata[i].movies[j]);
          }
        }

      }

    }
    setdata(matcharr.reverse())
  }

  return (
    <div className="explorediv">
      <div className="exp_wrp">
        
        {/* heading point */}
        <div className='heading'>
          <h1 style={{margin:"20px 0"}}>
            <span>{exp_heading}</span>
          </h1>
        </div>

        {/* filter section */}

        <div className='filtersec'>
          <div className='filterwrp'>
            <div style={{margin:"0 20px"}} onChange={handlechange}>
              <select className="selection" name="" id="">
                <option style={{padding:"10x 0"}}>Genres</option>
                <option style={{padding:"10x 0"}}>Drama</option>
                <option style={{padding:"10x 0"}}>Crime</option>
                <option style={{padding:"10x 0"}}>Action</option>
                <option style={{padding:"10x 0"}}>Romance</option>
                <option style={{padding:"10x 0"}}>Comedy</option>
                <option style={{padding:"10x 0"}}>Thriller</option>
                <option style={{padding:"10x 0"}}>Sci-Fi</option>
                <option style={{padding:"10x 0"}}>Horror</option>
                <option style={{padding:"10x 0"}}>Suspense</option>
                <option style={{padding:"10x 0"}}>Adventure</option>
                <option style={{padding:"10x 0"}}>Mystery</option>
                
              </select>
            </div >
            <div  style={{margin:"0 20px"}} onChange={handlechange}>
              <select className="selection2" name="" id="">
                
                <option style={{padding:"10x 0"}}>Categroy</option>
                <option style={{padding:"10x 0"}}>New Movies</option>
                <option style={{padding:"10x 0"}}>Best Animation Movies </option>
                <option style={{padding:"10x 0"}}>Movies You can watch for free</option>
                <option style={{padding:"10x 0"}}>Most Trending Shows</option>
                <option style={{padding:"10x 0"}}>New Shos</option>
                <option style={{padding:"10x 0"}}>Get a shot of adrenaline</option>
                <option style={{padding:"10x 0"}}>Sci-Fi TV</option>
                <option style={{padding:"10x 0"}}>Docuseries</option>
              </select>
            </div>
          </div>
        </div>
    
       {/* movies list section  */}

       <div className='movies_wrper'>
       <div className='movies_inner_wrp'>
           {data && data.map((element,index)=>(
            <Link to={`/detail/${element._id}/${encodeURIComponent(element.original_title)}/${element.genres}/${encodeURIComponent(element.contentType)}/${encodeURIComponent(element.overview)}/${element.backdrop_path ? encodeURIComponent(element.backdrop_path) : 'default-image-path'}`} style={{textDecoration:"none"}} key={index} >
            <div  className='moviews_image_wrp'>
              <img src={`${element.poster_path}`} alt="" className="moviews_image" />
            </div>
            </Link>
           ))}
       </div>
       </div>


      </div>
    </div>
  )
}
