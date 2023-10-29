import React, { CSSProperties, Dispatch, SetStateAction } from 'react';

interface ArtizenProps {
    type: "square" | "square-with-name" | "horizontal";
    size?: number;
}
declare const Artizen: (props: ArtizenProps) => React.JSX.Element | null;

type HeaderMetaType = {
    label: string;
    dataKey: string;
    dataType: string;
    headerStyle?: CSSProperties;
    valueStyle?: CSSProperties;
    editable?: boolean;
};
type SNBObject = {
    [key: string]: string | number | boolean;
};

interface SheetTableProps {
    data: SNBObject[];
    onChangeData: Dispatch<SetStateAction<SNBObject[]>>;
    headers: HeaderMetaType[];
    editingMode?: boolean;
    showSlNo?: boolean;
}
declare const SheetTable: (props: SheetTableProps) => React.JSX.Element;

export { Artizen, type HeaderMetaType, type SNBObject, SheetTable };
