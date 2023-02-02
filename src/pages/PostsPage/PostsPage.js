import {Component} from "react";

import {PostsComponent} from "../../components";

export class PostsPage extends Component{

    constructor(props) {
        super(props);
        this.state = null
    }

    render() {
        return(
            <div>
                <PostsComponent/>
            </div>
        )
    }
}