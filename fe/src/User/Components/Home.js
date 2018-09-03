import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Home extends Component {
    render() {
        return (
            <div>
                User Main Page     
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Home);