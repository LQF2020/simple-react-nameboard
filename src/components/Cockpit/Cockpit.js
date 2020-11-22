const Cockpit = (props) => {
    return (
        <div>
            <p>This is my App</p>
            <button onClick={props.showHandler}>ToggleDisplay</button>
            <button onClick={props.resetHandler}>Reset</button>
        </div>
    );
};
export default Cockpit;
