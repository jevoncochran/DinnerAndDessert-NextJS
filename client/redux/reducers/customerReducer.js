import {
  SET_MENU_ITEM_START,
  SET_MENU_ITEM_SUCCESS,
  OPEN_MENU_ITEM_MODAL_START,
  OPEN_MENU_ITEM_MODAL_SUCCESS,
  CLOSE_MENU_ITEM_MODAL_START,
  CLOSE_MENU_ITEM_MODAL_SUCCESS,
  ADD_TO_ORDER_START,
  ADD_TO_ORDER_SUCCESS,
  UPDATE_ORDER_START,
  UPDATE_ORDER_SUCCESS,
  OPEN_ORDER_CARD_START,
  OPEN_ORDER_CARD_SUCCESS,
  CLOSE_ORDER_CARD_START,
  CLOSE_ORDER_CARD_SUCCESS,
  REMOVE_FROM_ORDER_START,
  REMOVE_FROM_ORDER_SUCCESS,
  UPDATE_COUNT_START,
  UPDATE_COUNT_SUCCESS,
  ADD_ORDER_START,
  ADD_ORDER_SUCCESS,
  PREPARE_ORDER_START,
  PREPARE_ORDER_SUCCESS,
} from "../actions";

const initialState = {
  order: [],
  isLoading: false,
  selectedMenuItem: "",
  isMenuItemModalOpen: false,
  error: "",
};

export const customer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU_ITEM_START:
      return {
        ...state,
        isLoading: true,
      };
    case SET_MENU_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedMenuItem: action.payload,
      };
    case OPEN_MENU_ITEM_MODAL_START:
      return {
        ...state,
        isLoading: true,
      };
    case OPEN_MENU_ITEM_MODAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isMenuItemModalOpen: true,
      };
    case CLOSE_MENU_ITEM_MODAL_START:
      return {
        ...state,
        isLoading: true,
      };
    case CLOSE_MENU_ITEM_MODAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isMenuItemModalOpen: false,
      };
    case ADD_TO_ORDER_START:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_TO_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        order: [...state.order, action.payload],
      };
    case UPDATE_ORDER_START:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        order: [
          ...state.order.filter((item) => {
            return item.item !== action.payload.item;
          }),
          action.payload,
        ],
      };
    case OPEN_ORDER_CARD_START:
      return {
        ...state,
        isLoading: true,
      };
    case OPEN_ORDER_CARD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isOrderCardOpen: true,
      };
    case CLOSE_ORDER_CARD_START:
      return {
        ...state,
        isLoading: true,
      };
    case CLOSE_ORDER_CARD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isOrderCardOpen: false,
      };
    case REMOVE_FROM_ORDER_START:
      return {
        ...state,
        isLoading: true,
      };
    case REMOVE_FROM_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        order: [
          ...state.order.filter((item) => {
            return item.id !== action.payload;
          }),
        ],
      };
    case UPDATE_COUNT_START:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_COUNT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        order: [
          ...state.order.map((item) => {
            if (item.id === action.payload.itemId) {
              return {
                ...item,
                count: action.payload.newCount,
                total: action.payload.newCount * item.price,
              };
            }
            return item;
          }),
        ],
      };
    case ADD_ORDER_START:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        order: [],
        order_details: {},
      };
    case PREPARE_ORDER_START:
      return {
        ...state,
        isLoading: true,
      };
    case PREPARE_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        order_details: action.payload,
      };
    default:
      return state;
  }
};
