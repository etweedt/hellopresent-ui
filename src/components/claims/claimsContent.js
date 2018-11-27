import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../common/itemCard';

const claimedContent = ({claims, userName, onClaimChanged}) => {
  return (
    <section>
      <div className="row">
        <div className="col-sm-1" />
        <div className="col-sm-10">
          <h1>
            <i className="fa fa-tags" /> View your claimed gifts
          </h1>
        </div>
      </div>
      <div className="row">
        <br />
        <br />
      </div>
      {claims.length > 0 && (
        <div className="row">
          <div className="col-md-1" />
          <div className="col-md-10">
            {claims.map((claim, index) => {
              return (
                <div key={index} className="row">
                  <div className="col-sm">
                    <div className="row">
                      <div className="col-sm">
                        <h4>For {claim.userName}</h4>
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
                              onClaimChanged={onClaimChanged}
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
          <div className="col-md-1" />
          <div className="col-md-10">
            <p>You have not claimed any gifts.</p>
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
