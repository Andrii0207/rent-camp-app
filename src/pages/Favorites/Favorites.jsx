import { useSelector } from 'react-redux';
import { CardList } from 'components/CardList/CardList';
import { List, Text } from './Favorites.styles';
import { selectFavorites } from '../../redux/selectors';

export default function Favorites() {
  const favoritList = useSelector(selectFavorites);

  return (
    <List>
      {favoritList.length !== 0 ? <CardList list={favoritList} /> : <Text>Opps, your favorite is empty 🙊 </Text>}
    </List>
  );
}
