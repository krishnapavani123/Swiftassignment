// File: src/components/FeedbackHub.jsx
import  { Component } from "react";
import Header from "../Header";
import SearchBar from '../Searchbar'
import CommentsTable from "../CommentsTable";
import Pagination from "../Pagination";
import PageSizeSelector from "../PageSizeSelector";
import "./index.css";

class FeedbackHub extends Component {
  constructor(props) {
    super(props);
    const search = localStorage.getItem("search") || "";
    const sortConfig = JSON.parse(localStorage.getItem("sortConfig")) || {};
    const page = Number(localStorage.getItem("page")) || 1;
    const pageSize = Number(localStorage.getItem("pageSize")) || 10;

    this.state = {
      comments: [],
      filtered: [],
      search,
      sortConfig,
      page,
      pageSize
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ comments: data }, this.applyFilters);
      });
  }

  applyFilters = () => {
    let { comments, search, sortConfig, pageSize, page } = this.state;
    let temp = [...comments];

    if (search) {
      temp = temp.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.email.toLowerCase().includes(search.toLowerCase()) ||
          String(c.id).includes(search)
      );
    }

    if (sortConfig.key) {
      temp.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    this.setState({ filtered: temp }, () => {
      localStorage.setItem("search", search);
      localStorage.setItem("sortConfig", JSON.stringify(sortConfig));
      localStorage.setItem("page", page);
      localStorage.setItem("pageSize", pageSize);
    });
  };

  handleSearch = (value) => {
    this.setState({ search: value }, this.applyFilters);
  };

  cycleSort = (key) => {
    const { sortConfig } = this.state;
    let newSort = {};
    if (sortConfig.key !== key) newSort = { key, direction: "asc" };
    else if (sortConfig.direction === "asc") newSort = { key, direction: "desc" };
    else if (sortConfig.direction === "desc") newSort = {};
    this.setState({ sortConfig: newSort }, this.applyFilters);
  };

  changePageSize = (value) => {
    this.setState({ pageSize: Number(value), page: 1 }, this.applyFilters);
  };

  goToPage = (n) => {
    this.setState({ page: n }, this.applyFilters);
  };

  render() {
    const { filtered, search, page, pageSize, sortConfig } = this.state;
    const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);
    const pageCount = Math.ceil(filtered.length / pageSize);

    return (
      <div className="dashboard-container">
        <Header />
        <SearchBar
          searchValue={search}
          onSearch={this.handleSearch}
          onSort={this.cycleSort}
        />
        <CommentsTable data={paginated} onSort={this.cycleSort} sortConfig={sortConfig} />
        <div className="pagination-controls">
          <PageSizeSelector value={pageSize} onChange={this.changePageSize} />
          <Pagination page={page} pageCount={pageCount} onPageChange={this.goToPage} />
        </div>
      </div>
    );
  }
}

export default FeedbackHub;
