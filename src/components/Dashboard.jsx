import React from "react";
import MainLayout from "../Layout/MainLayout";
import { faUser, faHome, faProjectDiagram, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Dashboard.css';
import { useNavigate } from "react-router-dom";

function Dashboard()
{
    const navigate = useNavigate()
    return (
        
        <>
        <MainLayout/>
        <div className="content">
        <h1>Dashboard</h1>
        <div className="dashboard">

            <div className="card" onClick={()=>navigate('/')}>
                
                <FontAwesomeIcon icon={faChartBar} className="icon" />
                <span className="label">
                Dashboard</span>
                </div>
                <div className="card" onClick={()=>navigate('/users')}>
                <FontAwesomeIcon icon={faUser} className="icon"/>
                <span className="label">
                Users</span>
                </div>
                <div className="card" onClick={()=>navigate('/projects')}>
                <FontAwesomeIcon icon={faProjectDiagram} className="icon"/>
                <span className="label">
                Projects</span>
                </div>
        </div>
        </div>
        </>
    );
}

export default Dashboard;