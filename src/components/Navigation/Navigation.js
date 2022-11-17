import { Link } from 'react-router-dom';
import './navigation.css';

export const Navigation = () => {
    return (
        <div className='wrapper'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1200px-Smiley.svg.png' />
        <div className='navigation'>
            <Link className='link' to="/">Login</Link>
            <Link className='link' to="/register">Register</Link>
        </div>
        </div>
    )
    
}
