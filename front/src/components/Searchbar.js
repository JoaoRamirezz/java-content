import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const SearchBarComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styleSearch.all}
    />
  );
};

const styleSearch = StyleSheet.create({
    all:{
        display: 'flex',
    }
})

export default SearchBarComponent;
