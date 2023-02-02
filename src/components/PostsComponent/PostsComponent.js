import {Component} from "react";
import {postsRequest} from "../../api/requests/postsRequest";
import {Posts} from "../Posts/Posts";

export class PostsComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {posts: null}
    }

    componentDidMount() {
         postsRequest.getAllPosts().then(({data}) => this.setState({posts: [...data]}))
    }




    render() {
        return(
            <div>
                {this.state.posts && this.state.posts.map(value => <Posts key={value.id} item={value}/>)}}
            </div>

        )
    }
}