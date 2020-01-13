import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {
    state = {
        options: [''],
        selectedOption: undefined
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if (options) {
                this.setState(() => ({ options: options }));
        }

        } catch (e) {
            // Do nothing at all (fall back to empty array
        }

    }

    // this only prints to console if the options array changed
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('componentDidUpdate!')
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    //handleDeleteOptions (passing in function as props)
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    // This gets passed to Options and THEN to Option (multiple layers)
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => optionToRemove !== option) 
        }))
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined}))
    }

    //handlePick (passing in function as props)
    handlePick= () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState((prevState) => ({
            selectedOption: option})
        );
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({ 
            options: prevState.options.concat(option) 
        }))
    }

    render() {
        const title = '⌚️ BrowniTimes'
        const subtitle = 'What should we do with Browni today?';
        
        return (
            <div>
                <Header subtitle={subtitle} title={title}/>
                <div className='container'>
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className='widget'>
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                            hasOptions={this.state.options.length > 0}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    }
}