import { Http } from "../../libs/http";

class DetailServices {
  http;

  constructor() {
    this.http = new Http().getInstance();
  }

  getDetail(itemId) {
    return this.http.get(`/items/${itemId}`);
  }
}

export const DetailService = new DetailServices();
