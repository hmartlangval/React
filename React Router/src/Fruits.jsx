import React from 'react'
import { Route, Link, useParams, useRouteMatch} from 'react-router-dom'


export const Fruit = () => {

    const {name} = useParams();
    //console.log(`You are erquestiong for furit name ${name}`)

    if(name=="apples")
        return <Apples/>
    else if(name=="mangoes")
        return <Mangoes />
    return <Bananas />
}

export const Mangoes = (props) => {
    const {url, path} = useRouteMatch();

    console.log(useRouteMatch());
    return <p>I have 4 mangoes</p>
}

export const Apples = () => {
    return <p>I have 1 Apple</p>
}

export const Bananas = () => {
    return <p>The monkeys have taken all my bananas :(</p>
}

export const Fruits = () =>{

    const {url, path} = useRouteMatch();
    // console.log(`fruits url: ${url}`)
    // console.log(`fruits path: ${path}`)

    return (
        <div>
            <h4>Welcome to Fruits, click one to know how much fruits i have with me</h4>
            <ul>
                <li>
                    <Link to={`${url}/mangoes`}>Mangoes</Link></li>
                <li>
                    <Link to={`${url}/apples`}>Apples</Link></li>
                <li>
                    <Link to={`${url}/bananas`}>Bananas</Link></li>
            </ul>

            <Route path={`${url}/:name`}><Fruit /></Route>
        </div>
    )
}
