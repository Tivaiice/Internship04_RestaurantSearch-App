import React, { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import SearchBar from './SearchBar'

const SearchScreen = () => {

    const [term, setTerm] = useState('')
    return (
        <View style={{flex: 1,backgroundColor :'#FFFFFF'}}>
            <SearchBar 
                term={term} 
                onTermChange={(newTerm) => setTerm(newTerm)} 
                onTermSubmit={() => console.log('term is submitted')}
            />
            <Text>Screen</Text>
            <Text>{term}</Text>
        </View>
    )
}

export default SearchScreen;