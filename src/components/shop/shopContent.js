import React from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup, Label, Input} from 'reactstrap';
// import ItemCard from '../common/itemCard';

const shopContent = ({selected, selectedChanged, groupMembers}) => {
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
      {/* <div className="row">
        <div className="col-sm">
          {foundList && (
            <div className="row">
              {foundList.items.map((item, index) => {
                return (
                  <div key={index} className="col-lg-4 col-md-6">
                    <ItemCard
                      listOwner={foundList.email}
                      item={item}
                      userName={userName}
                      onClaimChanged={onClaimChanged}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div> */}
    </section>
  );
};

shopContent.propTypes = {
  selected: PropTypes.string,
  selectedChanged: PropTypes.func.isRequired,
  groupMembers: PropTypes.array.isRequired
};

export default shopContent;
