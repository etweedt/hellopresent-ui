import React, {Fragment} from 'react';
import {NavLink as Link, withRouter} from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default withRouter(NotFoundPage);
