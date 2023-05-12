import axios from "axios";

export const fetchCountries = async () => {
  try {
    const response = await axios('http://localhost:3001/countries');
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

export const fetchCar = async () => {
  try {
    const response = await axios('http://localhost:3001/car');
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};