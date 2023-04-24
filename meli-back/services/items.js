const axios = require("axios");
const boom = require("@hapi/boom");

const BASE_URL = "https://api.mercadolibre.com/";

class ItemsService {
  constructor() {
    this.results = [];
  }

  setResults(newItems) {
    this.results = newItems;
  }

  /**
   * Consumes the MELI endpoint and formats the response in the established format
   *
   * @param queryParam - Keyword to search
   *
   * @returns Formatted product list
   */
  async getData(queryParam = ":query") {
    try {
      const { data } = await axios.get(
        `${BASE_URL}sites/MLA/search?q=${queryParam}`
      );
      if (data?.results?.length > 0) {
        let categories = [];
        const itemsList = [];
        data.results.forEach(
          (
            {
              category_id,
              condition,
              id,
              installments: { currency_id, amount, rate },
              shipping: { free_shipping },
              thumbnail,
              title,
              address: {city_name},
            },
            idx
          ) => {
            if (idx <= 3) {
              categories.push(category_id);
              itemsList.push({
                id,
                condition,
                title,
                category_id,
                picture: thumbnail,
                price: {
                  currency: currency_id,
                  amount,
                  decimals: rate,
                },
                free_shipping,
                address: city_name
              });
            }
          }
        );
        this.setResults({
            categories,
            items: itemsList,
        });
      } else {
        this.setResults([]);
      }
    } catch (e) {
      throw boom.notAcceptable(e.message);
    }
  }

  /**
   * Return products list
   *
   * @param queryParam - Keyword to search
   *
   * @returns Products list
   */
  async search(queryParam) {
    await this.getData(queryParam);
    if (this.results.length === 0) throw boom.notFound("No results");
    return this.results;
  }

  /**
   * Return product detail
   *
   * @param itemId - product id
   *
   * @returns Return product detail
   */
  async details(itemId) {
    const { data: generalData } = await axios.get(`${BASE_URL}items/${itemId}`);
    const { data: description } = await axios.get(
      `${BASE_URL}items/${itemId}/description`
    );
    const {
      category_id,
      condition,
      currency_id,
      id,
      pictures,
      price,
      shipping: { free_shipping },
      sold_quantity,
      title,
      thumbnail,
    } = generalData;
    const { plain_text } = description;
    if (!generalData || !description) throw boom.notFound("Data not found");
    const itemFounded = {
      id,
      condition,
      free_shipping,
      category_id,
      picture: pictures[0].url ?? thumbnail,
      price: {
        currency: currency_id,
        amount: price,
      },
      title,
      sold_quantity,
    };

    return {
      item: {
        ...itemFounded,
        description: plain_text,
      },
    };
  }
}

module.exports = ItemsService;
