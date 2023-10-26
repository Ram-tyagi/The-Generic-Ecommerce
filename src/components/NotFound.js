import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found">
        <h2>404 Error Found</h2>
        <p>The page you try to access does not exist</p>
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
};
export default NotFound;
