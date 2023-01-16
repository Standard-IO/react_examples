// first part

// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))
// console.log("hola")

// second part

// ReactDOM.render(
//     <ul><li>first element</li><li>second element</li></ul>,
//     document.getElementById("root"))

// Third part
// const root = document.getElementById('root')
// const title = document.createElement('h1')

// title.className = 'header'
// title.appendChild(document.createTextNode('algun valor'))
// root.appendChild(title)

const navbar = (
    <nav>
        <h1>My Web page</h1>
        <ul>
            <li>first elment</li>
            <li>second element</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById('root'))
