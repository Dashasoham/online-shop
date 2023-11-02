import { createSlice } from '@reduxjs/toolkit';

const url = 'https://fakestoreapi.com/products';

const initialState = [];

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action) {
      return action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;

export const fetchData = () => async (dispatch) => {
  try {
    const response = await fetch(url);
    console.log(response);
    const unfilteredData = await response.json();
    const data = unfilteredData.filter(
      (item) =>
        item.category === "men's clothing" ||
        item.category === "women's clothing"
    );
    dispatch(setData(data));
    console.log(data.length);
  } catch (err) {
    console.log(err);
  }
};

export default dataSlice.reducer;
