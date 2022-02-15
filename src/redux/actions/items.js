import axios from "axios";

export const fetchItems = () => (dispatch) => {
  const BASE_URL = "https://dispex.org/api/vtest";

  async function getData() {
    let streets = await axios
      .get(`${BASE_URL}/Request/streets`)
      .then(({ data }) => {
        dispatch(setItems(data));
      });
  }

  getData();
};

export const setItems = (items) => ({
  type: "SET_ITEMS",
  payload: items,
});
