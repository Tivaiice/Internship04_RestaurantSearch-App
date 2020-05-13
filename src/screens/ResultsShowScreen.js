import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, FlatList, Image } from 'react-native'
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null); 
    const id =  navigation.getParam('id');

    console.log('result', result) 

    const getResult = async (id) => {
        const respounse = await yelp.get(`/${id}`);
        setResult(respounse.data);
    };

    useEffect(() => {
       getResult(id);
    }, [])

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text> {result.name}} </Text> 
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo }
                renderItem={({item}) => {
                    return (
                        <Image 
                            source={{uri: item}} 
                            style={{height: 200,width: 300}}
                        />
                    )
                }}
            />
        </View>
    )
}


export default ResultsShowScreen;