import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card, CardBody, CardText, CardTitle} from 'reactstrap';

const memberCard = ({member, onRemoveMember}) => {
  const getName = () => {
    let name = '';
    if (member.firstName) {
      name += member.firstName;
    }
    if (member.lastName) {
      name += member.lastName;
    }
    if (name.length === 0) {
      name = member.email;
    }
    return name;
  };

  return (
    <Card>
      <CardBody>
        <CardTitle>{getName()}</CardTitle>
        {member.address && <CardText>{member.address}</CardText>}
        <Button color="danger" onClick={() => onRemoveMember(member)}>
          Remove
        </Button>
      </CardBody>
    </Card>
  );
};

memberCard.propTypes = {
  member: PropTypes.object.isRequired,
  onRemoveMember: PropTypes.func.isRequired
};

export default memberCard;
