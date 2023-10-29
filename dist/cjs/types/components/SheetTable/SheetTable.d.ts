import React, { Dispatch, SetStateAction } from "react";
import { HeaderMetaType, SNBObject } from "../../types";
import "./SheetTable.css";
export interface SheetTableProps {
    data: SNBObject[];
    onChangeData: Dispatch<SetStateAction<SNBObject[]>>;
    headers: HeaderMetaType[];
    editingMode?: boolean;
    showSlNo?: boolean;
}
declare const SheetTable: (props: SheetTableProps) => React.JSX.Element;
export default SheetTable;
