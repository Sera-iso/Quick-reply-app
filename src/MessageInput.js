import React, { useState } from "react";
import MessageDisplay from "./MessageDisplay";
//import { createClient } from '@supabase/supabase-js'
import "./MessageInput.css";


//const REST_URL = 'http://localhost:3000';
//const postgrest = new PostgrestClient(REST_URL);

export default function MessageInput() {
    const [text, setText] = useState("");
    function handleSubmit(event) {
        event.prevent.default();
        /*const supabase = createClient('https://wrcjrjorncqjgbiytslr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxMzI4OTEwMSwiZXhwIjoxOTI4ODY1MTAxfQ.gKbsvpOSRKRit97s722urmfiOtbuZtA8rabHE8_NWNk');
        supabase
            .from('stories')
            .insert([
                { parts: JSON.stringify([]) }
            ]).then(function()) */
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