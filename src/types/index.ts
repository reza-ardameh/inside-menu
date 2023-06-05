 // types
 export type InitialData = {
    menu: Data[]
  }
  export type Data = {
    key: number,
    item: string,
    submenu: null | Data[]
  }

  export type handlePrepairForChangeData = (
    showState: boolean,
    isAdd: boolean, 
    subMenu?: SubMenuState, 
    ) => void

  export type onCheangeEvent =  React.ChangeEvent<HTMLInputElement>

  export type SubMenuState = Data | Data[]

  export type PartialComponentProps = {
    handlePrepairForChangeData: handlePrepairForChangeData;
    handleInputData: (e: onCheangeEvent)=> void;
  }

  export type PartialMenuComponentProps = {
    subMenuState: SubMenuState | null;
    handleRemoveData: (item: Data, parentItem: Data | Data[]) => void;
  }

  export type MenuProps = PartialMenuComponentProps & PartialComponentProps & {
    data: InitialData
  }

  export type SubMenuProps = PartialMenuComponentProps & PartialComponentProps & {
    item: Data
    parentItem: Data[] | Data
  }

  export type InputProps = PartialComponentProps & {
    inputData: string;
    handleAddData: (value: string) => void;
    handleEditData: (newValue: string) => void;
    isShowInput: boolean;
    isAddInput: boolean;
}