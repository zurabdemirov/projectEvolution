import axios from "axios";

export const fetch = async () => {
  try {
    const response = await axios('http://localhost:3001/countries');
    return response.data;
  } catch (error: any) {
    console.error(error);
  }
};