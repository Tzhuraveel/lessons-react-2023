import {Component} from "react";


export class Posts extends Component{



    constructor(props) {
        super(props);
        this.state = null
    }


    render() {
        return(
            <div>
                <div>userId: {this.props.item.userId}</div>
                <div>id: {this.props.item.id}</div>
                <div>title: {this.props.item.title}</div>
                <hr/>
            </div>
        )
    }

}