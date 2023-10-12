import React from "react";
import MainLayout from "../Layout/MainLayout";
import Popup from "./Popup";

function Users()
{
    return (
        <>
        <MainLayout/>
        <div className="content">
        <h1>Users</h1>
<span className="add-button"><Popup btnName='ADD' formTitle={'Add New User'}/></span>   

        <table className="table table-striped">
            <thead>
                <th>#</th>
                <th>ID</th>
                <th>Full Name</th>
                <th>Type</th>
                <th>Action</th>
            </thead>
            <tbody>
            <tr>
                    <td>1</td>
                    <td>T/UDOM/2020/009</td>
                    <td>Hafsa Ayoub Kisili</td>
                    <td>Student</td>
                    <td>
                        <button className="btn btn-dark m-1">EDIT</button>
                        <button className="btn btn-danger">DELETE</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>T/UDOM/2020/009</td>
                    <td>Hafsa Ayoub Kisili</td>
                    <td>Student</td>
                    <td>
                        <button className="btn btn-dark m-1">EDIT</button>
                        <button className="btn btn-danger">DELETE</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        </>
    );
}

export default Users;