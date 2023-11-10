import React, { useEffect, useState } from "react";
import MainLayout from "../Layout/MainLayout";
import './Users.css';
import Projectpopup from "./Projectpopup";


function Projects(){
    const [project, setProject] = useState([])
    useEffect(
        () => {
            fetch('http://127.0.0.1:8000/api/projects/', {
                method: 'GET'
            }).then(response => response.json()).then(data => setProject(data));
        }

        , [project]);


   
    return (
  <>
        <MainLayout/>
        <div className="content">
        <h1>Projects</h1>
        <span className="add-button"><Projectpopup btnName='ADD' formTitle={'New Project'}/></span>

        <table className="table table-striped">
            <thead>
                <th>#</th>
                <th>Type</th>
                <th>Title</th>
                <th>Status</th>
                <th>Action</th>
            </thead>
            <tbody>
                {
              project.map((project, index)=><tr>
                    <td>{index+1}</td>
                    <td>{project.type}</td>
                    <td>{project.title}</td>
                    <td>{project.status}</td>
                    <td>
                        <button className="btn btn-primary m-1">EDIT</button>
                        <button className="btn btn-secondary">DELETE</button>
                    </td>
                </tr>
              )
            
               
}            </tbody>
        </table>
        </div>

           
        </>
    );
}

export default Projects;