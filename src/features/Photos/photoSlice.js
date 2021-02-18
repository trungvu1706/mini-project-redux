import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialPhotos = [
  {
    id: nanoid(),
    categoryId: 5,
    photo: "https://picsum.photos/id/238/300/300 ",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis odio consectetur nisl blandit posuere quis pellentesque nibh. In quis massa eros",
  },

  {
    id: nanoid(),
    categoryId: 1,
    photo: "https://picsum.photos/id/469/300/300 ",
    title: "Donec tempor quam neque, vitae elementum felis feugiat at.",
  },

  {
    id: nanoid(),
    categoryId: 2,
    photo: "https://picsum.photos/id/500/300/300 ",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    id: nanoid(),
    categoryId: 4,
    photo: "https://picsum.photos/id/604/300/300 ",
    title: " Nulla interdum turpis vitae aliquet ullamcorper.",
  },
  {
    id: nanoid(),
    categoryId: 3,
    photo: "https://picsum.photos/id/312/300/300 ",
    title:
      " Integer pulvinar risus in tellus rutrum, non efficitur purus sollicitudin. ",
  },
  {
    id: nanoid(),
    categoryId: 1,
    photo: "https://picsum.photos/id/789/300/300 ",
    title:
      "Fusce pellentesque dapibus metus, vel volutpat sem molestie et. Etiam vel mollis orci.",
  },
];

const photo = createSlice({
  name: "photos",
  initialState: initialPhotos,
  reducers: {
    addPhoto: (state, action) => {
      state.push(
        action.payload // action.payload is an object
      );
    },
    removePhoto: (state, action) => {
      let newState = state.filter((photo) => photo.id !== action.payload); //action.payload === photo.id
      return newState; // filter func create new state -> return new state ( b/c state is an new array)
    },

    updatePhoto: (state, action) => {
      const newPhoto = action.payload;
      const photoIndex = state.findIndex((photo) => photo.id === newPhoto.id);
      if (photoIndex >= 0) {
        state[photoIndex] = newPhoto;
      }
    },
  },
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;
