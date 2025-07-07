
import './index.css'
const CommentsTable = ({ data, onSort, sortConfig }) => {
  const getIndicator = (key) => {
    if (sortConfig.key !== key) return "";
    return sortConfig.direction === "asc" ? " 🔼" : " 🔽";
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => onSort("id")}>Post ID{getIndicator("id")}</th>
            <th onClick={() => onSort("name")}>Name{getIndicator("name")}</th>
            <th onClick={() => onSort("email")}>Email{getIndicator("email")}</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommentsTable;
