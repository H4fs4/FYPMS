import React, { useState, useEffect } from "react";
import './Popup.css';
import swal from "sweetalert";

function Popup({ btnName, btnClass, formTitle, userId }) {
    const [isOpen, setIsOpen] = useState(false);
    const [role, setRole] = useState('');
    const [username, setUserName] = useState('');
    


    useEffect(
        () => {
            fetch('http://127.0.0.1:8000/api/users/' + userId, {
                method: 'GET'
            }).then(response => response.json()).then(data => {
                setRole(data.role);
                setUserName(data.username)
            });
        }

        , []);


    const handleSubmit = async (event) => {
        event.preventDefault()
        // alert(name + username + phone + company + email + website + address)\

        if (btnName === 'ADD') {
            const response = await fetch('http://127.0.0.1:8000/api/users/', {
                method: 'POST',
                headers:
                {
                    'Content-Type': 'application/json'
                },
                body:

                    JSON.stringify(
                        {

                            username,
                            role


                        }
                    )

            });

            if (response.ok) {
                swal({ title: 'user created succesful', icon: 'success' });

            }
            else {

                swal({ title: 'Error occured', icon: 'error' });
            }

        }


        if (btnName === 'EDIT') {

            const response = await fetch('http://127.0.0.1:8000/api/users/' + userId + '/', {
                method: 'PUT',
                headers:
                {
                    'Content-Type': 'application/json'
                },
                body:

                    JSON.stringify(
                        {
                            "id": userId,
                            username,
                            role
                        }
                    )

            });

            if (response.ok) {
                alert('update succesful')
            }
            else {
                alert('something went wrong')
            }

        }

        if (btnName === 'DELETE') {

            const response = await fetch('http://127.0.0.1:8000/api/users/' + userId + '/', {
                method: 'DELETE',


            });

            if (response.ok) {
                alert('User succesful Deleted')
            }
            else {
                alert('something went wrong')
            }



        }
    }

    return (

        <>
            <button className={"btn  " + btnClass} onClick={() => setIsOpen(!isOpen)}>{btnName}</button>
            {isOpen && (
                <div className="popup">
                    <div className="popu-content">
                        <div className="hv-100 justify-content-center align-items-center">
                            <div className="card">

                                <div className="card-body">
                                    <h5>{formTitle}</h5>
                                    {formTitle.includes('User') && (
                                        btnName === 'DELETE' ? (
                                            <>
                                                <button onClick={handleSubmit} className="btn btn-primary">YES</button>
                                                <button className="btn btn-danger m-3" onClick={() => setIsOpen(!isOpen)}>X</button>
                                            </>

                                        ) :
                                            <form action="" onSubmit={handleSubmit}>
                                                <div className="form-group mb-1"><input value={role} onChange={(event) => setRole(event.target.value)} className="form-control" placeholder="Role" type="text" /></div>
                                                <div className="form-group mb-1"><input value={username} onChange={(event) => setUserName(event.target.value)} className="form-control" placeholder="username" type="text" /></div>

                                                <button className="btn btn-primary">SUBMIT</button>
                                                <button className="btn btn-danger m-3" onClick={() => setIsOpen(!isOpen)}>X</button>

                                            </form>)}



                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            )}
        </>
    );
}

export default Popup;