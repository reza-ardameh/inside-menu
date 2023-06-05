import type { SubMenuProps, Data } from './../../types'
import { ListItemContent } from ".."

/**
 * SubMenu
 *
 * show sub menu
 * 
 * @export
 * @param {SubMenuProps} {
 *         item, 
 *         handleInputData, 
 *         handlePrepairForChangeData, 
 *         subMenuState
 *     }
 * @return {JSX.Element} 
 */
export default function SubMenu({
  item,
  parentItem,
  subMenuState,
  handleInputData,
  handlePrepairForChangeData,
  handleRemoveData,
}: SubMenuProps) {

  /**
   * handleClick for show or close sub menu
   *
   * @param {React.MouseEvent<HTMLLIElement, MouseEvent>} e
   * @param {boolean} state
   */
  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, state: boolean) => {

    state ?
      e.currentTarget.querySelector('div')
        ?.querySelector('ul')
        ?.classList.remove('hidden') :
      document.body.querySelectorAll('li ul').forEach((item: Element) =>
        item.classList.add('hidden'))
  }

  // components props
  const subMenuProps = {
    parentItem: item,
    subMenuState,
    handleInputData,
    handlePrepairForChangeData,
    handleRemoveData,
  }

  const ListItemContentProps = {
    item,
    parentItem,
    handlePrepairForChangeData,
    handleRemoveData,
  }

  return (
    item.submenu ? <li onClick={(e) => handleClick(e, true)}
      className="ul__li--submenu-full" title={item.item}>
      <div className="ul__li-cover">
        <ListItemContent {...ListItemContentProps} existsSubMenu={true} />
        <ul className="menu__ul menu__ul--sub-ul hidden">
          {item.submenu.map((item: Data) =>
            <SubMenu
              key={item.key}
              item={item}
              {...subMenuProps}
            />
          )}
        </ul>
      </div>
    </li> :
      <li onClick={(e) => handleClick(e, false)}
        className=".ul__li--submenu-less" title={item.item}>
        <ListItemContent
          {...ListItemContentProps}
          classes='ul__li--submenu-less-action-container'
        />
      </li>
  )
}