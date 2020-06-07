class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        // this is the default state object
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count')
            const count = parseInt(stringCount)
            if (count) {
                this.setState(() => ({count: count}))
            }

        } catch (e) {
            // do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            // setItem uses a key value store so `count` could be anything
            localStorage.setItem('count', this.state.count)
        }
        
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    handleReset() {
       this.setState(() => {
        return {
            count: 0
        }
       });
    }
    
    
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))