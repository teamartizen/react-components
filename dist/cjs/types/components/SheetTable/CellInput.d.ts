import React, { ChangeEvent } from "react";
export interface CellInputProps {
    dataType: string;
    value: string | number | boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
declare const CellInput: (props: CellInputProps) => React.JSX.Element;
export default CellInput;
