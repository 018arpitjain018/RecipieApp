import React, { Component } from 'react';
import { View, TouchableOpacity, FlatList, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import Text from '../Components/Text';
import FoodCard from '../Components/FoodCard';
import FoodAvatar from '../Components/FoodAvatar';

import data from '../Constants/data';

const recipies = data.recipies.slice(0, 4)

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={{ padding: 20 }}>
                    
                    {/* Header */}
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                            <Image source={require('../Assets/images/menu/menu.png')} />
                        </TouchableOpacity>
                        <View>
                            <Text style={{ fontSize: 27 }}>Explore</Text>
                        </View>
                        <View>
                            <Image source={{ uri: 'https://i.pravatar.cc/30' }} style={{ height: 30, width: 30, borderRadius: 30 }} />
                        </View>
                    </View>

                    {/* New Recipies */}
                    <View style={{ marginVertical: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>New Recipies</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('NewRecipies')} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, color: '#7A87A5' }}>See all</Text>
                                <Image style={{ tintColor: '#7A87A5' }} source={require('../Assets/images/arrow/arrow-right.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '100%' }}>
                            <FlatList 
                                data={recipies}
                                renderItem={({ item, index }) => <FoodCard navigation={this.props.navigation} item={item} />}
                                keyExtractor={item => item.id + ''}
                                numColumns={2}
                                columnWrapperStyle={styles.columnWrapperStyle}
                                contentContainerStyle={styles.contentContainerStyle}
                                style={styles.flatListStyle}
                            />
                        </View>
                    </View>

                    {/* Favroitess */}
                    <View style={{ marginVertical: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>Favourites</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Favroites')} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, color: '#7A87A5' }}>See all</Text>
                                <Image style={{ tintColor: '#7A87A5' }} source={require('../Assets/images/arrow/arrow-right.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '100%' }}>
                            <FlatList 
                                horizontal={true}
                                data={[1, 2, 3, 4]}
                                renderItem={({ item, index }) => <FoodAvatar item={item} />}
                                keyExtractor={item => item + ''}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                </ScrollView>
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
        flexDirection: 'row',
        width: '100%'
    }
})

export default Home;