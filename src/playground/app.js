class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: ['']
        }
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
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    // This gets passed to Options and THEN to Option (multiple layers)
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => optionToRemove !== option) 
        }))
    }

    //handlePick (passing in function as props)
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
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
        const title = 'Indecision App'
        const subtitle = 'Put your life in the hands of a computer';
        
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

// IndecisionApp.defaultProps = {
//     options: []
// };


const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
        return (
            <div>
                <button 
                    onClick={props.handlePick}
                    disabled={!props.hasOptions}
                    >
                        What should I do?
                </button>
            </div>
        )
    }


const Options = (props) => {
        return (
            <div>
                <button onClick={props.handleDeleteOptions}>Remove All</button>
                {props.options.length === 0 && <p>Please add an option to get started</p>}
                {props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
                }
            </div>
        );
};

const Option = (props)=> {
        return (
            <div>
                {props.optionText}
                <button 
                    onClick={(e) => {
                        props.handleDeleteOption(props.optionText)
                    }}
                    >
                     Remove
                        </button>
            </div>
        )
}


class AddOption extends React.Component{
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        //adding state here too
        this.state = {
            error: undefined
        }
    }
    // this is a separate handleAddOption than in props
     handleAddOption(e) {
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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));