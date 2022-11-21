import { useNavigate } from "react-router-dom";
import './home.css';

export const Home = () => {

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/');
    };
    
    return (
            <div className="home-page">
                <button>
                    Add
                </button>
        
                <button className="button2"onClick={navigateLogin}>
                    Logout
                </button>
            </div>
    )
}
