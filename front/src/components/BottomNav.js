import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Account from '../pages/Account';
import Search from '../pages/Search';
import Discovery from '../pages/Discovery';
import { StyleSheet } from 'react-native';

const SearchRoute = () => <Search/>;

const DiscoveryRoute = () => <Discovery/>;

const AccountRoute = ({route,params}) => <Account/>;

const BottomNav = ({route,params}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'discovery', title: 'Discovery', focusedIcon: 'earth' },
    { key: 'search', title: 'Search', focusedIcon: 'magnify' },
    { key: 'account', title: 'Account', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    search: SearchRoute,
    discovery: DiscoveryRoute,
    account: AccountRoute,
    prices: AccountRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      color="#8aaafb"
    />
  );
};

export default BottomNav;