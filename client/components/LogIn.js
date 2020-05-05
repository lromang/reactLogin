import React, {Component} from 'react';
import AuthForm from "./AuthForm";
import {graphql} from "react-apollo";
import mutation from "../mutations/LogIn";
import query from '../queries/CurrentUser';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    login({email, password}) {
        this.props.mutate({
            variables: {
                email,
                password
            },
            refetchQueries: [{query}]
        })
    }

    render () {
        return (
            <div>
                <h3>Login</h3>
                <AuthForm onSubmit={this.login.bind(this)}/>
            </div>
        )
    }
}

export default graphql(mutation)(graphql(query)(Login));