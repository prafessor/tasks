import { Image } from '../../types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface ImageGalleryProps {
  items: Image[];
  onOpenModal: (imgUrl: string) => void;
}

export default function ImageGallery({ items, onOpenModal }: ImageGalleryProps) {
  return (
    <ul className={css.list}>
      {items.map(picture => (
        <li
          className={css.item}
          key={picture.id}
          onClick={() => {
            onOpenModal(picture.urls.regular);
          }}
        >
          <ImageCard picture={picture} />
        </li>
      ))}
    </ul>
  );
}
