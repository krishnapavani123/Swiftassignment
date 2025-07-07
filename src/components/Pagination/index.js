
import './index.css'
const Pagination = ({ page, pageCount, onPageChange }) => (
  <div>
    {Array.from({ length: pageCount }, (_, i) => (
      <button
        key={i}
        onClick={() => onPageChange(i + 1)}
        className={`page-button ${page === i + 1 ? "active" : ""}`}
      >
        {i + 1}
      </button>
    ))}
  </div>
);

export default Pagination;
