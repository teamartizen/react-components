import React from "react";
export interface ArtizenProps {
    type: "square" | "square-with-name" | "horizontal";
    size?: number;
}
declare const Artizen: (props: ArtizenProps) => React.JSX.Element | null;
export default Artizen;
