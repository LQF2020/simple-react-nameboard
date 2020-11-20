import Person from "./Person/Person";
const Persons = (props) => {
    let persons = null;
    if (props.showPerson) {
        persons = props.persons.map((p, index) => {
            return (
                <Person
                    name={p.name}
                    age={p.age}
                    changed={(event) => props.changed(event, index)}
                    clicked={() => props.clicked(index)}
                    key={index}
                />
            );
        });
    }
    return <div>{persons}</div>;
};
export default Persons;
