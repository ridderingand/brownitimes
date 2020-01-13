import React from 'react';
import Option from './Option'

const Options = (props) => (
    <div>
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your Options</h3>
            <button 
                onClick={props.handleDeleteOptions}
                disabled={!props.hasOptions}
                className='button--danger'
                >
                    Remove All
                </button>
        </div>
        {props.options.length === 0 && <p className='widget__placeholder'>👋 Start by adding something fun to do with Browni!</p>}
        {props.options.map((option, index) => (
            <Option 
                key={option} 
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
                count={index + 1}
            />
        ))
        }
    </div>
);

export default Options;