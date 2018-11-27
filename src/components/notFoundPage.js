import React from 'react';
import {NavLink as Link} from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section>
      <div className="row">
        <br />
        <br />
      </div>
      <div className="row">
        <div className="col-sm" />
        <div className="col-sm">
          <div className="jumbotron text-center">
            <h4>404 Page Not Found</h4>
            <Link to="/"> Go back to homepage</Link>
          </div>
        </div>
        <div className="col-sm" />
      </div>
    </section>
  );
};

export default NotFoundPage;
