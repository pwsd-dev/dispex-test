import axios from "axios";

export const fetchItems = () => (dispatch) => {
  async function getData() {
    await axios.get(`https://dispex.org/api/vtest`).then(({ data }) => {
      dispatch(setItems(data));
    });

    await axios.get(`https://dispex.org/api/vtest/streets`).then(({ data }) => {
      dispatch(setItems(data));
    });

    await axios
      .get(`https://dispex.org/api/vtest/houses/{id}`)
      .then(({ data }) => {
        dispatch(setItems(data));
      });

    await axios
      .get(`https://dispex.org/api/vtest/house_flats/{id}`)
      .then(({ data }) => {
        dispatch(setItems(data));
      });

    await axios
      .get(`https://dispex.org/api/vtest/HousingStock/clients`)
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
