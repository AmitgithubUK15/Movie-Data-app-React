import { IoMdMenu } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';
import { useRef, useState,  } from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
  const [input, setInputValue] = useState('');
  // const [searchdata, setSearchData] = useState();
  const userinput = useRef(null);
 


   function handleReq() {
      if (userinput.current.value !== "") {
        setInputValue(input)
        // setSearchData(userinput.current.value)
      } else {
        alert("Please Enter Movie name");
      }
  }


  return (
    <div style={{ backgroundColor: "rgb(29 29 29 / 45%)", display: "flex", justifyContent: "center", position: "sticky", top: "-3px", zIndex: "1000", backdropFilter: "blur(10px)" }}>
      <div className='nav' style={{ width: "1019px", display: "flex", justifyContent: "space-between", alignItems: "center", height: "58px", padding: " 0", margin: "0 auto" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div>
            <h2>
              <span style={{ color: "yellow" }}>DailyFlex</span>
            </h2>
          </div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="menu" style={{ borderRadius: "8px", padding: "0 5px" }}>
            <button style={{ width: "94px", display: "flex", justifyContent: "space-between", fontSize: "22px", padding: "4px 5px", background: "transparent", outline: "none", border: "none", cursor: "pointer" }}>
              <span><IoMdMenu /></span>
              <span>Menu</span>
            </button>
          </div>
        </Link>
        <div className='navform' style={{ backgroundColor: "white", display: "flex", width: "584px", borderRadius: "4px", border: "0.5px solid yellow" }}>
          <input type="text" ref={userinput} placeholder='Search....' value={input} onChange={(e) => setInputValue(e.target.value)} style={{ padding: "6px 9px", fontSize: "15px", width: "100%", outline: "none", border: "none", background: 'transparent', color: "black" }} />
          <Link to={`/data/${encodeURIComponent(input)}`}>
            <button onClick={handleReq} style={{ background: "white", color: "black", outline: "none", border: "none", cursor: "pointer" }}><FaSearch /></button>
          </Link>
        </div>
        <div className='links'>
          <Link to="/">
            <button className="btn3" style={{ backgroundColor: "transparent", outline: "none", border: "none", borderRadius: "8px", padding: "0 7px", cursor: "pointer" }}>
              <h2 style={{ margin: "5px 0", fontSize: "17px" }}>
                <span>Sign in</span>
              </h2>
            </button>
          </Link>
          <Link to="/">
            <button className="btn1" style={{ backgroundColor: "transparent", outline: "none", border: "none", borderRadius: "8px", padding: "0 7px", cursor: "pointer" }}>
              <h2 style={{ margin: "5px 0", fontSize: "17px" }}>
                <span>Theme</span>
                <input type="hidden" />
              </h2>
            </button>
          </Link>
        </div>
      </div>
      
    </div>
    
  )
}
