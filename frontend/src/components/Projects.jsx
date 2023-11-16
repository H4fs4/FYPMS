import React, { useEffect, useState } from "react";
import MainLayout from "../Layout/MainLayout";
import './Users.css';
import Projectpopupp from "./Projectpopupp";


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
        <span className="add-button"><Projectpopupp btnName='ADD' formTitle={'Add New Project'}/></span>

        <table className="table table-striped">
            <thead>
                <th>#</th>
                <th>Project ID</th>
                <th>Type</th>
                <th>Title</th>
                <th>Status</th>
                <th>Action</th>
            </thead>
            <tbody>
                {
              project.map((project, index)=><tr>
                    <td>{index+1}</td>
                    <td>P00{project.project_id}</td>
                    <td>{project.type}</td>
                    <td>{project.title}</td>
                    <td>{project.status}</td>
                    <td>
                    <Projectpopupp btnName='EDIT' btnClass={'btn-dark'} formTitle={'Update Project'} projectId={project.project_id} />
                    <Projectpopupp btnName='DELETE' btnClass={'btn-danger'} formTitle={'Are you sure wanna Delete Project?'} projectId={project.project_id} />
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