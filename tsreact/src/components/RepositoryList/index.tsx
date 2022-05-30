import React, {Component} from "react";

import { ApplicationState } from "../../store";
import { connect } from "react-redux";


export default class RepositoryList extends Component{

    componentDidMount(){};

    render(){
 
        return(
            <ul>
              
            </ul>

        );
    }
}

const mapStateToProps = (state:ApplicationState) => ({
});

export default connect(mapStateToProps)(RepositoryList);