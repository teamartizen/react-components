import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import CellInput from "./CellInput";
import { HeaderMetaType, SNBObject } from "../../types";
import "./SheetTable.css";

export interface SheetTableProps {
	data: SNBObject[];
	onChangeData: Dispatch<SetStateAction<SNBObject[]>>;
	headers: HeaderMetaType[];
	editingMode?: boolean;
	showSlNo?: boolean;
}

const SheetTable = (props: SheetTableProps) => {
	const {
		data,
		onChangeData,
		headers,
		editingMode = true,
		showSlNo = true,
	} = props;

	const [activeIndices, setActiveIndices] = useState<{
		row: number;
		col: number;
	}>({ row: -1, col: -1 });

	const rows = data.map((dataLine) =>
		headers.map((header) => ({
			value: dataLine[header.dataKey],
			dataType: header.dataType,
			style: header.valueStyle || {},
			editable: !!header.editable,
		}))
	);

	const handleCellContentUpdate = (newValue: string | number | boolean) => {
		const { row: activeRowIndex, col: activeColIndex } = activeIndices;

		const updatedData = [...data];
		const updatingKey = headers[activeColIndex].dataKey;
		updatedData[activeRowIndex][updatingKey] = newValue;
		onChangeData(updatedData);
	};

	const goToRightCell = () => {
		const { row: activeRowIndex, col: activeColIndex } = activeIndices;
		const colsEditable = headers.map((header) => !!header.editable);

		let newColIndex = activeColIndex;
		while (true) {
			newColIndex = (newColIndex + 1) % headers.length;
			if (colsEditable[newColIndex] || newColIndex === activeColIndex) break;
		}

		setActiveIndices({
			row: activeRowIndex,
			col: newColIndex,
		});
	};

	const goToLeftCell = () => {
		const { row: activeRowIndex, col: activeColIndex } = activeIndices;
		const colsEditable = headers.map((header) => !!header.editable);

		let newColIndex = activeColIndex;
		while (true) {
			newColIndex = (newColIndex - 1 + headers.length) % headers.length;
			if (colsEditable[newColIndex] || newColIndex === activeColIndex) break;
		}

		setActiveIndices({
			row: activeRowIndex,
			col: newColIndex,
		});
	};

	const goToDownCell = () => {
		setActiveIndices((current) => {
			const { row, col } = current;
			return {
				row: (row + 1) % rows.length,
				col,
			};
		});
	};

	const goToUpCell = () => {
		setActiveIndices((current) => {
			const { row, col } = current;
			return {
				row: (row - 1 + rows.length) % rows.length,
				col,
			};
		});
	};

	const goToNextLineFirstCell = () => {
		const colsEditable = headers.map((header) => !!header.editable);

		const firstEditableCellIndex = colsEditable.findIndex(
			(editable) => editable
		);

		setActiveIndices((current) => {
			const { row } = current;
			return {
				row: (row + 1) % rows.length,
				col: firstEditableCellIndex,
			};
		});
	};

	const goToNextCell = () => {
		const { row: activeRowIndex, col: activeColIndex } = activeIndices;
		const colsEditable = headers.map((header) => !!header.editable);

		let newColIndex = activeColIndex;
		while (newColIndex < headers.length) {
			newColIndex += 1;
			if (colsEditable[newColIndex]) {
				setActiveIndices({
					row: activeRowIndex,
					col: newColIndex,
				});
				return;
			}
		}

		const firstEditableCellIndex = colsEditable.findIndex(
			(editable) => editable
		);

		setActiveIndices({
			row: (activeRowIndex + 1) % rows.length,
			col: firstEditableCellIndex,
		});
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (activeIndices.row < 0 || activeIndices.col < 0) return;

		const pressedKey = event.key;

		switch (pressedKey) {
			case "Escape":
				event.preventDefault();
				setActiveIndices({ row: -1, col: -1 });
				break;
			case "ArrowRight":
				event.preventDefault();
				goToRightCell();
				break;
			case "ArrowLeft":
				event.preventDefault();
				goToLeftCell();
				break;
			case "ArrowUp":
				event.preventDefault();
				goToUpCell();
				break;
			case "ArrowDown":
				event.preventDefault();
				goToDownCell();
				break;
			case "Enter":
				event.preventDefault();
				goToNextLineFirstCell();
				break;
			case "Tab":
				event.preventDefault();
				goToNextCell();
				break;
			default:
				return;
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [activeIndices]);

	return (
		<div className="SheetTable">
			<table className="SheetTable__table">
				<thead className="SheetTable__table__thead">
					<tr>
						{showSlNo && <td className="sl_no_column header_column"></td>}
						{headers.map((header, ind) => (
							<td
								key={ind}
								className="header_column"
								style={header.headerStyle}
							>
								{header.label}
							</td>
						))}
					</tr>
				</thead>
				<tbody className="SheetTable__table__tbody">
					{rows.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{showSlNo && (
								<td className="sl_no_column header_column">{rowIndex + 1}</td>
							)}
							{row.map((col, colIndex) => {
								const classNames = [];
								const isCellActive =
									activeIndices.row === rowIndex &&
									activeIndices.col === colIndex;

								if (col.editable && editingMode) {
									classNames.push("editable_cell");
								}

								if (isCellActive) {
									classNames.push("active_cell");
								}

								return (
									<td
										key={colIndex}
										style={col.style}
										className={classNames.join(" ")}
										onClick={() => {
											if (col.editable) {
												setActiveIndices({ row: rowIndex, col: colIndex });
											}
										}}
									>
										{isCellActive ? (
											<CellInput
												dataType={col.dataType}
												value={col.value}
												onChange={(event) => {
													handleCellContentUpdate(event.target.value);
												}}
											/>
										) : (
											col.value
										)}
									</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default SheetTable;
