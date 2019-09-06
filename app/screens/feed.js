import React from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';

class feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo_feed : [0, 1, 2, 3, 4],
            refresh : false
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{
                    backgroundColor: 'white',
                    paddingTop: 30,
                    height: 70,
                    borderColor: 'lightgrey',
                    borderBottomWidth: 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 'auto'
                }}>
                    <Text>Feed</Text>
                </View>

                <FlatList
                    refreshing = {this.state.refresh}
                    onRefresh = {this.loadNew}
                    data = {this.state.photo_feed}
                    keyExtractor = {(item, index) => {index.toString()}}
                    style = {{backgroundColor : 'lightgray', flex : 1}}
                    renderItem = {({item, index}) => (
                        <View key = {index}>
                            <View>
                                <Text> Posted at </Text>
                                <Text> Uploader </Text>
                            </View>
                            <View>
                                <Image source={{uri : 'https://source.unsplash.com/random/500x' + Math.floor(Math.random() * 800) + 500}}
                                       style={{width : '100%', resizeMode : 'cover', height : 300}}/>
                            </View>
                            <View>
                                <Text> Post Tag </Text>
                                <Text> Comments </Text>
                            </View>
                        </View>
                    )}
                />



            </View>
        )
    }

    loadNew = () => {
        this.setState({
            refresh : true
        });
        this.setState({
            photo_feed : [5, 6, 7, 8, 9],
            refresh : false
        });
    }
}

export default feed;
