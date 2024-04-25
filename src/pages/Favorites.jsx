import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selectors';
import { CardList } from 'components/CardList/CardList';
import { List, Text } from './Favorites.styles';

export function Favorites() {
  const favoritList = useSelector(selectFavorites);

  return (
    <List>
      {favoritList.length !== 0 ? <CardList list={favoritList} /> : <Text>Opps, your favorite is empty 🙊 </Text>}
    </List>
  );
}
