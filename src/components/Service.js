import axios from "axios";

const API_URL = "http://localhost:5000";

const service = {
  async register(data) {
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
  },

  async sendDetails(data) {
    const response = await axios.post(`${API_URL}/send-details`, data);
    return response.data;
  },
};

export default service;
