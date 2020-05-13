import React from 'react';
import { View , Text, Image } from 'react-native';

const ResultsDeail = ({ result }) => {
    return (
        <View style={{marginLeft: 15}}> 
            <Image 
                style={{ width: 250, height: 150,borderRadius: 5,borderRadius:10, marginBottom: 10}}
                source={{ uri: result.image_url }} 
            />
            <Text style={{fontSize: 16, fontWeight:'bold'}}>{result.name}}</Text>
            <Text>{result.rating} Stars, {result.review_count}</Text>
        </View>
    )
}

export default ResultsDeail;