import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as groupActions from '../../actions/groupActions';
import {Card, CardBody, CardText, CardTitle} from 'reactstrap';

export class mutualGroupMembers extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    groupMembers: PropTypes.array.isRequired,
    mutualGroupMembers: PropTypes.array.isRequired,
    getMutualGroupMembers: PropTypes.func.isRequired,
    clearMutualGroupMembers: PropTypes.func.isRequired
  };

  componenetWillMount() {
    const {auth, getMutualGroupMembers} = this.props;

    getMutualGroupMembers(auth.email);
  }

  componentWillReceiveProps(nextProps) {
    const {auth, groupMembers, getMutualGroupMembers} = this.props;

    if (nextProps.groupMembers.length !== groupMembers.length) {
      getMutualGroupMembers(auth.email);
    }
  }

  componentWillUnmount() {
    const {clearMutualGroupMembers} = this.props;
    clearMutualGroupMembers();
  }

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
          <div cassName="col-sm">
            <p>No one has added you yet.</p>
          </div>
        )}
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    auth: state.auth,
    mutualGroupMembers: state.mutualGroupMembers
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getMutualGroupMembers: userId => {
      dispatch(groupActions.getMutualGroupMembers(userId));
    },
    clearMutualGroupMembers: () => {
      dispatch(groupActions.clearMutualGroupMembers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(mutualGroupMembers);
