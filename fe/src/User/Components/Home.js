import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        userInfo: state.user.info,
    };
}

class Home extends Component {
    render() {
        const { userInfo } = this.props;
        return (
            <div>
                User Main Page 
                {userInfo && userInfo.token ? <div>Bienvenido {userInfo.name} {userInfo.lastname}</div> : <div>Usted debe estar logueado para ver esta pagina</div>}    
            </div>
        );
    } 
}

export default connect(
    mapStateToProps,
)(Home);