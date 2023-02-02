import {Component} from "react";

import {commentsRequest} from "../../api/requests/commentsRequest";
import {Comments} from "../Comments/Comments";

export class CommentsComponent extends Component{


    constructor(props) {
        super(props);
        this.state = {comments: null}
    }

    componentDidMount() {
        commentsRequest.getAllComments().then(({data}) => this.setState({comments: [...data]}));
    }


    render() {
        return(
            <div>
                {this.state.comments && this.state.comments.map(value => <Comments key={value.id} item={value}/>)}
            </div>
        )
    }
}