import React, {Component} from 'react';
import {graphql} from "react-apollo";
import query from "../queries/CurrentUser";
import {Link} from "react-router";
import mutation from "../mutations/LogOut";


class Header extends Component {

    logout() {
        this.props.mutate({
            refetchQueries: [{ query }]
        })
    }

    renderButtons(){
        const { loading, currentUser } = this.props.data;

        if (loading){
            return <div/>;
        }
        if (currentUser){
            return (
                <div>
                    <li>
                        <a onClick={() => this.logout()}>
                            Logout
                        </a>
                    </li>
                </div>);
        } else {
            return (
                <div>
                    <li>
                        <Link to="/signup">
                            Signup
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </div>
            )
        }
    }

    render(){
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo left">
                        Home
                    </Link>
                    <ul className="right">
                        {this.renderButtons()}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default graphql(mutation)(graphql(query)(Header));