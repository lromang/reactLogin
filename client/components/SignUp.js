import React, {Component} from 'react';
import AuthForm from "./AuthForm";
import {graphql} from "react-apollo";
import mutation from "../mutations/SignUp";
import query from "../queries/CurrentUser";
import {hashHistory} from "react-router";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: []
        }
    }

    componentWillUpdate(nextProps) {
        if(!this.props.data.currentUser && nextProps.data.currentUser){
            hashHistory.push("/landing")
        }
    }

    onSubmit({email, password}) {
        this.props.mutate({
            variables: {email, password},
            refetchQueries: [{query}]
        }).catch(res => {
            const errors = res.graphQLErrors.map(e => e.message)
            this.setState({errors})
        })
    }

    render() {
        return (
            <div>
                <AuthForm
                    errors={this.state.errors}
                    onSubmit={this.onSubmit.bind(this)}/>
            </div>
        )
    }
}

export default graphql(mutation)(graphql(query)(SignUp));