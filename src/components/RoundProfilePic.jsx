import React from 'react'
import logo from './imgFolder/logo192.png'




function RoundProfilePic() {

    const style = {
        borderRadius: "50%",
        width: "50px",
        height: "50%",
        margin: "0 10px 10px 10px"
    }

    


    return <img src={logo} alt="PP" style={style}/>
}

export default RoundProfilePic;