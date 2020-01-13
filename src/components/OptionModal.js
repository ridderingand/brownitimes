import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        // The two explanation marks convert it to true booleans
        isOpen={!!props.selectedOption}
        // This is only for accessibility settings below
        contentLabel="Selected Option"
        onRequestClose={props.handleClearSelectedOption}
        closeTimeoutMS={200}
        className="modal"
    >
        <h2 className='modal__title'>Selected Option</h2>
        {props.selectedOption && <p className='modal__option'>{props.selectedOption}</p>}
        <button className='button' onClick={props.handleClearSelectedOption}>Got it!</button>
    </Modal>
)
export default OptionModal;