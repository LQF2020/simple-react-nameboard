import react from "react";
import "./App.css";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";

class App extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPerson: false,
            persons: [
                { name: "Jenny", age: "21" },
                { name: "Hugo", age: "22" },
                { name: "Gogo", age: "21" },
            ],
        };
        this.nameChangedHandler = this.nameChangedHandler.bind(this);
        this.deletePersonHandler = this.deletePersonHandler.bind(this);
        this.showPersonHandler = this.showPersonHandler.bind(this);
        this.resetPersonHandler = this.resetPersonHandler.bind(this);
    }
    nameChangedHandler(event, index) {
        const personChanged = this.state.persons[index];
        personChanged.name = event.target.value;
        const persons = this.state.persons.slice();
        persons[index] = personChanged;
        this.setState({
            persons,
        });
    }
    deletePersonHandler(index) {
        let persons = this.state.persons.slice();
        persons.splice(index, 1);
        this.setState({
            persons,
        });
    }
    showPersonHandler() {
        this.setState({ showPerson: !this.state.showPerson });
    }
    resetPersonHandler() {
        this.setState({
            persons: [
                { name: "Jenny", age: "21" },
                { name: "Hugo", age: "22" },
                { name: "Gogo", age: "21" },
            ],
        });
    }

    render() {
        return (
            <div className="app">
                <Cockpit
                    showHandler={this.showPersonHandler}
                    resetHandler={this.resetPersonHandler}
                />
                <Persons
                    showPerson={this.state.showPerson}
                    persons={this.state.persons}
                    changed={this.nameChangedHandler}
                    clicked={this.deletePersonHandler}
                />
            </div>
        );
    }
}

export default App;
