import React from "react";
import ReactDom from "react-dom";

//React Element
const root = ReactDom.createRoot(document.getElementById("root"));
const element = <h1 id="heading">Heading</h1>;

root.render(element);

// React Component
const root2 = ReactDom.createRoot(document.getElementById("root2"));
const NestedCompoent = () => <h1>heading</h1>;
const FistComponent = () => (
  <div>
    {element}
    {NestedCompoent()}
    <NestedCompoent />
    FirstComonet
  </div>
);

root2.render(<FistComponent />);

const assignment3 = ReactDom.createRoot(document.getElementById("assignment3"));

const elementAssignment3 = React.createElement("div", { className: "title" }, [
  React.createElement("h1", { id: "h1" }, "First Title"),
  React.createElement("h2", { id: "h2" }, "Second Title"),
  React.createElement("h3", { id: "h3" }, "Third Title"),
]);

const elementAssignment3Jsx = (
  <div className="title">
    <h1 id="h1">First Title</h1>
    <h2 id="h2">Second Title</h2>
    <h3 id="h3">Third Title</h3>
  </div>
);

const Assignment3Component = () => {
  return (
    <div>
      {elementAssignment3}
      {elementAssignment3Jsx}
    </div>
  );
};

assignment3.render(<Assignment3Component />);
