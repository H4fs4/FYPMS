import  React  from "react";
import './MainLayout.css';


function MainLayout()
{
    return(
<>
<div className="sidebar">
          <a className="active" href="/">Dashboard</a>
          <a href="users">Users</a>
          <a href="projects">Project/s</a>
          <a href="/logout">Logout</a>
        </div>
        
    

</>
            );
}
export default MainLayout;