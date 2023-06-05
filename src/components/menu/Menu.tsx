import { SubMenu } from '..'
import { MenuProps, Data } from './../../types'

/**
 * menu component
 * 
 * show the menu
 *
 * @export
 * @param {MenuProps} {
 *     data, 
 *     handlePrepairForChangeData, 
 *     handleInputData, 
 *     subMenuState
 * }
 * @return {JSX.Element} 
 */
export default function Menu({
  data,
  handlePrepairForChangeData,
  handleRemoveData,
  handleInputData,
  subMenuState,
}: MenuProps) {

  const subMenuProp = {
    parentItem: data.menu,
    subMenuState,
    handlePrepairForChangeData,
    handleInputData,
    handleRemoveData,
  }

  return (
    data.menu.length > 0 ?
      <ul className="menu__ul inline-block">
        {
          data.menu.map((item: Data) =>
            <SubMenu
              key={item.key}
              item={item}
              {...subMenuProp}
            />
          )
        }
      </ul> :
      <div className='no-data-container'>رکوردی وجود ندارد</div>
  )
}
