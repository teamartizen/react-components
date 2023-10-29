import React, { ChangeEvent, useEffect, useRef } from "react";

export interface CellInputProps {
	dataType: string;
	value: string | number | boolean;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CellInput = (props: CellInputProps) => {
	const inputRef = useRef<any>(null);

	const { value, dataType, onChange } = props;

	let stringValue: string = "";
	let numberValue: number = 0;
	let booleanValue: boolean = false;

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	switch (dataType) {
		case "string":
			stringValue = value as string;
			return (
				<input
					ref={inputRef}
					className="active_cell__input"
					value={stringValue}
					onChange={onChange}
				/>
			);
		case "number":
			numberValue = value as number;
			numberValue = isNaN(numberValue) ? 0 : numberValue;
			return (
				<input
					ref={inputRef}
					type="number"
					className="active_cell__input"
					value={numberValue}
					onChange={onChange}
				/>
			);
		case "boolean":
			booleanValue = !!value;
			return (
				<input
					ref={inputRef}
					type="checkbox"
					className="active_cell__input"
					checked={booleanValue}
					onChange={onChange}
				/>
			);
		default:
			return <></>;
	}
};

export default CellInput;
