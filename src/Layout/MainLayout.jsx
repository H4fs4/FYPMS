import  React  from "react";
import './MainLayout.css';


function MainLayout()
{
    return(
<>
<div className="sidebar">
          <a className="active" href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="/logout">Logout</a>
        </div>
        
        <div className="content">
    
        </div>

</>
            );
}
export default MainLayout;