import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

const SearchScreen = props => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  
  const filterResultsByPrice = (price) => {
    // price == '$' || '$$' || '$$$'
    return results.filter(results => {
        return results.price === price;
    }); 
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/> 
      <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier"/> 
      <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/> 
       
    </View>
  );
};

export default SearchScreen;
