import axios from "axios";

export const fetchItems = () => (dispatch) => {
  // dispatch(setLoaded(false));
  //ассинхронное получение action'a из редакса с помощью redux thunk (до этого получал в app)
  async function getData() {
    await axios.get(`https://dispex.org/api/vtest`).then(({ data }) => {
      dispatch(setItems(data));
    });
  }

  getData();
};

export const setItems = (items) => ({
  // setPizzas возвращает объект
  type: "SET_ITEMS",
  payload: items,
});
