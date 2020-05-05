import React, {Component} from 'react';
import AuthForm from "./AuthForm";
import {graphql} from "react-apollo";
import mutation from "../mutations/SignUp";
import query from "../queries/CurrentUser";
import {hashHistory} from "react-router";

class SignUp extends Component {
    constructor(props) {
        super(props);
    }

    onSubmit({email, password}) {
        this.props.mutate({
            variables: {email, password},
            refetchQueries: [{query}]
        }).then(() => {
            hashHistory.push('/login')
        })

    }

    render() {
        return (
            <div>
                <AuthForm onSubmit={this.onSubmit.bind(this)}/>
            </div>
        )
    }
}

export default graphql(mutation)(graphql(query)(SignUp));