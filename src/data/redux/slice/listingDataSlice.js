import { createSlice } from "@reduxjs/toolkit";
import { LISTING_DATA } from "../constants";

export const listingSlice = createSlice({
  name: LISTING_DATA,
  initialState: {
    clientList: [],
    resellerList: [],
    approvalList: [],
    transactionList: [],
    payoutTransactionList: [],
    prefundingTransactionList: [],
    commissionList: [],
    clientWithIdList: [],
    userList: [],
    settlementList: [],
    revenueList: [],
    clientDetails: [],
    vanDetails: [],
    vanCustomerDetails: [],
    clientPayinList: [],
    customerList: [],
    vanTransactionList: [],
    vanAllCustomerList: [],
  },
  reducers: {
    addResellerList: (state, action) => {
      const data = action.payload;
      return (state = {
        ...state,
        resellerList: data,
      });
    },
    addTransactionList: (state, action) => {
      const data = action.payload;
      return (state = {
        ...state,
        transactionList: data,
      });
    },
    addPayoutTransactionList: (state, action) => {
      const data = action.payload;
      return (state = {
        ...state,
        payoutTransactionList: data,
      });
    },
    addPrefundTransactionList: (state, action) => {
      const data = action.payload;
      return (state = {
        ...state,
        prefundTransactionList: data,
      });
    },
    addVanTransactionList: (state, action) => {
      const data = action.payload;
      return (state = {
        ...state,
        vanTransactionList: data,
      });
    },
    addSettlementList: (state, action) => {
      const data = action.payload;
      return (state = {
        ...state,
        settlementList: data,
      });
    },
    addRevenueList: (state, action) => {
      const data = action.payload;
      return (state = {
        ...state,
        revenueList: data,
      });
    },
    addClientList: (state, action) => {
      const data = action.payload;
      return (state = {
        ...state,
        clientList: data,
      });
    },
    addCustomerList: (state, action) => {
      const data = action.payload;
      return (state = {
        ...state,
        customerList: data,
      });
    },

    vanAllCustomerList: (state, action) => {
      const data = action.payload;
      return (state = {
        ...state,
        vanAllCustomerList: data,
      });
    },

    addApprovalList: (state, action) => {
      const data = action.payload;
      return (state = {
        ...state,
        approvalList: data,
      });
    },
    addPedingList: (state, action) => {
      const data = action.payload;
      return (state = {
        ...state,
        approvalList: data,
      });
    },

    addCommissionList: (state, action) => {
      const data = action.payload;
      return (state = {
        ...state,
        commissionList: data,
      });
    },

    addClientListWithId: (state, action) => {
      const data = [...action.payload];
      return (state = {
        ...state,
        clientWithIdList: data,
      });
    },
    addUserList: (state, action) => {
      const data = action.payload;
      return (state = {
        ...state,
        userList: data,
      });
    },
    clientSecret: (state, action) => {
      const data = action.payload;
      return (state = {
        ...state,
        clientDetails: data,
      });
    },
    vanAccount: (state, action) => {
      const data = action.payload;
      return (state = {
        ...state,
        vanDetails: data,
      });
    },
    vanCustomer: (state, action) => {
      const data = action.payload;

      return (state = {
        ...state,
        vanCustomerDetails: data,
      });
    },
    clientPayinList: (state, action) => {
      const data = action.payload;

      return (state = {
        ...state,
        clientPayinList: data,
      });
    },
  },
});

export const {
  addResellerList,
  addTransactionList,
  addPayoutTransactionList,
  addVanTransactionList,
  addPrefundTransactionList,
  addClientList,
  addApprovalList,
  addPedingList,
  addCommissionList,
  addClientListWithId,
  addUserList,
  addSettlementList,
  addRevenueList,
  clientSecret,
  vanAccount,
  vanCustomer,
  clientPayinList,
  addCustomerList,
  vanAllCustomerList,
} = listingSlice.actions;

export default listingSlice.reducer;
