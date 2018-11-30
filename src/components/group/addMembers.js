import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Form, FormGroup, Input} from 'reactstrap';
import * as searchActions from '../../actions/searchActions';
import MemberCard from './memberCard';

export class addMembers extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    searchResults: PropTypes.array.isRequired,
    onAddMember: PropTypes.func.isRequired,
    searchMembers: PropTypes.func.isRequired,
    clearResults: PropTypes.func.isRequired,
    members: PropTypes.array.isRequired,
    activeTab: PropTypes.string.isRequired
  };

  state = {
    searchString: '',
    timer: null
  };

  componentWillReceiveProps(nextProps) {
    const {clearResults} = this.props;
    const {timer} = this.state;

    if (nextProps.activeTab !== 'add') {
      clearTimeout(timer);
      clearResults();

      this.setState({
        searchString: '',
        timer: null
      });
    }
  }

  componentWillUnmount() {
    const {clearResults} = this.props;
    const {timer} = this.state;
    clearTimeout(timer);
    clearResults();
  }

  onSearchChanged = event => {
    const {timer} = this.state;

    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(this.onTimerExpired, 1000);

    this.setState({
      searchString: event.target.value,
      timer: newTimer
    });
  };

  onTimerExpired = () => {
    const {auth, searchMembers, clearResults} = this.props;
    const {searchString} = this.state;

    if (searchString.length >= 3) {
      searchMembers(auth.email, searchString);
    } else {
      clearResults();
    }
  };

  render() {
    const {searchResults, onAddMember, members} = this.props;
    const {searchString} = this.state;

    return (
      <section>
        <div className="row">
          <div className="col-sm">
            <Form
              onKeyPress={event => {
                if (event.which === 13) {
                  event.preventDefault();
                }
              }}>
              <FormGroup>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-search" />
                    </span>
                  </div>
                  <Input
                    type="text"
                    placeholder="Name or email"
                    value={searchString}
                    onChange={this.onSearchChanged}
                  />
                </div>
              </FormGroup>
            </Form>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="row">
              {searchResults.map(result => {
                return (
                  <div key={result.email} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <MemberCard
                      member={result}
                      isAdd={true}
                      onAddMember={onAddMember}
                      members={members}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export const mapStateToProps = state => {
  return {
    auth: state.auth,
    searchResults: state.searchResults
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    searchMembers: (userId, searchString) => {
      dispatch(searchActions.getMemberSearchResults(userId, searchString));
    },
    clearResults: () => {
      dispatch(searchActions.clearMemberSearchResults());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addMembers);
