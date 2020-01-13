console.log(`app.js is running!`);

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};


const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.optionInput.value;

    if (option) {
        app.options.push(option);
        // e.target.elements.option.value = '';
        renderApp();
    }
    

}

const removeAll = (e) => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}


const numbers = [55, 101, 1000];

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? `Here are your options` : `No Options`}</p>
        {/* <p>{app.options.length}</p> */}
        <button onClick={removeAll}>Remove All</button>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
{/* 
        {
            numbers.map((number) => {
                return <p key={number}>Number: {number}</p>
            })
        } */}

        <ol>
        {
            app.options.map((option) => {
                return <li key={option}>{option}</li>
            })
        }
        </ol>


        <form onSubmit={onFormSubmit}>
            <input type="text" name="optionInput" />
            <button>Add Option</button>
        </form>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

// Second Render
const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? `Here are your options` : `No Options`}</p>
            {/* <p>{app.options.length}</p> */}
            <ol>
        {
            app.options.map((option) => {
                return <li key={option}>{option}</li>
            })
        }
        </ol>
            <button onClick={removeAll}>Remove All</button>
            <button onClick={onMakeDecision}>What should I do?</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="optionInput" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

