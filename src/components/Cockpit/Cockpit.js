const Cockpit = (props) => {
    return (
        <div>
            <p>This is my App</p>
            <button onClick={props.showHandler}>Show</button>
            <button onClick={props.resetHandler}>Reset</button>
        </div>
    );
};
export default Cockpit;
