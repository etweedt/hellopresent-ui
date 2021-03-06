import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';

const userContent = ({userInfo, userInfoChanged, saveUserInfo}) => {
  return (
    <Fragment>
      <div className="row mb-4">
        <div className="col-sm">
          <h1>
            <i className="fa fa-user" /> My profile
          </h1>
          <p>Details about yourself so other people can shop for you</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm">
          <Form
            onKeyPress={event => {
              if (event.which === 13 && event.target.name !== 'address') {
                event.preventDefault();
              }
            }}>
            <FormGroup>
              <Label>First name</Label>
              <Input
                type="text"
                name="firstName"
                value={userInfo.firstName}
                onChange={userInfoChanged}
              />
            </FormGroup>
            <FormGroup>
              <Label>Last name</Label>
              <Input
                type="text"
                name="lastName"
                value={userInfo.lastName}
                onChange={userInfoChanged}
              />
            </FormGroup>
            <FormGroup>
              <Label>Address</Label>
              <Input
                type="textarea"
                rows="3"
                name="address"
                value={userInfo.address}
                onChange={userInfoChanged}
              />
            </FormGroup>
          </Form>
          <Button color="success" onClick={saveUserInfo}>
            Save
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

userContent.propTypes = {
  userInfo: PropTypes.object.isRequired,
  userInfoChanged: PropTypes.func.isRequired,
  saveUserInfo: PropTypes.func.isRequired
};

export default userContent;
