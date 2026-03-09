import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

// modal styles
const customStyles = {
  content: {
    right: '50%',
    left: '',
    transform: 'translateX(50%)',
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: '#000000b9',
  },
};

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
}

export default function ImageModal({ isOpen, onClose, image }: ImageModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <img className={css.modal_img} src={image} />
    </Modal>
  );
}
