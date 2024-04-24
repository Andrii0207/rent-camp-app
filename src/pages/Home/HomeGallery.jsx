import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../redux/operations';
import { selectAll } from '../../redux/selectors';
import { GalleryItem, GalleryList, ImageItem, NameCard } from './HomeGallery.styled';

export function HomeGallery() {
  const dispatch = useDispatch();
  const totalHits = useSelector(selectAll);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  if (!totalHits) {
    return;
  }

  const cutGallery = totalHits.slice(0, totalHits.length - 1);
  console.log(cutGallery);

  return (
    <div>
      <GalleryList>
        {cutGallery.map(({ gallery, form, _id, name }) => (
          <GalleryItem key={_id}>
            <ImageItem src={gallery[0]} alt={name} />
            <NameCard>{form}</NameCard>
          </GalleryItem>
        ))}
      </GalleryList>
    </div>
  );
}
