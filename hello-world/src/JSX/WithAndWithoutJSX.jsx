import React from "react";

// With JSX - clean & redable
export const WithJSX = () => 
{
    return (
        <div id="card">
            <h2>Welcome JSX</h2>
            <p>
                This is <span id="highlight">paragarph</span> with text.
            </p>
        </div>
    );
};

// Without JSX its complex to read & write
export const WithoutJSX = () => 
{
    return(
        React.createElement("div",
            { id: "card" },
            React.createElement("h2", null, "Welcome without JSX"),
            React.createElement("p", null, "This is ",
                React.createElement("span", { id: "highlight" }, "paragraph"),
                "with text without JSX."
            ),
            React.createElement("button", null, "Click me")
        )
    );
};