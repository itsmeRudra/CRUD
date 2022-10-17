import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/action";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import { set } from "react-hook-form";
import "./Style.css"
const Home = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [id, setId] = useState("");
  const [editIdData, setEditIdData] =useState({})
  //const classes = useStyles()
  let dispatch = useDispatch();

  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("are you sure to  delete this?")) {
      dispatch(deleteUser(id));
  }
    
  };

  const editUser = (val,id) =>{
    setIsEditing(true)
    setId(id)
    setEditIdData(val)
    console.log("editUser",id,val)
  }
  return (
    <div>
      {isEditing? <EditUser setIsEditing={setIsEditing} id={id} editIdData={editIdData}/> :  <AddUser/>  }
     
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="Bg">Name</TableCell>
              <TableCell className="Bg" align="right">Email</TableCell>
              <TableCell className="Bg" align="right">Mobile No&nbsp;(g)</TableCell>
              <TableCell className="Bg" align="right">Password&nbsp;(g)</TableCell>
              <TableCell className="Bg" align="right">Edit</TableCell>
              <TableCell className="Bg" align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((val) => (
                <TableRow
                  key={val.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {val.name}
                  </TableCell>
                  <TableCell align="right">{val.email}</TableCell>
                  <TableCell align="right">{val.num}</TableCell>
                  <TableCell align="right">{val.pass}</TableCell>
                  <TableCell align="right">
                    <Button variant="contained" onClick={()=>editUser(val,val.id)}>Edit</Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="contained" onClick={() => handleDelete(val.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
