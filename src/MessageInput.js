import React from "react";
import "./MessageInput.css";

export default function MessageInput() {
    return (
        <div className="MessageInput">
            <form>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Write something" />
                <button type="button" className="btn btn-primary">Send</button>
            </div>
            </form>
        </div>
    )
}