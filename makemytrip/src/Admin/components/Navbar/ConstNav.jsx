import React from 'react';
import NavbarSearchItems from "../NavbarSearchItems/NavbarSearchItems";
import logoc from "../Essential/logoc.png"
const ConstNav = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",backgroundColor:"white",width:"100%", borderBottom: "1px solid gray"}}>
       <img className='header-img-1' src={logoc} alt="yourpic" width={130}/>
      <NavbarSearchItems/>
      <div className='header_sub' style={{backgroundColor:"#1E88E5",height:"3rem"}}>
                        <div>
                            <img src="https://companieslogo.com/img/orig/MMYT-ca98a9f1.png?t=1602681214" alt="My bix" width="20" />
                        </div>
                        <div>
                            <p>Login or Create Account</p>
                        </div>
                    </div>
    </div>
  );
}

export default ConstNav;
