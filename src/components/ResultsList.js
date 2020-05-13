import React from 'react';
import {View, Text, FlatList ,TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDeail from './ResultsDetail';

const ResultsList = ({title, results, navigation}) => {

    if (!results.length) {
        return null;
    }

    return(
        <View>
            <Text style={{fontSize: 18, fontWeight: 'bold',marginLeft: 15}}>{title}</Text>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('ResultsShow', {id : item.id })}
                        >
                            <ResultsDeail result={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

export default withNavigation(ResultsList);