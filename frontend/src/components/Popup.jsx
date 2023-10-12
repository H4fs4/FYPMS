import React, { useState } from "react";
import './Popup.css';

function Popup({btnName, formTitle})
{
    const [isOpen, setIsOpen] =useState(false);
    //const arr = useState(false);
    // const v=arr[0];
    // const fn =arr[1];
    
    return(
 
        <div>
            <button className="btn btn-outline-primary" onClick={()=>setIsOpen(!isOpen)}>{btnName}</button>
{isOpen && (
            <div className="popup">
                <div className="popu-content">
                    <div className="hv-100 justify-content-center align-items-center">
                        <div className="card">
                       
                            <div className="card-body">
                                <h5>{formTitle}</h5>
                                {formTitle.includes('User') && (
                                <form action="">

                                <div className="form-group mb-1"><input className="form-control" placeholder="ID" type="text" /></div>
                                <div className="form-group mb-1"><input className="form-control" placeholder="First Name" type="text" /></div>
                                <div className="form-group mb-1"><input className="form-control" placeholder="Last Name" type="text" /></div>
                                <div className="form-group mb-1">
                                    <select name="type" id="" className="form-control">
                                        <option value="">Select</option>
                                        <option value="">Admin</option>
                                        <option value="">supervisor</option>
                                        <option value="">student</option>
                                        <option value="">panelist</option>
                                        <option value="">Coordinator</option>
                                    </select>
                                </div>
                                <button className="btn btn-primary">SUBMIT</button>
                                <button className="btn btn-danger m-3"  onClick={()=>setIsOpen(!isOpen)}>X</button>
                                
                                </form>)}
{formTitle.includes('Project') && (
                                <form action="">
                                    
                                    <div className="form-group mb-1"><input className="form-control" placeholder="Title" type="text" /></div>
                                    <div className="form-group mb-1">
                                        <select name="type" id="" className="form-control">
                                            <option value="">Select</option>
                                            <option value="">Concept note</option>
                                            <option value="">Progress</option>
                                            <option value="">Final</option>
                                            
                                        </select>
                                    </div>
                                    <button className="btn btn-primary">SUBMIT</button>
                                    <button className="btn btn-danger m-3"  onClick={()=>setIsOpen(!isOpen)}>X</button>
                                    
                                    </form>)}
                                
                            </div>
                        </div>
                    </div>

                    </div>

            </div>
)}
        </div>
    );
}

export default Popup;