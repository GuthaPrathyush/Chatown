import { useState } from 'react';
import { Link } from 'react-router-dom';
import './stylesheet/login.css'
export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='card-ba'>
            <div className="card ">
                <div className="card-body"><br />
                    <h5  align="center" className="card-title">Login into ChatOwn</h5><br />
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text" id="addon-wrapping">🔒</span>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            className="form-control" 
                            placeholder="Password" 
                            aria-label="Password" 
                            aria-describedby="addon-wrapping" 
                        />
                        <button 
                            className="btn btn-outline-secondary" 
                            type="button" 
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <center>
                    <button type="button" className="btn btn-outline-primary">Login</button><br /><hr />
                    <Link to="/signup" className="card-link">Sign up for ChatOwn</Link>
                    </center>
                </div>
            </div>
        </div>
    );
}
