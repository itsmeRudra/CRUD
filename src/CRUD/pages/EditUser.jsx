import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleUser, updateUser } from "../redux/action";
import Home from "./Home";
import "./Style.css"

const EditUser = (props) => {
  console.log("props>>>>----", props);
  //const [details, setDetails] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const {id} = useParams();
  useEffect(() => {
    dispatch(getSingleUser(props.id));
  }, []);
  //const { props.editId } = useSelector((state) => state.data);
  const defaultValues = {
    id: "",
    name: props?.editIdData.name || "",
    email: props?.editIdData.email || "",
    num: props?.editIdData.num || "",
    pass: props?.editIdData.pass || "",
  };

  const methods = useForm({ defaultValues });
  const { control } = methods;
  const { register, handleSubmit, reset } = methods;

  // useEffect(
  //   (props) => {
  //     if (props?.editIdData) {
  //       reset(props?.editIdData);
  //     }
  //     console.log("value>>>>>>", props?.editIdData);
  //   },
  //   [props?.editIdData]
  // );

  const onSubmit = (data) => {
    // setDetails((oldData) => [...oldData, data]);
    dispatch(updateUser(data , props.id))
   console.log("data",data,props.id)
   props.setIsEditing(false)

  };

  return (
    <div>
      <FormProvider {...methods}>
        <div className="ed">
        <h2>Edit Detils</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
                type='text'
                label="name"
                variant="outlined"
                {...register("name")}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
                type='email'
                label="email"
                variant="outlined"
                {...register("email")}
              />
            )}
          />

          <Controller
            name="num"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
                type='number'
                label="number"
                variant="outlined"
                {...register("num")}
              />
            )}
          />

          <Controller
            name="pass"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
                type='password'
                label="password"
                variant="outlined"
                {...register("pass")}
              />
            )}
          />
     <div  className="le">
     <Button variant="contained" type="submit">Update</Button>
     </div>
         
        <div>
        <Button  className="le" variant="contained" onClick={() => props.setIsEditing(false)}>Cancel</Button>
        </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default EditUser;
