import React from 'react';
import PropTypes from 'prop-types';
import PriceBadge from './priceBadge';
import {Button} from 'reactstrap';

const itemCard = ({item, listOwner, userName, onClaimChanged}) => {
  const getClaimedColor = () => {
    if (item.claimedBy) {
      if (item.claimedBy === userName) {
        return 'warning';
      } else {
        return 'danger';
      }
    } else {
      return 'primary';
    }
  };

  const getClaimedText = () => {
    if (item.claimedBy) {
      if (item.claimedBy === userName) {
        return 'Unclaim';
      } else {
        return 'Claimed';
      }
    } else {
      return 'Claim';
    }
  };

  return (
    <section>
      <div className="card item-card mb-4">
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{item.description}</h6>
          {item.notes && <h6 className="mb-0">Notes:</h6>}
          {item.notes && <p className="card-text">{item.notes}</p>}
          <PriceBadge value={item.priceTier} />
          <Button
            color={getClaimedColor()}
            onClick={() => onClaimChanged(item, listOwner)}
            // disabled={item.claimedBy && item.claimedBy !== userName}
            disabled
            title={
              item.claimedBy && item.claimedBy !== userName
                ? 'Contact ' + item.claimedBy + ' with any complaints!'
                : ''
            }>
            {getClaimedText()}
          </Button>
          {item.url && <span>&nbsp;&nbsp;</span>}
          {item.url && (
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              View product <i className="fa fa-external-link" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

itemCard.propTypes = {
  item: PropTypes.object.isRequired,
  listOwner: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  onClaimChanged: PropTypes.func.isRequired
};

export default itemCard;
