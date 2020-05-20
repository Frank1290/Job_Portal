import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Header extends Component {
    render() {
        return (
            <div className="wrapper">
                <h2 className="heading">
                    WELCOME TO JOB PORTAL
                </h2>
                <button
                    style={{
                        padding: "1.25rem 2.25rem",
                        fontSize: "0.85rem",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        border: "none",
                        borderRadius: "10rem",
                        color: "#fff",
                        backgroundColor: "#f4623a",
                        marginRight: "2%"
                    }}
                >
                    ADD Job
                </button>

                <button
                    style={{
                        padding: "1.25rem 2.25rem",
                        fontSize: "0.85rem",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        border: "none",
                        borderRadius: "10rem",
                        color: "black",
                        backgroundColor: "white"
                    }}
                >
                    Search Job
                </button>
            </div>
        );
    }
}
