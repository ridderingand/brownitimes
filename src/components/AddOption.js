import React from 'react';

export default class AddOption extends React.Component{
    //adding state here too
    state = {
        error: undefined
    }
    // this is a separate handleAddOption than in props
     handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        // this is the handleAddOption from props
        const error = this.props.handleAddOption(option)
        e.target.elements.option.value = '';
       
        // I can just type error and the first one is implied
        this.setState(() => ({ error: error}))

        // when we do submit valid data the input gets wiped
        if (!error) {
            e.target.elements.option.value = '';
        }

    }
    
    render() {
        return (
            <div>
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form className='add-option' onSubmit={this.handleAddOption}>
                    <input className='add-option__input' type="text" name="option" />
                    <button className='button'>Add Option</button>
                </form>
            </div>
        )
    };
}