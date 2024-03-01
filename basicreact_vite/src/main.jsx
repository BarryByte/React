import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return(
        <div>
            <h1>Custommm App!</h1>
        </div>
    )
}

//each framework expect their default syntax.
//vite also expects us to write in this format:
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)
//not like this
/*
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
    
}
*/
const anotherUser = "chai aur react"
const reactElement = React.createElement(
    'af', //->1st parameter -> tag
    {href: 'https://google.com', target: '_blank'},
    'click me to visit googlee',
    anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
 
   reactElement
 
)
