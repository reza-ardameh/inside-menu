import { initialData } from "./utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { Input, Menu } from "./components";
import type {
  InitialData,
  SubMenuState,
  onCheangeEvent,
  Data
} from './types'

function App() {

  // define states
  let [data, setData] = useState<InitialData>(initialData)
  let [inputData, setInputData] = useState<string>('')
  let [isShowInput, setIsShowInput] = useState<boolean>(false)
  let [isAddInput, setIsAddInput] = useState<boolean>(true)
  let [subMenuState, setSubMenuState] = useState<SubMenuState | null>(null)

  /**
   * set input data in state
   *
   * @param {onCheangeEvent} e
   */
  const handleInputData = (e: onCheangeEvent): void => {

    setInputData(() => e.target.value)
  }


  /**
   * call setInputData function 
   * call setIsShowInput fuction
   * call set is add input function
   * call setIsShowInput function
   *
   * @param {boolean} showState
   * @param {boolean} isAdd
   * @param {SubMenuState} [subMenu]
   */
  const handlePrepairForChangeData = (
    showState: boolean,
    isAdd: boolean,
    subMenu?: SubMenuState,
  ) => {
    
    subMenu && setSubMenuState(() => subMenu)
    setInputData(() => '')
    setIsAddInput(() => isAdd)
    setIsShowInput(() => showState)
  }

  /**
   * add item to menu
   *
   * @param {string} value
   */
  const handleAddData = (value: string) => {

    const trimValue = value.trim()

    if (trimValue === '') {
      return
    }

    setInputData(() => '')

    if (Array.isArray(subMenuState)) {

      subMenuState.push({
        key: subMenuState.length + 1,
        item: trimValue,
        submenu: null
      })

      setData(() => ({ ...data }))

      return
    }

   if(subMenuState) {
    subMenuState.submenu = []

    subMenuState.submenu.push({
      key: subMenuState.submenu.length + 1,
      item: trimValue,
      submenu: null
    })
    setSubMenuState(subMenuState.submenu)
   }

    setData(() => ({ ...data }))
  }

  /**
   * remove item from menu or sub menus
   *
   * @param {Data} item
   * @param {Data} parentItem
   */
  const handleRemoveData = (item: Data, parentItem: Data | Data[]) => {
    const key = item.key;

    if (Array.isArray(parentItem)) {

      const newData = parentItem.filter((obj: Data): boolean => obj.key !== key)

      setData(() => ({ menu: newData }))


    } else if (parentItem.submenu) {

      let newData: Data[] | null = parentItem.submenu.filter((obj: Data): boolean => obj.key !== key)
      if (!newData.length) {
        newData = null
      }
      parentItem.submenu = newData

      setData(() => ({ ...data }))
    }

  }

  /**
   * edit item from menu or sub menus
   *
   * @param {string} newValue
   */
  const handleEditData = (newValue: string) => {

    if (!Array.isArray(subMenuState) && subMenuState) {

      subMenuState.item = newValue

      setData(() => ({ ...data }))

    }

  }

  const handleClick = () => {
    {
      document.body.querySelectorAll('li ul')
        .forEach((item: Element) => item.classList.add('hidden'))
    }
  }

  //  components props
  const menuProps = {
    data,
    subMenuState,
    handlePrepairForChangeData,
    handleInputData,
    handleRemoveData,
  }

  const inputProps = {
    inputData,
    handlePrepairForChangeData,
    handleInputData,
    handleAddData,
    handleEditData,
    isShowInput,
    isAddInput,
  }

  return (
    <main className="main"  >

      {/* menu */}
      <section onClickCapture={handleClick}
        className="menu-container"
      >
        {/* add to menu */}
        <div onClick={() =>
          handlePrepairForChangeData(true, true, data.menu)
        }
          className="add-component">
          <span>اضافه به لیست اصلی</span>
          <FontAwesomeIcon icon={faPlus} />
        </div>

        {/* show menu */}
        <div className="menu">
          <Menu {...menuProps} />
        </div>
      </section>
      {/* menu actions */}
      <section className={`input ${isShowInput && 'fixed bg-sky-glass h-screen'}`}>
        <Input {...inputProps} />
      </section>
    </main>
  );
}

export default App;
