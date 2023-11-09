import React, { useEffect, useState } from "react";
import MainLayout from "../Layout/MainLayout";
import Popup from "./Popup";


function Users() {
    const [users, setUsers] = useState([])
    useEffect(
        () => {
            fetch('http://127.0.0.1:8000/api/users/', {
                method: 'GET'
            }).then(response => response.json()).then(data => setUsers(data));
        }

        , [users])
    return (
        <>
            <MainLayout />
            <div className="content">
                <h1>Users</h1>
                <span className="add-button"><Popup btnName='ADD' btnClass={'btn-outline-primary'} formTitle={'Add New User'} /></span>

                <table className="table table-striped">
                    <thead>
                        <th>#</th>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Type</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {

                            users.map((user, index) => <tr>
                                <td>{index + 1}</td>
                                <td>T/UDOM/2020/00{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.role}</td>

                                <td>
                                    <Popup btnName='EDIT' btnClass={'btn-dark'} formTitle={'Update User'} userId={user.id} />

                                    <Popup btnName='DELETE' btnClass={'btn-danger'} formTitle={'Are you sure wanna Delete User?'} userId={user.id} />
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Users;