import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {DisplayCounter} from "./components/Display";

function App() {

    let [state,setState] = useState<number>(0)
    const incButton = () => {
        setState(state + 1)
    }
    const resetState = () => {
        setState(0)
    }
    return (
        <div className="container">
            <div className={"header"}>
                <DisplayCounter state={state} />
            </div>
            <div className={"bottom"}>
                <Button onClick={incButton} title={"Inc"}/>
                <Button onClick={resetState} title={"Reset"}/>
            </div>

        </div>

    );
}

export default App;
