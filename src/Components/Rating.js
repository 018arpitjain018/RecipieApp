import React, { Component } from 'react';
import { View, Image } from 'react-native';

import Text from './Text';

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const props = this.props;

        return (
            <View style={{ flexDirection: 'row', backgroundColor: '#E09D2E', minHeight: 25, minWidth: 30, paddingHorizontal: 10, borderRadius: 15, justifyContent: 'space-between', alignItems: 'center' }}>
                <Image style={{ width: 14, height: 14 }} source={require('../Assets/images/star/star.png')} />
                <Text style={{ fontSize: 14, marginLeft: 5 }}>{props.rate}</Text>
            </View>
        );
    }
}

export default Rating;