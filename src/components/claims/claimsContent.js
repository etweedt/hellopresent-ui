import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../common/itemCard';
import getSnark from './randomSnarkyMessage';

const claimedContent = ({claims, userName, onClaimChanged, onViewClaim}) => {
  return (
    <Fragment>
      <div className='row mb-3'>
        <div className='col-sm'>
          <h1>
            <i className='fa fa-tags' /> Claims
          </h1>
          <p>Items you have claimed to purchase for others</p>
        </div>
      </div>
      {claims.length > 0 && (
        <div className='row'>
          <div className='col-sm'>
            {claims.map((claim, index) => {
              return (
                <div key={index} className='row'>
                  <div className='col-sm'>
                    <div className='row'>
                      <div className='col-sm'>
                        <h6>
                          For{' '}
                          {claim.lastName
                            ? `${claim.firstName} ${claim.lastName}`
                            : `${claim.firstName}`}
                        </h6>
                        {claim.address && <pre>{claim.address}</pre>}
                      </div>
                    </div>
                    <div className='row'>
                      {claim.items.map((item, idx) => {
                        return (
                          <div
                            key={item.name + idx}
                            className='col-xl-4 col-lg-6 col-md-12'>
                            <ItemCard
                              item={item}
                              listOwner={claim.email}
                              userName={userName}
                              onClaimChanged={item =>
                                onClaimChanged(item, claim)
                              }
                              onViewClaim={onViewClaim}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {claims.length === 0 && (
        <div className='row'>
          <div className='col-sm'>
            <p>{getSnark()}</p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

claimedContent.propTypes = {
  claims: PropTypes.array.isRequired,
  userName: PropTypes.string.isRequired,
  onClaimChanged: PropTypes.func.isRequired,
  onViewClaim: PropTypes.func.isRequired,
};

export default claimedContent;
