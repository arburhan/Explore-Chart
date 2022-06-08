import { useState } from "react";

export default function TestData() {
    const [name, setName] = useState("");
    console.log(name)
    const change = (e) => {
        setName(e.target.value);
    };
    return (
        <>
            {name}
            <br />
            <br />
            <select onChange={(e) => change(e)}>
                <option value="weeks">Weekly</option>
                <option value="months">Monthly</option>
                <option value="years">Yearly</option>
            </select>
        </>
    );
}