import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from './itemCard';

const userWishlistContent = ({wishlist, onAdd, onEdit, onDelete}) => {
  return (
    <section>
      <div className="row mb-3">
        <div className="col-sm">
          <h1>
            <i className="fa fa-list-alt" /> Manage your items
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <button
            className="btn btn-sm btn-outline-success"
            type="button"
            onClick={onAdd}>
            Add Item
          </button>
          <br />
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <div className="row">
            {wishlist.map((item, index) => {
              return (
                <div key={index} className="col-lg-4 col-md-6">
                  <ItemCard
                    wishlistItem={item}
                    onEdit={onEdit}
                    onDelete={onDelete}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

userWishlistContent.propTypes = {
  wishlist: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default userWishlistContent;
