import React from 'react';
import PropTypes from 'prop-types';

class InlineError extends React.Component {
    render() {
        const message = this.props.text;
        return (
            <span style={{ color: "#ae5856" }}>{message}</span>
        );
    }
}

InlineError.propTypes = {
    text: PropTypes.string.isRequired
}

export default InlineError;