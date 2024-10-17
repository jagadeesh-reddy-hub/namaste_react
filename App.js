
  // to create single tag with one div
// const heading = React.createElement("h1",{id : "heading"}/*here we will give attributes to the tag*/,"hello world from react");
// const root = ReactDOM.createRoot(document.getElementById('root'));// this root is the place where we do all dom manupulations here
// root.render(heading);//rendering is like appening in js

// to create nested tags in react using react dom


const parent = React.createElement(
    "div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"hi this is jagadeesh"),React.createElement("h2",{},"hi this is jagadeesh")]),React.createElement("div",{id:"child"},
            [React.createElement("h1",{},"hi this is jagadeesh"),React.createElement("h2",{},"hi this is jagadeesh")])]
    );//here if you want to create two child we will give it ny array
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
   
