import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

    // 1 GET DEFAULT STATE
    constructor(props) {
        super(props);

        // 2 SET INITIAL STATE
        this.state = {
            title: 'Pulp fiction in cinema',
            body: 'some dummy text'
        }
    }

    componentWillReceiveProps() {
        console.log('Before receiving props again')
    }

    // 3 BEFORE GETS CREATED
    componentWillMount() {
        console.log('Before component gets created')
    }

    componentWillUpdate() {
        console.log('Before Update')
    }

    componentDidUpdate() {
        console.log('After Update')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.state.title)
        console.log(nextState.title)
        return true
    }

    // 4 RENDER JSX
    render() {
        return (
            <div>
                <h4>{this.state.title}</h4>
                <br />
                <div>{this.state.body}</div>
                <div onClick={()=> this.setState({title:'somthing else'})}>CLICK TO CHANGE</div>
            </div>
        )
    }

    // 5 AFTER A COMPONENT IS MOUNTED
    componentDidMount() {
        console.log('After a component is mounted')
        document.querySelector('h4').style.color = 'red'
    }

    componentWillUnmount() {
        console.log('Unmount')
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
