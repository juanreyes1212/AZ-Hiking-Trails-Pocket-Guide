import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class TrailListItem extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('trailName', 'A Nested Details Screen'),
        };
    };

    render() {
        return (
            <View>
                <ImageBackground
                    style={{ width: '100%', height: '100%' }}
                    source={{ uri: this.props.navigation.state.params.item.image_url.stringValue }}
                >
                    <View style={styles.infoBox}>
                        <ScrollView showsHorizontalScrollIndicator={false}>
                            <Text style={styles.infoBoxText}>{this.props.navigation.state.params.item.remarks.stringValue}</Text>
                            <Text style={styles.infoBoxText}>Acres: {parseInt(this.props.navigation.state.params.item.acres.stringValue, (10)).toLocaleString()}</Text>
                            <Text style={styles.infoBoxText}>Elevation: {parseInt(this.props.navigation.state.params.item.elevation.stringValue, (10)).toLocaleString()}</Text>
                            <Text style={styles.infoBoxText}>County: {this.props.navigation.state.params.item.county.stringValue}</Text>
                            <Text style={styles.infoBoxText}>Established: {this.props.navigation.state.params.item.established.stringValue}</Text>
                            <Text style={[styles.infoBoxText, { paddingBottom: 15 }]}>More Info: <Text style={{ color: 'blue' }}
                                onPress={() => Linking.openURL(this.props.navigation.state.params.item.url.stringValue)}>
                                {this.props.navigation.state.params.item.url.stringValue}
                            </Text>
                            </Text>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    infoBox: {
        flex: 1,
        margin: 25,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'rgba(244, 244, 244, 0.6)',
    },
    infoBoxText: {
        paddingTop: 20,
    }
})