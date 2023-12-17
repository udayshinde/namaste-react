// const heading = React.createElement("h1", { id: "heading" }, "Hellow World from React!");

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);

const child1 = React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hey from h1 tag!"),
    React.createElement("h2", { id: "heading" }, "Hi from h2 tag!")
]
)

const child2 = React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hey from h1 tag!"),
    React.createElement("h2", { id: "heading" }, "Hi from h2 tag!")
]
)


const parent = React.createElement("div", { id: "parent" }, [child1, child2]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent, 1000);

