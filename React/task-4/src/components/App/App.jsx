import { useEffect, useState } from 'react'
import { searchImageQuery } from '../../unsplash-api';
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const searhNewQuery = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  }

  const moreImages = () => {
    setPage(page + 1);
  }

  const openModal = (image) => {
    setModalImage(image);
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
    setModalImage(null);
  }

  // effect which send request when query or page changes
  useEffect(() => {
    const searchImages = async () => {
      try {
        if(query === "") {
          return;
        }

        setIsError(false)
        setIsLoading(true);

        const data = await searchImageQuery(query, page);

        setImages((prevImages) => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);

      } catch {
        setIsError(true)
      } finally {
        setIsLoading(false);
      }
    }

    searchImages();
  },[query, page]);

  return (
    <>
      <SearchBar onSearch={searhNewQuery} />
      {images.length > 0 && !isError && <ImageGallery images={images} openModal={openModal} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {totalPages > page && !isLoading && <LoadMoreBtn onClick={moreImages} />}
      <ImageModal image={modalImage} isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}
