import React, { useState } from "react";

function HomeReason() {
  const [numbers, setNumbers] = useState({
    bags: 10,
    organizations: 5,
    collections: 7,
  });

  return (
    <div id="reason" className="element reason-wrapper">
      <div className="container">
        <div className="reason-column">
          <div className="reason-column_number">{numbers.bags}</div>
          <div className="reason-column_head">Oddanych worków</div>
          <div className="reason-column_text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            architecto corporis dolorum fugit ipsam ipsum modi officia, quae
            quis?
          </div>
        </div>
        <div className="reason-column">
          <div className="reason-column_number">{numbers.organizations}</div>
          <div className="reason-column_head">Wspartych organizacji</div>
          <div className="reason-column_text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            architecto corporis dolorum fugit ipsam ipsum modi officia, quae
            quis?
          </div>
        </div>
        <div className="reason-column">
          <div className="reason-column_number">{numbers.collections}</div>
          <div className="reason-column_head">Zorganizowanych zbiórek</div>
          <div className="reason-column_text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            architecto corporis dolorum fugit ipsam ipsum modi officia, quae
            quis?
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeReason;
