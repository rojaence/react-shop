import React from "react";
import { Link } from "react-router-dom";
import Icon from "@components/Icon"
import "@styles/notFound.scss";

const NotFound = () => {
  return ( 
    <article className="not-found">
      <Icon name='alert' size={200} color='error'></Icon>
        <h1 className="not-found__message">
          <span className="not-found__message--error">404</span>
          Not Found
        </h1>
        <Link to='/' className="button">
          Go to Home
        </Link>
    </article>
  );
};

export default NotFound;
