import React, { Component } from 'react';
import { Text } from 'react-native';

class AppText extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        const props = this.props;
        const fontFamily = props.heading ? 'Gilroy-ExtraBold' : 'Gilroy-SemiBold'
        const fontSize = props.heading ? 24 : 18

        return (
            <Text style={[{ fontFamily: fontFamily, fontSize: fontSize }, props.style]}>{this.props.children}</Text>
        );
    }
}

AppText.defaultProps = {
    style: {}
}

export default AppText;