const divele=React.createElement("div",{id: "parent"},[
React.createElement("div",{id: "child"},[
     React.createElement("h5",{},"I am inside child 1"),
     React.createElement("h2",{},"I am inside child 1")
    ]),
     React.createElement("div",{id: "child2"},[
        React.createElement("h5",{},"I am inside child 2"),
        React.createElement("h2",{},"I am inside child 2")
    ])
])


const rootel=ReactDOM.createRoot(document.getElementById("root"))
rootel.render(divele)