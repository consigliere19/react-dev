const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement("h1", { id: "title" }, "Hi there!!");
const secondHeading = React.createElement(
    "h2",
    {},
    "Hi there!!!"
);
const container = React.createElement(
    "div",
    { style: { backgroundColor: "red" } },
    [heading, secondHeading]
);
root.render(container);
