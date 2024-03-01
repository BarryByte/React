/**
 * Renders a custom React element into a container.
 * reactElement - The custom React element to render.
 * container - The container element to render the React element into.
 * 
 */
function customRender(reactElement, container){
    //version_1
    // const domEle = document.createElement(reactElement.type)
    // domEle.innerHTML = reactElement.children
    // domEle.setAttribute('href',reactElement.props.href);
    // domEle.setAttribute('target', reactElement.props.target)

    // container.appendChild(domEle);

    //version_2
    
    const domEle = document.createElement(reactElement.type);
    domEle.innerHTML = reactElement.children;
    
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domEle.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domEle);
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
    
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);