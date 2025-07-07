import './index.css'
const PageSizeSelector = ({ value, onChange }) => (
  <div>
    <label className="mr-2">Page Size:</label>
    <select
      className="page-size-select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value={10}>10</option>
      <option value={50}>50</option>
      <option value={100}>100</option>
    </select>
  </div>
);

export default PageSizeSelector;
