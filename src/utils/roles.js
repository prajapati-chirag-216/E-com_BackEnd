const roles = {
  ADMIN: [
    "LOGOUT_ADMIN",
    "FETCH_CATEGORY",
    "FETCH_CATEGORIES",
    "FETCH_CATEGORY_BY_NAME",
    "FETCH_DISPLAY",
    "FETCH_ORDERS",
    "FETCH_ORDER_BY_ID",
    "FETCH_TODAYS_ORDERS",
    "FETCH_PRODUCTS",
    "FETCH_REVIEWS",
    "FETCH_USERS",
  ],
  SUPER_ADMIN: [
    "ADD_ADMIN",
    "LOGOUT_ADMIN",
    "FETCH_ADMINS",
    "UPDATE_ADMIN",
    "DELETE_ADMIN",
    "FETCH_CATEGORY",
    "FETCH_CATEGORIES",
    "FETCH_CATEGORY_BY_NAME",
    "ADD_CATEGORY",
    "DELETE_CATEGORY",
    "UPDATE_CATEGORY_BY_ID",
    "ADD_DISPLAY",
    "FETCH_DISPLAY",
    "DELETE_DISPLAY",
    "FETCH_ORDERS",
    "UPDATE_ORDER_STATUS",
    "FETCH_ORDER_BY_ID",
    "FETCH_TODAYS_ORDERS",
    "DELETE_ORDER",
    "FETCH_PRODUCTS",
    "ADD_PRODUCT",
    "DELETE_PRODUCT",
    "UPDATE_PRODUCT",
    "FETCH_REVIEWS",
    "ADD_REVIEWS",
    'DELETE_REVIEW',
    "FETCH_USERS",
  ],
};
module.exports = roles;