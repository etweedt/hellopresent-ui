import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card, CardBody, CardText, CardTitle} from 'reactstrap';

const memberCard = ({member, isAdd, onAddMember, onRemoveMember, members}) => {
  const getName = () => {
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

  const getAddText = () => {
    if (members) {
      const found = members.find(mem => {
        return mem.email === member.email;
      });

      return found ? 'Added' : 'Add';
    }

    return 'Add';
  };

  const getAddDisabledState = () => {
    if (members) {
      const found = members.find(mem => {
        return mem.email === member.email;
      });

      return found ? true : false;
    }

    return false;
  };

  return (
    <Card className="mb-4">
      <CardBody>
        <CardTitle>{getName()}</CardTitle>
        <CardText>{member.email}</CardText>
        {isAdd ? (
          <Button
            color="success"
            onClick={() => onAddMember(member)}
            disabled={getAddDisabledState()}
            outline={getAddDisabledState()}>
            {getAddText()}
          </Button>
        ) : (
          <Button color="danger" onClick={() => onRemoveMember(member)}>
            Remove
          </Button>
        )}
      </CardBody>
    </Card>
  );
};

memberCard.propTypes = {
  member: PropTypes.object.isRequired,
  isAdd: PropTypes.bool.isRequired,
  onAddMember: PropTypes.func,
  onRemoveMember: PropTypes.func,
  members: PropTypes.array
};

export default memberCard;
