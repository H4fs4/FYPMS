import  React  from "react";
import './MainLayout.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHome, faProjectDiagram, faChartBar } from "@fortawesome/free-solid-svg-icons";

function MainLayout()
{
    return(
<>
<div className="sidebar">
          <NavLink  to="/"> <FontAwesomeIcon icon={faChartBar}/> Dashboard</NavLink>
          <NavLink to="/users">  <FontAwesomeIcon icon={faUser}/> Users</NavLink>
          <NavLink to="/projects"> <FontAwesomeIcon icon={faProjectDiagram}/>Projects</NavLink>
          <NavLink to="/logout">Logout</NavLink>
        </div>
        
    

</>
            );
}
export default MainLayout;