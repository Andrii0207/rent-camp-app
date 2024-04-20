import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selectors';
import Card from 'components/Card/Card';
import { FavoriteLIst } from './Favorites.styles';

export function Favorites() {
  const favorites = useSelector(selectFavorites);
  console.log('favorites >>', favorites);
  return (
    <FavoriteLIst>
      {favorites.length !== 0 ? (
        favorites.map(item => (
          <li key={item._id}>
            <Card item={item} />
          </li>
        ))
      ) : (
        <p>Sorry, your favorite is empty</p>
      )}
    </FavoriteLIst>
  );
}
