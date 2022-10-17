import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action";
import "./Style.css"

const AddUser = () => {
  //const [details, setDetails] = useState([]);
  const dispatch = useDispatch();
  const defaultValues = {
    id: "",
    name: "",
    email: "",
    num: "",
    pass: "",
  };
  const methods = useForm({ defaultValues });
  const { control } = methods;
  const { register, handleSubmit, reset } = methods;

  const onSubmit = (data) => {
    // setDetails((oldData) => [...oldData, data]);
    dispatch(addUser(data));
    reset(defaultValues);
  };
  return (
    <div>
      <FormProvider {...methods}>
        <div className="ad">
          <h2>Add User</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
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
                label="password"
                variant="outlined"
                {...register("pass")}
              />
            )}
          />

          <Button variant="contained" type="submit">Submit</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddUser;
