import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Container,
  Select,
  MenuItem,
} from "@mui/material";

import "./style.css";

const getData = async () => {
  const data = await fetch("https://dummyjson.com/users").then((data) =>
    data.json()
  );
  console.log(data);
  return data;
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOption, setSearchOption] = useState("firstName");

  useEffect(() => {
    getData().then((data) => setUsers(data.users));
  }, []);

  const filteredUsers = users.filter((user) =>
    user[searchOption].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchOptionChange = (event) => {
    setSearchOption(event.target.value);
  };

  return (
    <Container maxWidth="xl">
      <Box className="container">
        <Select
          value={searchOption}
          onChange={handleSearchOptionChange}
          className="select-option"
        >
          <MenuItem value="firstName">First Name</MenuItem>
          <MenuItem value="lastName">Last Name</MenuItem>
          <MenuItem value="maidenName">Maiden Name</MenuItem>
          <MenuItem value="gender">Gender</MenuItem>
          <MenuItem value="email">Email</MenuItem>
          <MenuItem value="phone">Phone</MenuItem>
        </Select>
        <input
          type="text"
          label={`Search by ${searchOption}`}
          placeholder={`Search by ${searchOption}...`}
          variant="outlined"
          fullWidth
          size="small"
          margin="normal"
          value={searchTerm}
          style={{border:"3px solid black"}}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="myclass"
        />
        <TableContainer component={Paper}>
          <Table className="mytable">
            <TableHead>
              <TableRow>
                <TableCell className="myclasscolor">Avatar</TableCell>
                <TableCell className="myclasscolor">First Name</TableCell>
                <TableCell className="myclasscolor">Last Name</TableCell>
                <TableCell className="myclasscolor">Maiden Name</TableCell>
                <TableCell className="myclasscolor">Gender</TableCell>
                <TableCell className="myclasscolor">Email</TableCell>
                <TableCell className="myclasscolor">Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.slice(0, 10).map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <img
                      src={user.image}
                      alt={`${user.firstName} ${user.lastName}`}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  </TableCell>
                  <TableCell className="myprint">{user.firstName}</TableCell>
                  <TableCell className="myprint">{user.lastName}</TableCell>
                  <TableCell className="myprint">{user.maidenName}</TableCell>
                  <TableCell className="myprint">{user.gender}</TableCell>
                  <TableCell className="myprint">{user.email}</TableCell>
                  <TableCell className="myprint">{user.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default App;
