import React, { Component } from 'react';
import { View } from 'react-native';

import Text from './Text';

class NutritionCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const { nutrition, unit, number } = this.props;

        return (
            <View style={{ height: 120, minWidth: 50, backgroundColor: '#E09D2E', borderRadius: 30, padding: 5, justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ height: 50, width: 50, borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
                    <Text>{number}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
                    <Text style={{ fontSize: 14 }}>{nutrition}</Text>
                    <Text style={{ fontSize: 12 }}>{unit}</Text>
                </View>
            </View>
        );
    }
}

export default NutritionCard;