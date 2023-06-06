import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons'
import type { InputProps } from "../../types"

/**
 *  Input commponent
 * 
 * get sub menu
 *
 * @export
 * @param {InputProps} {
 *     inputData, 
 *     handlePrepairForChangeData, 
 *     handleInputData, 
 *     handleAddData,
 *     isShowInput
 * }
 * @return {JSX.Element} 
 */
export default function Input({
  inputData,
  handlePrepairForChangeData,
  handleInputData,
  handleAddData,
  handleEditData,
  isShowInput,
  isAddInput,
}: InputProps) {

  return (
    <>
      {
        isShowInput && <div className="input__container">
          <input autoFocus id="input" className="input__tag"
            value={inputData}
            onChange={handleInputData}
            type="text" />
          <div className="input__action-container">
            <div className="input__action" onClick={() =>
              isAddInput ? handleAddData(inputData) : handleEditData(inputData)
            }>
              <FontAwesomeIcon color="greenyellow" icon={faCheck} />
            </div>
            <div className="input__action" onClick={() =>
              handlePrepairForChangeData(false, true)
            }>
              <FontAwesomeIcon icon={faClose} color="red" />
            </div>
          </div>
        </div>
      }
    </>
  )
}
