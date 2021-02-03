import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Image } from 'react-native';

import Text from './Text';

class FoodAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <TouchableWithoutFeedback>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: 20, marginTop: 10 }}>
                    <Image 
                        source={{ uri: 'https://picsum.photos/80' }} 
                        style={{ width: 80, height: 80, borderRadius: 80 }}
                    />
                    <Text style={{ marginVertical: 10 }}>Pizza</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default FoodAvatar;