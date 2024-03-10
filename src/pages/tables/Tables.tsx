import { useDispatch, useSelector } from "react-redux"
import { changeModal } from "../../store/slices/tablesSlices"
import { RootState } from "../../store/store"
import ModalTables from "../../components/modal/ModalTables"
import { useEffect, useState } from "react"

const Tables = () => {
  const dispatch = useDispatch()
  const valueModal = useSelector((state: RootState) => state.tables.modal)
  const tables = useSelector((state: RootState) => state.tables.tables)
  const [tablesMap, setTablesMap] = useState<number[]>([])
  useEffect(() => {
    if (tables) {
      const tablesArray: number[] = Array.from({ length: tables })
      setTablesMap(tablesArray)
    }
  }, [tables])
  const onChangeValueModal = () => {
    dispatch(changeModal(!valueModal))
  }
  return (
    <div className="flex justify-end p-3 ">
      {tables === null && (
        <button onClick={onChangeValueModal} className="bg-blue-600 p-2 text-white font-bold rounded-md hover:bg-blue-700">¿Cuantas Mesas son?</button>
      )}
      <ModalTables />
      <div className="grid md:grid-cols-7 gap-10">
        {tablesMap.map((_, ind) => (
          <div key={ind} className="" >
            <img src="/mesa.png" alt="mesa" />
          </div>
        ))}
      </div>


    </div>
  )
}

export default Tables