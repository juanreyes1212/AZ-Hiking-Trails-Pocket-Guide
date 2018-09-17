import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

export default class TrailList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null
        }
    }

    componentDidMount() {
        const URL = 'https://firestore.googleapis.com/v1beta1/projects/rn-code-challenge/databases/(default)/documents/parks';
        return fetch(URL)
            .then((response) => response.json())
            .then((responseJson) => {
                ;
                this.setState({
                    isLoading: false,
                    dataSource: Array.from(responseJson.documents).sort((a, b) => a.fields.name.stringValue.localeCompare(b.fields.name.stringValue)),
                });
            })
            .catch((error) => {
                console.error('****** THE ERROR IS==>' + error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (

            <View style={styles.main}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', { item: item.fields, trailName: item.fields.name.stringValue })}><View style={[styles.listItem, { flex: 1, flexDirection: 'row' }]}>

                        <Image style={{ width: 50, height: 50 }} source={{ uri: item.fields.image_url.stringValue }} /><Text style={styles.listItemText}>{item.fields.name.stringValue}</Text>
                    </View>
                    </TouchableOpacity>
                    }
                    keyExtractor={({ name }, index) => name}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    listItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E3E3E4',
        alignItems: 'center'
    },
    listItemText: {
        paddingLeft: 10,
    }
})