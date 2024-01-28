import { IoMdMenu } from 'react-icons/io';
import {FaSearch} from 'react-icons/fa';


export default function Header() {
  return (
    <div style={{backgroundColor:"rgb(29 29 29)"}}>
      <div style={{width:"1235px", display:"flex", justifyContent:"space-around", alignItems:"center",height:"58px", padding:" 0", margin:"0 auto"}}>
          <div> 
            <h2>
              <span style={{color:"yellow"}}>AMBD</span>
            </h2>
          </div>

            {/* Menu */}
          <div className="menu" style={{borderRadius:"8px", padding:"0 5px"}}>
            <button style={{width:"94px" ,display:"flex", justifyContent:"space-between",fontSize:"22px", padding:"4px 5px", background:"transparent",outline:"none",border:"none"}}>
              <span><IoMdMenu /></span>
              <span>Menu</span>
             </button>
          </div>

          {/* search */}

          <form style={{backgroundColor:"white",display:"flex", width:"700px", borderRadius:"4px", border:"0.5px solid yellow"}}>

            <select style={{outline:"none",border:"none",background:"transparent",color:"black", width:"64px", padding:"0 12px", borderRight:"0.5px solid gray"}}>
              <option>All </option>
               <option>Titles</option>
               <option>Tv Episode</option>
               <option>Show</option>
               <option>serise</option>
            </select>

            <input type="text" style={{padding:"6px 9px",fontSize:"15px",width:"86%", outline:"none",border:"none", background:'transparent',color:"black"}}/>
            <button style={{background:"white",color:"black",outline:"none", border:"none", cursor:"pointer"}}><FaSearch /></button>
          </form>

          <div className='links'>
             <button className="btn1"  style={{backgroundColor:"transparent",outline:"none",border:"none",borderRadius:"8px",padding:"0 7px"}}>
              <h2 style={{margin:"5px 0", fontSize:"17px"}}>
                 <span>AMBb</span>
                <span style={{color:"skyblue"}}>Pro</span>
              </h2>
             </button>
             <button className="btn2"  style={{backgroundColor:"transparent",outline:"none",border:"none",borderRadius:"8px",padding:"0 7px"}}>
              <h2 style={{margin:"5px 0", fontSize:"17px"}}>
                <span>Watchlist</span>
              </h2>
             </button>
             <button className="btn3"  style={{backgroundColor:"transparent",outline:"none",border:"none",borderRadius:"8px",padding:"0 7px"}}>
              <h2 style={{margin:"5px 0", fontSize:"17px"}}>
                <span>Sign in</span>
              </h2>
             </button>
             <select id="btn4"  type='option' style={{backgroundColor:"transparent",outline:"none",border:"none",borderRadius:"8px",padding:"0 7px"}}>
                <option><h2 style={{margin:"5px 0", fontSize:"17px"}}>
                <span>EN</span>
              </h2></option>
                <option>EN</option>
                <option>EN</option>
                <option>EN</option>
                <option>EN</option>
             </select>
          </div>

      </div>
    </div>
  )
}
