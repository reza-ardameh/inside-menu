import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faEdit, faTrash, faEllipsisVertical, faAngleRight }
    from '@fortawesome/free-solid-svg-icons'
import { cutText } from "../../lib"
import { Data, handlePrepairForChangeData } from "../../types"

// types 
type ListItemContentProps = {
    classes?: string,
    item: Data,
    parentItem: Data | Data[]
    existsSubMenu?: boolean,
    handleRemoveData: (item: Data, parentItem: Data | Data[]) => void,
    handlePrepairForChangeData: handlePrepairForChangeData
}

export default function ListItemContent({
    handlePrepairForChangeData,
    item,
    parentItem,
    classes,
    existsSubMenu,
    handleRemoveData,
}: ListItemContentProps) {
    return (
        <div className={`ul__li-action-container ${classes}`}>
            <div className="ul__li-icons-container">
                <div className="ul__add-icon-container">
                    <FontAwesomeIcon className="hover:text-gray-700" icon={faEllipsisVertical} />
                    <div className="ul__li-actions-wrapper">
                        <div className="ul__li-actions">
                            <FontAwesomeIcon onClick={() => handleRemoveData(item, parentItem)} className="hover:text-red-400" color="red" icon={faTrash} />
                            <FontAwesomeIcon
                                className="hover:text-yellow-400"
                                color="yellow" icon={faEdit}
                                onClick={() =>
                                    handlePrepairForChangeData(true, false, item)
                                }
                            />
                            <FontAwesomeIcon
                                className="hover:text-cyan-400"
                                color="cyan" icon={faPlus}
                                onClick={() =>
                                    handlePrepairForChangeData(true, true, item.submenu ? item.submenu : item)
                                }
                            />
                        </div>
                    </div>
                </div>
                <span className="ul__li-item">{cutText(item.item, 10)}</span>
            </div>
            {
                existsSubMenu &&
                <span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </span>
            }
        </div>
    )
}
