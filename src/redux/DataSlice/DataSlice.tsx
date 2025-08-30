import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPageDataState {
  [pageName: string]: any;
}

export interface DataState {
  dataList: IPageDataState;
  dataTimestamps: Record<string, number>;
  data: any;
  loading: boolean;
  filter?: any;
}

const initialState: DataState = {
  dataList: {},
  dataTimestamps: {},
  data: null,
  loading: false,
  filter: null,
};

const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setData: (
      state,
      action: PayloadAction<{ pageName: string; data: any }>
    ) => {
      state.dataList[action.payload.pageName] = action.payload.data;
      state.dataTimestamps[action.payload.pageName] = Date.now();
      state.loading = false;
    },
    addData: (
      state,
      action: PayloadAction<{ pageName: string; data: any }>
    ) => {
      const { pageName, data } = action.payload;
      state.dataList[pageName] = [...state.dataList[pageName], data];
    },
    updateData: (
      state,
      action: PayloadAction<{ pageName: string; data: any }>
    ) => {
      const { pageName, data } = action.payload;
      const existingList = state.dataList[pageName] || [];

      const updatedList = existingList.map((item: any) =>
        item.id === data.id ? { ...item, ...data } : item
      );

      state.dataList[pageName] = updatedList;
    },
    removeData: (state, action: PayloadAction<string>) => {
      delete state.dataList[action.payload];
    },
    updateHeaderData: (
      state,
      action: PayloadAction<{ pageName: string; updates: Record<string, any> }>
    ) => {
      const { pageName, updates } = action.payload;

      const pageData = state.dataList[pageName][0];

      if (pageData && typeof pageData === "object") {
        Object.entries(updates).forEach(([key, value]) => {
          pageData[key] = value;
        });
      }
    },
    updatePlanData: (
      state,
      action: PayloadAction<{
        pageName: string;
        id: string;
        updates: Record<string, any>;
      }>
    ) => {
      const { pageName, id, updates } = action.payload;

      const list = state.dataList[pageName];
      const index = list.findIndex((item: any) => item.id === id);

      if (index !== -1) {
        state.dataList[pageName][index] = {
          ...list[index],
          ...updates,
        };
      }
    },
    deleteDataById: (
      state,
      action: PayloadAction<{
        pageName: string;
        id: string;
      }>
    ) => {
      const { pageName, id } = action.payload;

      const list = state.dataList[pageName];
      if (!list) return;

      state.dataList[pageName] = list.filter((item: any) => item.id !== id);
    },
    addPlanData: (
      state,
      action: PayloadAction<{
        pageName: string;
        data: Record<string, any>;
      }>
    ) => {
      const { pageName, data } = action.payload;
      state.dataList[pageName].push(data);
    },
    setSingleData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    setUpdateSingleData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    resetData: () => initialState,
  },
});

export const {
  setLoading,
  setData,
  addData,
  updateData,
  removeData,
  updateHeaderData,
  addPlanData,
  updatePlanData,
  deleteDataById,
  setSingleData,
  setUpdateSingleData,
  setFilter,
  resetData,
} = DataSlice.actions;
export default DataSlice.reducer;
