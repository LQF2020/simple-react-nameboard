import "./Person.css";
const Person = (props) => {
    return (
        <div className="person">
            <div>
                {props.name} is {props.age} years old.
            </div>

            <input
                type="text"
                onChange={props.changed}
                value={props.name}
            ></input>
            <button onClick={props.clicked}>x</button>
        </div>
    );
};
export default Person;
