import { Http } from "../../libs/http";

class ListServices {
  http;

  constructor() {
    this.http = new Http().getInstance();
  }

  getAll(params) {
    return this.http.get("/items", { params });
  }
}

export const ListService = new ListServices();
