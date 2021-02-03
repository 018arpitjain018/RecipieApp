import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

import Text from '../Components/Text';
import FoodCard from '../Components/FoodCard';

import data from '../Constants/data';

const recipies = data.recipies

class Favroites extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ padding: 20 }}>
                    
                    {/* Header */}
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                            <Image style={{ width: 40, height: 40 }} source={require('../Assets/images/arrow/arrow-left.png')} />
                        </TouchableOpacity>
                        <View>
                            <Text style={{ fontSize: 27 }}>Your Favroites</Text>
                        </View>
                        <View>
                            <Image source={{ uri: 'https://i.pravatar.cc/30' }} style={{ height: 30, width: 30, borderRadius: 30 }} />
                        </View>
                    </View>

                    {/* New Recipies */}
                    <View style={{ paddingBottom: 70 }}>
                        <View style={{ width: '100%' }}>
                            <FlatList 
                                data={recipies}
                                renderItem={({ item, index }) => <FoodCard navigation={this.props.navigation} item={item} />}
                                keyExtractor={item => item.id + ''}
                                numColumns={2}
                                showsVerticalScrollIndicator={false}
                                columnWrapperStyle={styles.columnWrapperStyle}
                                contentContainerStyle={styles.contentContainerStyle}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    columnWrapperStyle: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between'
    },
    contentContainerStyle: {
        width: '100%'
    },
    flatListStyle: {
        marginBottom: '5%'
    }
})

export default Favroites;