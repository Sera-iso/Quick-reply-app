import React, {useState} from "react";
import MessageDisplay from "./MessageDisplay";
//import { PostgrestClient } from '@supabase/postgrest-js';
import "./MessageInput.css";


//const REST_URL = 'http://localhost:3000';
//const postgrest = new PostgrestClient(REST_URL);

export default function MessageInput() {
    const [text, setText] = useState("");
    function handleSubmit(event) {
        event.prevent.default();
    }
    function displayText(event) {
        setText(event.target.value);
    }
    return (
        <div>
        <div className="MessageInput">
            <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Write something" onChange={displayText} />
                <button type="submit" className="btn btn-primary">Send</button>
            </div>
            </form>
        </div>
        <MessageDisplay content={text} />
        </div>
    )
}