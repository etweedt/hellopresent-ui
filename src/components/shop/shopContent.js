import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import ItemCard from '../common/itemCard';

const shopContent = ({
  auth,
  selected,
  selectedChanged,
  groupMembers,
  wishlist,
  onClaimChanged,
  onViewClaim,
}) => {
  const getName = member => {
    let retVal = member.firstName;
    if (member.lastName) {
      retVal += ` ${member.lastName}`;
    }

    if (!retVal) {
      retVal = member.email;
    }

    return retVal;
  };

  return (
    <Fragment>
      <div className='row mb-3'>
        <div className='col-sm'>
          <h1>
            <i className='fa fa-gift' /> Shop
          </h1>
          <p>View items for people you have added to your group</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-8'>
          <Form>
            <FormGroup>
              <Label>Who are you shopping for?</Label>
              <Input
                type='select'
                name='select'
                onChange={selectedChanged}
                value={selected}>
                <option value='' disabled />
                {groupMembers.map(member => {
                  return (
                    <option key={member.email} value={member.email}>
                      {getName(member)}
                    </option>
                  );
                })}
              </Input>
            </FormGroup>
          </Form>
        </div>
      </div>
      {wishlist.email ? (
        <div className='row'>
          <div className='col-sm'>
            <div className='row'>
              {wishlist.items.map((item, idx) => {
                return (
                  <div
                    key={item.name + idx}
                    className='col-xl-4 col-lg-6 col-md-12'>
                    <ItemCard
                      listOwner={wishlist.email}
                      item={item}
                      userName={auth.email}
                      onClaimChanged={onClaimChanged}
                      onViewClaim={onViewClaim}
                    />
                  </div>
                );
              })}
              {wishlist.items.length === 0 && (
                <div className='col-sm'>
                  <p>Nothing has been added to this wishlist yet!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className='row'>
          <div className='col-sm'>
            {groupMembers.length > 0 ? (
              <p>Select a user to see their list.</p>
            ) : (
              <p>Add some users to your group to start shopping.</p>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

shopContent.propTypes = {
  auth: PropTypes.object.isRequired,
  selected: PropTypes.string,
  selectedChanged: PropTypes.func.isRequired,
  groupMembers: PropTypes.array.isRequired,
  wishlist: PropTypes.object.isRequired,
  onClaimChanged: PropTypes.func.isRequired,
  onViewClaim: PropTypes.func.isRequired,
};

export default shopContent;
