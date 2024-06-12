import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import fetchImages from "./redux/actions";
import ButtonModal from "./Components/ButtonModal";
import ImageModal from "./Components/ImageModal";
import Loading from "./Components/Loading";

function App() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("nature");
  const [isButtonModalOpen, setIsButtonModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { images, loading } = useSelector((state) => state.images);

  // Fetch images from the Redux store based on category and page
  useEffect(() => {
    dispatch(fetchImages({ category, page }));
  }, [page, category, dispatch]);

  // --Handlers START--

  // Pagination controls
  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrev = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Category selection control
  const handleSelectCategory = (category) => {
    setCategory(category);
    setIsButtonModalOpen(false);
  };

  // Image click control
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  // --Handlers END--

  // Render the component
  return (
    <div className="container">
      <button
        className="modal-button"
        onClick={() => setIsButtonModalOpen(!isButtonModalOpen)}
      >
        <span>Select Category</span>
      </button>

      <div className="pagination">
        <button onClick={handlePrev} disabled={page === 1}>
          Prev
        </button>
        <button onClick={handleNext}>Next</button>
      </div>

      {loading && <Loading />}

      <div className="image-grid">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.webformatURL}
            alt={image.tags}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      <ButtonModal
        isOpen={isButtonModalOpen}
        onClose={() => setIsButtonModalOpen(false)}
        onSelectCategory={handleSelectCategory}
      />

      {selectedImage && (
        <ImageModal
          isOpen={isImageModalOpen}
          onClose={() => setIsImageModalOpen(false)}
          image={selectedImage}
        />
      )}
    </div>
  );
}

export default App;
