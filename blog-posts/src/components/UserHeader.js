import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
    render() {
        const { user } = this.props;
        if (!user) { return null; }
        return <div className="header">{user.name}</div>
    }
}
const mapPropsToState = (state, ownProps) => {
    return { user: state.user.find(user => user.id === ownProps.userId) };
}
export default connect(mapPropsToState)(UserHeader);