export default function ImageCard({
  image: {
    description,
    urls: { small, regular },
  },
  openModal,
}) {
  return (
    <div onClick={() => openModal(regular)}>
      <img src={small} alt={description} />
    </div>
  );
}
