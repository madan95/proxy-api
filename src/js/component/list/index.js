import React, {useReducer} from "react"
import "./index.scss"

export default class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        console.log('List of get state')
        console.log(this.state)
        let url = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/list`
        let result = fetch(url)
        .then(res => res.json())
        .then(data => {
            this.setState({list: data})
            console.log(data)
            console.log('Data of data')
        });
        console.log(this.state)
        console.log('Result of list')
        console.log(result)
    }

    render(){
        console.log('cani')
        console.log(this.state)
        return(
            <>
            <div>
                <h3>List of url used</h3>
                <ul>
                    {this.state.list.map(el => {
                        console.log(el);
                        return <li key={el.id} >{el.url}</li>
                    })}
                </ul>
            </div>
            </>
        )
    }
}
