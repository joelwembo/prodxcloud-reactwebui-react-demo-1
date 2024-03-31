import React from 'react';
import { Link } from 'react-router-dom'
import { Modal } from "react-bootstrap";

const CardModal = (props) => {
    
return (

    <Modal
    show={props.show}
    onHide={props.onHide}
  >
    <Modal.Header closeButton></Modal.Header>

    <div className="modal-body space-y-20 pd-40">
        <h3>Place a Bid</h3>
        <p className="text-center sub-heading">You must bid a least <span className="price color-popup">4.89 ETH</span></p>
        <input type="text" className="form-control" placeholder="00.00 ETH" />
        <p className="label-1">Enter quantity. <span className="color-popup">5 available</span>
        </p>
        <input type="text" className="form-control quantity form-bottom" />
        <div className="d-flex justify-content-between detail-1">
            <p> You must bid at least:</p>
            <p className="text-right price color-popup"> 4.89 ETH </p>
        </div>
        <div className="d-flex justify-content-between detail-2">
            <p> Service free:</p>
            <p className="text-right price color-popup"> 0,89 ETH </p>
        </div>
        <div className="d-flex justify-content-between detail-3">
            <p> Total bid amount:</p>
            <p className="text-right price color-popup"> 4 ETH </p>
        </div>
        <Link to="/wallet-connect" className="button-popup" data-toggle="modal" data-target="#popup_bid_success" data-dismiss="modal" aria-label="Close"> Place a bid</Link>
    </div>
    </Modal>
    
  );
};

export default CardModal;
