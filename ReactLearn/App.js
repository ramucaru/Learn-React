const root = ReactDOM.createRoot(document.getElementById('root'));
const title = React.createElement("h1", { id: "heading" }, "it is not ending it is starting here");
root.render(title)

/* 
<div id="parent">
   <div id="child1">
      <h1 id="title1">Enter name here </h1>
   </div>
   <div id="child2">
      <h1 id="title2">Plese ENter your Name</h1>
   </div>
</div>
*/
// here code of core react for above DOM
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", { id: "title1" }, "Enter name here"),
        React.createElement("h2", { id: "title1.2" }, "Enter subname here")]
    ),
    React.createElement("div", { id: "child2" },
        React.createElement("h1", { id: "title2" }, "Plese ENter your Name")
    )]
)



root2.render(parent);
console.log(title);

const root3 = ReactDOM.createRoot(document.getElementById("root3"));
const secondParent = React.createElement("div", { id: "parent2" },
    [
        "Its just message for checking first", React.createElement("div", { id: "firstChildforparent" }, "now its just show message First Tag"),
        React.createElement("div", { id: "secondChildforparent" }, "now its just show message Second Tag")]
);

root3.render(secondParent)