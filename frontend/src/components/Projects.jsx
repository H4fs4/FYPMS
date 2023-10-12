import React from "react";
import MainLayout from "../Layout/MainLayout";
import './Users.css';
import Popup from "./Popup";

function Projects()
{
    return (
        
        <>
        <MainLayout/>
        <div className="content">
        <h1>Projects</h1>
        <span className="add-button"><Popup btnName='ADD' formTitle={'New Project'}/></span>

        <table className="table table-striped">
            <thead>
                <th>#</th>
                <th>Type</th>
                <th>Title</th>
                <th>Status</th>
                <th>Action</th>
            </thead>
            <tbody>
            <tr>
                    <td>1</td>
                    <td>Concept Note</td>
                    <td>How to Cook a Chicken by using Flour</td>
                    <td>Accepted</td>
                    <td>
                        <button className="btn btn-primary m-1">VIEW</button>
                        <button className="btn btn-secondary">COMMENT</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        </>
    );
}

export default Projects;