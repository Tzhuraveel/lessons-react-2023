import {Component} from "react";

import {CommentsComponent} from "../../components";

export class CommentsPage extends Component{

    constructor(props) {
        super(props);
        this.state = null
    }

    render() {
        return(
            <div>
                <CommentsComponent/>
            </div>
        )
    }
}