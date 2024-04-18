import { ADD_USERS, SORT_A_Z, SORT_Z_A, ZIP } from "../constants/constants";

export const getAllUsersReduser = (state, action) => {
  let stateCopy = [...state];

  switch (action.type) {
    case ADD_USERS:
      stateCopy = action.payload;
      break;
    case SORT_A_Z:
      stateCopy.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        } else {
          return 0;
        }
      });
      break;
    case SORT_Z_A:
      stateCopy.sort((a, b) => (a.name < b.name ? 1 : -1));
      break;
    case ZIP:
      action.payload === "asc"
        ? stateCopy.sort((a, b) =>
            a.address.zipcode > b.address.zipcode ? 1 : -1
          )
        : stateCopy.sort((a, b) =>
            a.address.zipcode < b.address.zipcode ? 1 : -1
          );
      break;

    default:
      break;
  }
  return stateCopy;
};
