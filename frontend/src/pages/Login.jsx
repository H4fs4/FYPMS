import React, { useState } from 'react';
import './Login.css';
// import 'boostrap/dist/css/boostrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Login()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event)=>
    {
        event.preventDefault()
        alert('username '+username + 'password'+password)
    }
    return(
        <div className="col-sm-8 vh-100 justify-content-center align-items-center">
            <h5>FYPMS</h5>
            <div className="card-body">
                <div className="card">
        <form  action="" onSubmit={handleSubmit}>
            <input className='form-control mt-1' type="text" placeholder='username'value={username} onChange={(event)=>setUsername(event.target.value)}/>
            <input  className='form-control mt-1' type="password" placeholder='password' value={password} onChange={(event)=>setPassword(event.target.value)} minLength={8}/>
            <button className='btn btn-primary mt-1' type='submit'>LOGIN</button>
        </form>
                </div>
        </div>
        </div>

        
    )
}
export default Login;
