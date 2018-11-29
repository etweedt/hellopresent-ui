import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../common/itemCard';
import getSnark from './randomSnarkyMessage';

const claimedContent = ({claims, userName, onClaimChanged}) => {
  return (
    <section>
      <div className="row mb-3">
        <div className="col-sm">
          <h1>
            <i className="fa fa-tags" /> Gifts you're going to buy
          </h1>
        </div>
      </div>
      {claims.length > 0 && (
        <div className="row">
          <div className="col-sm">
            {claims.map((claim, index) => {
              return (
                <div key={index} className="row">
                  <div className="col-sm">
                    <div className="row">
                      <div className="col-sm">
                        <h6>
                          For{' '}
                          {claim.lastName
                            ? `${claim.firstName} ${claim.lastName}`
                            : `${claim.firstName}`}
                        </h6>
                        {claim.address && <pre>{claim.address}</pre>}
                      </div>
                    </div>
                    <div className="row">
                      {claim.items.map((item, iIdx) => {
                        return (
                          <div key={iIdx} className="col-sm-4">
                            <ItemCard
                              item={item}
                              listOwner={claim.email}
                              userName={userName}
                              onClaimChanged={item =>
                                onClaimChanged(item, claim)
                              }
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
        <div className="row">
          <div className="col-sm">
            <p>{getSnark()}</p>
          </div>
        </div>
      )}
    </section>
  );
};

claimedContent.propTypes = {
  claims: PropTypes.array.isRequired,
  userName: PropTypes.string.isRequired,
  onClaimChanged: PropTypes.func.isRequired
};

export default claimedContent;
