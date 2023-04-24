import axios from "axios";
import { environment } from "../utils/environment";

export class Http {
  constructor(url = environment.baseUrl) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 40000,
      headers: {
        Accept: "application/json",
      },
    });

    this.handleResponse();
  }

  getInstance() {
    return this.instance;
  }

  handleResponse() {
    this.instance.interceptors.response.use(
      (response) => {
        return Promise.resolve(response.data);
      },
      function (error) {
        return Promise.reject(error.response);
      }
    );
  }
}
