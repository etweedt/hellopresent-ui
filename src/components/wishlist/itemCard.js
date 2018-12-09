import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import PriceBadge from '../common/priceBadge';

const itemCard = ({wishlistItem, onEdit, onDelete}) => {
  return (
    <Fragment>
      <div className="card item-card mb-4">
        <div className="card-body">
          <h4 className="card-title">{wishlistItem.name}</h4>
          <h6 className="card-subtitle mb-2 text-muted">
            {wishlistItem.description}
          </h6>
          {wishlistItem.notes && <h6 className="mb-0">Notes:</h6>}
          {wishlistItem.notes && (
            <p className="card-text">{wishlistItem.notes}</p>
          )}
          <PriceBadge value={wishlistItem.priceTier} />
          <button
            className="btn btn-primary"
            type="button"
            onClick={onEdit.bind(this, wishlistItem)}>
            Edit
          </button>
          &nbsp;
          <button
            className="btn btn-danger"
            type="button"
            onClick={onDelete.bind(this, wishlistItem)}>
            Delete
          </button>
          {wishlistItem.url && <span>&nbsp;&nbsp;</span>}
          {wishlistItem.url && (
            <a
              href={wishlistItem.url}
              target="_blank"
              rel="noopener noreferrer">
              View product <i className="fa fa-external-link" />
            </a>
          )}
        </div>
      </div>
    </Fragment>
  );
};

itemCard.propTypes = {
  wishlistItem: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default itemCard;
