import React from 'react';
import './Login.css';
// import 'boostrap/dist/css/boostrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Login()
{
    return(
        <div className="col-sm-6">
            <div className="card-body">
            <h1>FYPMS</h1>
        <form className='form-group' action="">
            <input className='form-control mt-1' type="text" placeholder='username'/>
            <input  className='form-control mt-1' type="password" placeholder='password' minLength={8}/>
            <button className='btn btn-primary mt-1'>LOGIN</button>
        </form>
        </div>
        </div>
    )
}
export default Login;