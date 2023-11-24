import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement("h1", { id: "title", key: "heading1" }, "Hi there!!");
// React element = Object => HTML (DOM)

const secondHeading = React.createElement(
    "h2",
    {key: "heading2"},
    "Hi there!!! We have fired up Parcel!!! Yay!!"
);

const container = React.createElement(
    "div",
    { style: { backgroundColor: "red" } },
    [heading, secondHeading]
);

// A React component
const Title = () => (
    <h1 id="h1" key="h1">
      Namaste React
    </h1>
  );
  
  // React components
  // - functional Component - NEW
  
  const HeaderComponent = () => {
    return (
      <div>
        <Title />
        {/** component composition --> Title component inside HeaderComponent component */}
        {/* Can also be written as { Title() } */}
        <h1> Namaste React functional component </h1>
        <h2>This is a h2 tag </h2>
      </div>
    );
  };

root.render(<HeaderComponent />);
