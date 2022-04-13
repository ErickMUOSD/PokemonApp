import React, {useState} from "react";
import SearchBar from 'react-native-platform-searchbar';
import {TextInput, View} from "react-native";

export default function SearchPokemon(props) {

    const {data} = props
    const [query, setQuery] = useState('')
    const [result, setResult] = useState(null)

    const handleSearch = text => {
        const formattedQuery = text.toLowerCase();
        setResult(formattedQuery)
        // const filteredData = filter(data, user => {
        //     return contains(user, formattedQuery);
        // });
        // setResult(filteredData);
        // setQuery(text);
    };

    const contains = ({name}, query) => {
        const {first, last} = name;

        if (first.includes(query) || last.includes(query) || email.includes(query)) {
            return true;
        }

        return false;
    };
    return (
        <View
            style={{
                backgroundColor: '#fff',
                padding: 10,
                marginVertical: 10,
                borderRadius: 20
            }}
        >
            <TextInput
                autoFocus={true}
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                value={query}
                onChangeText={(queryText) => handleSearch(queryText)}
                placeholder="Search pokemon.."
                style={{backgroundColor: '#fff', padding: 2, height: 25}}

            />
        </View>
    );

}