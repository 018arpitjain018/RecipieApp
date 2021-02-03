import React, { Component } from 'react';
import { View, Image, Dimensions, TouchableWithoutFeedback, Touchable } from 'react-native';

import Text from './Text';
import Rating from './Rating';

const { width, height } = Dimensions.get('window')

class FoodCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const item = this.props.item;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('RecipeDetail', { recipe: item })}>
                <View style={{ width: width * 0.43, marginTop: 20 }}>
                    <Image 
                        resizeMode="cover" 
                        source={item.image}
                        style={{ width: '100%', height: 200, borderRadius: 20 }} 
                    />
                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        paddingHorizontal: 10,
                        marginTop: 10,
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Rating rate={item.rating} />
                        <Text style={{ fontSize: 14 }}>{item.timeToCook}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default FoodCard;

