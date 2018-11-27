import React from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import ItemCard from '../common/itemCard';

const shopContent = ({
  wishlists,
  selected,
  selectedChanged,
  userName,
  onClaimChanged
}) => {
  const findList = () => {
    const found = wishlists.find(list => {
      return list.firstName + ' ' + list.lastName === selected;
    });
    if (found) {
      return found;
    }
  };
  const foundList = findList();

  return (
    <section>
      <div className="row">
        <div className="col-sm-1" />
        <div className="col-sm-10">
          <h1>
            <i className="fa fa-gift" /> Find gifts for others
          </h1>
        </div>
      </div>
      <div className="row">
        <br />
        <br />
      </div>
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-2">
          <Form>
            <FormGroup>
              <Label>Who are you shopping for?</Label>
              <Input
                type="select"
                name="select"
                onChange={selectedChanged}
                value={selected}>
                {wishlists.map((list, index) => {
                  return (
                    <option key={index}>
                      {list.firstName} {list.lastName}
                    </option>
                  );
                })}
              </Input>
            </FormGroup>
          </Form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-10">
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
      </div>
    </section>
  );
};

shopContent.propTypes = {
  wishlists: PropTypes.array.isRequired,
  selected: PropTypes.string,
  selectedChanged: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  onClaimChanged: PropTypes.func.isRequired
};

export default shopContent;
