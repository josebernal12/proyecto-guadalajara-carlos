import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITables } from '../../models/tables.interfaces'

const initialState: ITables = {
  tables: null,
  modal: false
}

const tablesSlices = createSlice({
  name: 'tables',
  initialState,
  reducers: {
    changeModal(state, action: PayloadAction<boolean>) {
      state.modal = action.payload
    },
    addTables(state, action: PayloadAction<number>) {
      state.tables = action.payload
    }
  }
})

export const { changeModal, addTables } = tablesSlices.actions
export default tablesSlices.reducer

