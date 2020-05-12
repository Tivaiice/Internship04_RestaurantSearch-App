import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({ term, onTermChange, onTermSubmit  }) => {
    return (
        <View style={{height: 50,backgroundColor : '#F0EEEE',borderRadius: 5, margin: 15,flexDirection:'row',alignItems:'center'}}>
            <Feather name="search" size={30} color="#000000" style={{margin:10}}/>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                style={{flex:1, borderColor: '#000000'}}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

export default SearchBar;