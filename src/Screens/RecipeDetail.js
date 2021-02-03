import React, { Component } from 'react';
import { SafeAreaView, View, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';

import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';

import Text from '../Components/Text';
import Rating from '../Components/Rating';
import NutritionCard from '../Components/NutritionCard';

const { width, height } = Dimensions.get('window');

class RecipeDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            recipe: {}
        };
    }

    componentDidMount() {
        const recipe = this.props.navigation.getParam('recipe', {})
        this.setState({ recipe: recipe })
    }

    render() {
        const recipe = this.state.recipe

        return (
            <ImageHeaderScrollView
                maxHeight={height * 0.30}
                minHeight={100}
                headerImage={recipe.image}
                renderFixedForeground={() => (
                    <SafeAreaView style={{ height: height * 0.30 }} >
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10 }}>
                            <TouchableOpacity style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 40, backgroundColor: '#E09D2E' }} onPress={() => this.props.navigation.pop()}>
                                <Image style={{ width: 40, height: 40 }} source={require('../Assets/images/arrow/arrow-left.png')} />
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                )}
                >
                <View style={{ flex: 1, minHeight: height - 100, padding: 20 }}>
                    <TriggeringView onHide={() => console.log("text hidden")}>
                        
                        {/* Recipe Intro */}
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View>
                                <Text heading={true}>{recipe.name}</Text>
                                <Text style={{ fontSize: 14, color: '#7A87A5' }}>{recipe.type}</Text>
                            </View>
                            <Rating rate={recipe.rating} />
                        </View>

                        {/* Nutritions */}
                        <View style={{ marginTop: 50 }}>
                            <Text style={{ fontSize: 16, color: '#7A87A5' }}>Nutrition Facts</Text>

                            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-evenly' }}>
                                <NutritionCard nutrition="Calories" unit="Kcal" number="347" />
                                <NutritionCard nutrition="Carbs" unit="g" number="30.4" />
                                <NutritionCard nutrition="Calories" unit="g" number="4.6" />
                                <NutritionCard nutrition="Calories" unit="g" number="8.6" />
                            </View>
                        </View>

                        {/* Incredients */}
                        <View style={{ marginTop: 50 }}>
                            <Text style={{ fontSize: 16, color: '#7A87A5' }}>Ingredents</Text>

                            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-evenly' }}>
                                <NutritionCard nutrition="Calories" unit="Kcal" number="347" />
                                <NutritionCard nutrition="Carbs" unit="g" number="30.4" />
                                <NutritionCard nutrition="Calories" unit="g" number="4.6" />
                                <NutritionCard nutrition="Calories" unit="g" number="8.6" />
                            </View>
                        </View>
                    </TriggeringView>
                </View>
            </ImageHeaderScrollView>
        );
    }
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
})

export default RecipeDetail;