import React from "react";


function Uncontroled() {
    const inputRef = React.useRef();
    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputRef.current.value);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} placeholder="Uncontrolled"/>
            <button type="submit">Submit</button>
        </form>
    );

}

function Controled() {
    const [name, setName] = React.useState("");
    function handleSubmit(e) {
        e.preventDefault();
        console.log(name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Controlled"/>
            <button type="submit">Submit</button>
        </form>
    );
}

export {Uncontroled, Controled};
