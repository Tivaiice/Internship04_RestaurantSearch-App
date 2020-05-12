import React from 'react';
import {View, Text } from 'react-native';

const ResultsList = ({title, results}) => {
    return(
        <View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
            <Text> Results : {results.lenght} </Text>
        </View>
    );
};

export default ResultsList;