import {Component} from "react";

export class Comments extends Component{

    constructor(props) {
        super(props);
        this.state = null
    }


    render() {
        return(
            <div>
                <div>postId: {this.props.item.postId}</div>
                <div>id: {this.props.item.id}</div>
                <div>name: {this.props.item.name}</div>
                <div>email: {this.props.item.email}</div>
                <div>body: {this.props.item.body}</div>
                <hr/>
            </div>
        )
    }

}