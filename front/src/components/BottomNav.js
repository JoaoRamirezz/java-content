import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Users from '../pages/Users';
import Account from '../pages/Account';
import Search from '../pages/Search';
import Discovery from '../pages/Discovery';

const HomeRoute = () => <Users/>;

const SearchRoute = () => <Search/>;

const DiscoveryRoute = () => <Discovery/>;

const AccountRoute = () => <Account/>;

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'discovery', title: 'Discovery', focusedIcon: 'earth' },
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'search', title: 'Search', focusedIcon: 'magnify' },
    { key: 'account', title: 'Account', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
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
    />
  );
};

export default BottomNav;