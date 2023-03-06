import React, { useEffect, useState } from "react";

import {
  Box,
  Grid,
  TextField,
  Button,
  FormControl,
  OutlinedInput,
  IconButton,
  InputLabel,
  InputAdornment,
  MenuItem,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { get_divisions, get_users, register_user } from "../../helpers/API";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [divisions, setDivisions] = useState([]);
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const user = {
      email: data.get("email"),
      password: data.get("password"),
      division: data.get("division"),
      username: data.get("username"),
    };
    const newErrors = {};
    Object.keys(user).forEach((key) => {
      if (user[key].trim() === "") {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setUsers(await register_user(user));
      loadData();
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loadData = async () => {
    setDivisions(await get_divisions());
    setUsers(await get_users());
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6}>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField
                  name="username"
                  required
                  id="username"
                  label="Username"
                  autoFocus
                  error={errors.username}
                  helperText={errors.username}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                variant="outlined"
                required
                id="password"
                name="password"
                fullWidth
                error={errors.password ?? false}
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField
                  required
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={errors.email}
                  helperText={errors.email}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField
                  select
                  required
                  id="division"
                  label="Division"
                  name="division"
                  defaultValue={""}
                  error={errors.division}
                  helperText={errors.division}
                >
                  {divisions.map((i, x) => (
                    <MenuItem key={i + x} value={i.divisionId}>
                      {i.title.toUpperCase()}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, width: "150px", marginInline: "auto" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item sm={12} md={6}>
        {users?.length > 0 ? (
          users.map((i, x) => (
            <div key={i + x}>
              <p>
                {i.username} {i.role}
              </p>
            </div>
          ))
        ) : (
          <p>No user register</p>
        )}
      </Grid>
    </Grid>
  );
};

export default Register;
