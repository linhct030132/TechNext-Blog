import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SortIcon from "@material-ui/icons/Sort";
import { IconButton, TablePagination } from "@material-ui/core";
import TablePaginationActions from "./tablePageAction";
import { useSortableData } from "./sortingFunctions";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchByName, setSearchByName] = useState("");
  const [searchByEmail, setSearchByEmail] = useState("");
  const [searchByWebsite, setSearchByWebsite] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  let results;
  (() => {
    if (searchByName) {
      results = users.filter((user) =>
        user.name.toLowerCase().includes(searchByName.toLocaleLowerCase())
      );
      return results;
    }
    if (searchByEmail) {
      results = users.filter((user) =>
        user.email.toLowerCase().includes(searchByEmail.toLocaleLowerCase())
      );
      return results;
    }

    if (searchByWebsite) {
      results = users.filter((user) =>
        user.website.toLowerCase().includes(searchByWebsite.toLocaleLowerCase())
      );
      return results;
    } else {
      results = users;
      return results;
    }
  })();
  const { items, requestSort, sortConfig } = useSortableData(results);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const handleNameSearch = (e) => {
    setSearchByName(e.target.value);
  };
  const handleEmailSearch = (e) => {
    setSearchByEmail(e.target.value);
  };
  const handleWebsiteSearch = (e) => {
    setSearchByWebsite(e.target.value);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="w-75 m-auto">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">
              Name{" "}
              <IconButton
                onClick={() => requestSort("name")}
                className={getClassNamesFor("name")}
              >
                <SortIcon />
              </IconButton>
            </th>
            <th scope="col">
              Email{" "}
              <IconButton
                onClick={() => requestSort("email")}
                className={getClassNamesFor("email")}
              >
                <SortIcon />
              </IconButton>
            </th>
            <th scope="col">
              Website{" "}
              <IconButton
                onClick={() => requestSort("website")}
                className={getClassNamesFor("website")}
              >
                <SortIcon />
              </IconButton>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {" "}
              <input
                type="text"
                className="form-control"
                placeholder="Search by Name"
                value={searchByName}
                onChange={handleNameSearch}
              />
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                placeholder="Search by Email"
                value={searchByEmail}
                onChange={handleEmailSearch}
              />
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                placeholder="Search by Website"
                value={searchByWebsite}
                onChange={handleWebsiteSearch}
              />
            </td>
          </tr>
          {(rowsPerPage > 0
            ? items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : items
          ).map((item) => (
            <tr key={item.id}>
              <td>
                <Link
                  className="text-dark text-decoration-none"
                  to={`/profile/${item.id}`}
                >
                  {item.name}
                </Link>
              </td>
              <td>{item.email}</td>
              <td>{item.website}</td>
            </tr>
          ))}
        </tbody>
        <TablePagination
          rowsPerPageOptions={[3, 5, { label: "All", value: -1 }]}
          colSpan={3}
          count={items.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: { "aria-label": "rows per page" },
            native: true,
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </table>
    </div>
  );
};

export default UserTable;
