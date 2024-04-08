class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			count: 0,
			changed: ''
		}

		this.increment = this.increment.bind(this);
	}
	
	increment() {
		this.setState({ count: this.state.count + 1, changed: true }, () => {  });
	}

    render() {
        return (<div className="wrapper">
        <div className="count">Count: <span className="number">{this.state.count}</span></div>
        <button onClick={this.increment} className="plus">+</button>
        <div className="changed">{this.state.changed ? 'State has changed' : ''}</div>
    	</div>);
    }
}

  ReactDOM.createRoot(document.getElementById('root')).render(<App/>);