import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Button, Container, FormControl, Select, InputLabel, MenuItem, TextField } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import axios from "axios";
import { set } from "mongoose";
const [formErrors, setFormErrors] = useState = ([]);
const [isSubmit, setIsSubmit] = useState(false);

const AddNewProp = () => {
  const [newProp, setNewProp] = useState({
    state: "",
    city: "",
    street: "",
    apartmentNum: Number,
    size: Number + "sq ft",
    rent: Number,
    occupied: Boolean,
    tenantName: "",
    occupiedDate: Date,
    numOccupants: Number,
    pets: Boolean,
    latePayment: Boolean,
    tenantRequests: "",
    tenantNotes: "",
  });

  const deploymentURL = "https://citrusproperty.herokuapp.com/api/citrus";
  const developmentURL = "http://localhost:5000/api/citrus";
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate());
    setIsSubmit(true);
    axios
      .post(developmentURL, newProp)
      .then(() => navigate("/showProp"))
      .catch((err) => console.log(err));
  };
  useEffect = ( ()=> {
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(newProp.value)
    }
  })
  
  const validate = () => {
    const errors = {};
    if(newProp.city){
      errors.city = "City is Required"
    }
    if(newProp.state){
      errors.state = "State is Required"
    }
    if(newProp.street){
      errors.street = "Street is Required"
    }
    if(newProp.size){
      errors.size = "Size is Required"
    }
    if(newProp.rent){
      errors.rent = "Rent is Required"
    }
    if(newProp.occupied){
      errors.occupied = "Occupied is Required"
    }
  }

  return (
    <Box textAlign="center" justifyContent="center" alignItems="center">
      <Container size="sm">
        <Typography variant="h3" color="primary" gutterBottom>
          Add a New Property
        </Typography>
        <h5>* = Required Field</h5>
        <Box>
          <FormControl sx={{ minWidth: "100%" }} margin="dense">
            <InputLabel id="demo-simple-select-label">State *</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={newProp.state}
              label="State"
              onChange={(e) => {
                setNewProp({ ...newProp, state: e.target.value });
                console.log(e.target.value);
              }}
              required
            >
              <MenuItem value={"AL"}>AL</MenuItem>
              <MenuItem value={"AK"}>AK</MenuItem>
              <MenuItem value={"AZ"}>AZ</MenuItem>
              <MenuItem value={"AR"}>AR</MenuItem>
              <MenuItem value={"CA"}>CA</MenuItem>
              <MenuItem value={"CO"}>CO</MenuItem>
              <MenuItem value={"CT"}>CT</MenuItem>
              <MenuItem value={"DE"}>DE</MenuItem>
              <MenuItem value={"FL"}>FL</MenuItem>
              <MenuItem value={"GA"}>GA</MenuItem>
              <MenuItem value={"HI"}>HI</MenuItem>
              <MenuItem value={"ID"}>ID</MenuItem>
              <MenuItem value={"IL"}>IL</MenuItem>
              <MenuItem value={"IN"}>IN</MenuItem>
              <MenuItem value={"IA"}>IA</MenuItem>
              <MenuItem value={"KS"}>KS</MenuItem>
              <MenuItem value={"KY"}>KY</MenuItem>
              <MenuItem value={"LA"}>LA</MenuItem>
              <MenuItem value={"ME"}>ME</MenuItem>
              <MenuItem value={"MD"}>MD</MenuItem>
              <MenuItem value={"MA"}>MA</MenuItem>
              <MenuItem value={"MI"}>MI</MenuItem>
              <MenuItem value={"MN"}>MN</MenuItem>
              <MenuItem value={"MS"}>MS</MenuItem>
              <MenuItem value={"MO"}>MO</MenuItem>
              <MenuItem value={"MT"}>MT</MenuItem>
              <MenuItem value={"NE"}>NE</MenuItem>
              <MenuItem value={"NV"}>NV</MenuItem>
              <MenuItem value={"NH"}>NH</MenuItem>
              <MenuItem value={"NJ"}>NJ</MenuItem>
              <MenuItem value={"NM"}>NM</MenuItem>
              <MenuItem value={"NY"}>NY</MenuItem>
              <MenuItem value={"NC"}>NC</MenuItem>
              <MenuItem value={"ND"}>ND</MenuItem>
              <MenuItem value={"OH"}>OH</MenuItem>
              <MenuItem value={"OK"}>OK</MenuItem>
              <MenuItem value={"OR"}>OR</MenuItem>
              <MenuItem value={"PA"}>PA</MenuItem>
              <MenuItem value={"RI"}>RI</MenuItem>
              <MenuItem value={"SC"}>SC</MenuItem>
              <MenuItem value={"SD"}>SD</MenuItem>
              <MenuItem value={"TN"}>TN</MenuItem>
              <MenuItem value={"TX"}>TX</MenuItem>
              <MenuItem value={"UT"}>UT</MenuItem>
              <MenuItem value={"VT"}>VT</MenuItem>
              <MenuItem value={"VA"}>VA</MenuItem>
              <MenuItem value={"WA"}>WA</MenuItem>
              <MenuItem value={"WV"}>WV</MenuItem>
              <MenuItem value={"WI"}>WI</MenuItem>
              <MenuItem value={"WY"}>WY</MenuItem>
            </Select>
          </FormControl>
          <TextField
            onChange={(e) => {
              setNewProp({ ...newProp, city: e.target.value });
            }}
            label="City"
            errorText={...}
            variant="outlined"
            color="primary"
            margin="dense"
            fullWidth
            require
          />
          <TextField
            onChange={(e) => {
              setNewProp({ ...newProp, street: e.target.value });
            }}
            label="Street Address"
            variant="outlined"
            color="primary"
            margin="dense"
            fullWidth
            required
          />
          <TextField
            onChange={(e) => {
              setNewProp({ ...newProp, apartmentNum: e.target.value });
            }}
            label="Apartment #"
            variant="outlined"
            color="primary"
            margin="dense"
            fullWidth
          />
          <TextField
            onChange={(e) => {
              setNewProp({ ...newProp, size: e.target.value });
            }}
            label="Property Size (sq ft)"
            variant="outlined"
            color="primary"
            margin="dense"
            fullWidth
            required
          />
          <TextField
            onChange={(e) => {
              setNewProp({ ...newProp, rent: e.target.value });
            }}
            label="Rent Amount ($)"
            variant="outlined"
            color="primary"
            margin="dense"
            fullWidth
            required
          />
          <FormControl sx={{ minWidth: "100%" }} margin="dense">
            <InputLabel id="demo-simple-select-label">Occupied *</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={newProp.occupied}
              label="Occupied"
              onChange={(e) => {
                setNewProp({ ...newProp, occupied: e.target.value });
                console.log(e.target.value);
              }}
            >
              <MenuItem value={""}></MenuItem>
              <MenuItem value={"Yes"}>Yes</MenuItem>
              <MenuItem value={"No"}>No</MenuItem>
            </Select>
          </FormControl>
          <TextField
            onChange={(e) => {
              setNewProp({ ...newProp, tenantName: e.target.value });
            }}
            label="Tenant Name"
            variant="outlined"
            color="primary"
            margin="dense"
            fullWidth
          />
          <TextField
            onChange={(e) => {
              setNewProp({ ...newProp, occupiedDate: e.target.value });
            }}
            label="Occupied Since"
            variant="outlined"
            color="primary"
            margin="dense"
            fullWidth
          />

          <TextField
            onChange={(e) => {
              setNewProp({ ...newProp, numOccupants: e.target.value });
            }}
            label="Number of Occupants"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            variant="outlined"
            color="primary"
            margin="dense"
            fullWidth
          />

          <FormControl sx={{ minWidth: "100%" }} margin="dense">
            <InputLabel id="demo-simple-select-label">Pets</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={newProp.pets}
              label="Pets"
              onChange={(e) => {
                setNewProp({ ...newProp, pets: e.target.value });
              }}
            >
              <MenuItem value={""}></MenuItem>
              <MenuItem value={"Yes"}>Yes</MenuItem>
              <MenuItem value={"No"}>No</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: "100%" }} margin="dense">
            <InputLabel id="demo-simple-select-label">Late Payment</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={newProp.latePayment}
              label="Late Payment"
              onChange={(e) => {
                setNewProp({ ...newProp, latePayment: e.target.value });
              }}
            >
              <MenuItem value={""}></MenuItem>
              <MenuItem value={"Yes"}>Yes</MenuItem>
              <MenuItem value={"No"}>No</MenuItem>
            </Select>
          </FormControl>

          <TextField
            onChange={(e) => {
              setNewProp({ ...newProp, tenantRequests: e.target.value });
            }}
            label="Tenant Requests"
            variant="outlined"
            color="primary"
            margin="dense"
            fullWidth
          />
          <TextField
            onChange={(e) => {
              setNewProp({ ...newProp, tenantNotes: e.target.value });
            }}
            label="Tenant Notes"
            variant="outlined"
            color="primary"
            margin="dense"
            fullWidth
          />

          <Button
            sx={{ m: 2, p: 3, fontSize: 15, alignItems: "center" }}
            id="NewPropButton"
            onClick={handleSubmit}
            color="primary"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
          >
            Submit New Property
          </Button>
          <div id='error'></div>
        </Box>
      </Container>
    </Box>
  );
};

export default AddNewProp;
