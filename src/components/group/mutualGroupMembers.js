import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardBody, CardText, CardTitle} from 'reactstrap';

export class mutualGroupMembers extends React.Component {
  static propTypes = {
    mutualGroupMembers: PropTypes.array.isRequired
  };

  getName = member => {
    let name = '';
    if (member.firstName) {
      name += member.firstName;
    }
    if (member.lastName) {
      name += ` ${member.lastName}`;
    }
    if (name.length === 0) {
      name = member.email;
    }
    return name;
  };

  render() {
    const {mutualGroupMembers} = this.props;

    return (
      <div className="row">
        {mutualGroupMembers.map(member => {
          return (
            <div
              key={member.email}
              className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <Card className="mb-4">
                <CardBody>
                  <CardTitle>{this.getName(member)}</CardTitle>
                  <CardText>{member.email}</CardText>
                  <CardText>{member.address}</CardText>
                </CardBody>
              </Card>
            </div>
          );
        })}
        {mutualGroupMembers.length === 0 && (
          <div className="col-sm">
            <p>No one has added you yet.</p>
          </div>
        )}
      </div>
    );
  }
}

export default mutualGroupMembers;
