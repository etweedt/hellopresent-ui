import React from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import ItemCard from '../common/itemCard';

const shopContent = ({auth, selected, selectedChanged, groupMembers, wishlist, onClaimChanged}) => {
  const getName = member => {
    let retVal = member.firstName;
    if (member.lastName) {
      retVal += ` ${member.lastName}`;
    }
    return retVal;
  };

  return (
    <section>
      <div className="row mb-3">
        <div className="col-sm">
          <h1>
            <i className="fa fa-gift" /> Find gifts for others
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <Form>
            <FormGroup>
              <Label>Who are you shopping for?</Label>
              <Input
                type="select"
                name="select"
                onChange={selectedChanged}
                value={selected}>
                <option value="" disabled />
                {groupMembers.map(member => {
                  if (member.firstName) {
                    return (
                      <option key={member.id} value={member.id}>
                        {getName(member)}
                      </option>
                    );
                  } else {
                    return null;
                  }
                })}
              </Input>
            </FormGroup>
          </Form>
        </div>
      </div>
      {wishlist.email && (
        <div className="row">
          <div className="col-sm">
            <div className="row">
              {wishlist.items.map(item => {
                return (
                  <div key={item._id} className="col-lg-4 col-md-6">
                    <ItemCard
                      listOwner={wishlist.email}
                      item={item}
                      userName={auth.email}
                      onClaimChanged={onClaimChanged}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

shopContent.propTypes = {
  auth: PropTypes.object.isRequired,
  selected: PropTypes.string,
  selectedChanged: PropTypes.func.isRequired,
  groupMembers: PropTypes.array.isRequired,
  wishlist: PropTypes.object.isRequired,
  onClaimChanged: PropTypes.func.isRequired
};

export default shopContent;
