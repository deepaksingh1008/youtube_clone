import React from 'react';
import { Link } from 'react-router-dom';
// Optional: if you want to add some styles

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <h1>404</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <Link to="/">Go to Home</Link>
        </div>
    );
};

export default PageNotFound;