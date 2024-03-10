import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { addTables, changeModal } from '../../store/slices/tablesSlices';
import { useState } from 'react'
const ModalTables = () => {
  const valueModal = useSelector((state: RootState) => state.tables.modal)
  const dispatch = useDispatch()
  const [tables, setTables] = useState(0)
  const onChangeValueModal = () => {
    dispatch(changeModal(!valueModal))
  }
  const onAddTables = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addTables(tables))
    dispatch(changeModal(!valueModal))
  }
  return (
    <>

      {valueModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50" onClick={() => onChangeValueModal()}></div>
          <div className="bg-white p-8 rounded shadow-lg z-10 w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Numero de Mesas</h2>
              <button onClick={() => onChangeValueModal()} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={onAddTables} className='flex flex-col '>
              <label htmlFor="">Cuantas Mesas Tienen</label>
              <input onChange={(e) => setTables(Number(e.target.value))} type="number" min={1} className='p-2 text-left mt-3' placeholder='num de mesas' />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalTables;
