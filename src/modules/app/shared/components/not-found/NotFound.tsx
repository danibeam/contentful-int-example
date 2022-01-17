import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <div>
            <h1>The Item you are trying to reach is not reachable</h1>
            <h2>You might try something different...</h2>
            <button>
                <Link to="/">Go back Home</Link>
            </button>
        </div>
    );
};

export default NotFound;
