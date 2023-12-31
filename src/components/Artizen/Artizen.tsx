import React from "react";

export interface ArtizenProps {
	type?: "square" | "square-with-name" | "horizontal";
	size?: number;
}

const Artizen = (props: ArtizenProps) => {
	const { type = "square", size = 250 } = props;

	if (type === "square") {
		return (
			<svg
				width={size}
				height={size}
				viewBox="0 0 3840 3840"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M600 3300H1470L2340 1230H1470L600 3300Z"
					fill="url(#paint0_linear_16_13)"
					stroke="url(#paint1_linear_16_13)"
					strokeWidth="1.71409"
					strokeLinejoin="round"
				/>
				<path
					d="M390 570L678.679 1234.44H1573.59L2439.62 3300H3305.66L2439.62 1234.44H3450C3274.71 830.976 2876.95 570 2437.31 570H390Z"
					fill="url(#paint2_radial_16_13)"
					stroke="url(#paint3_linear_16_13)"
					strokeWidth="1.71409"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_16_13"
						x1="-531.646"
						y1="2344.58"
						x2="2574.65"
						y2="969.446"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0.530547" stopColor="#116A7B" />
						<stop offset="1" stopColor="#062227" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_16_13"
						x1="-531.646"
						y1="2344.58"
						x2="2574.65"
						y2="969.446"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0.495177" stopColor="#116A7B" />
						<stop offset="1" stopColor="#0A4650" />
					</linearGradient>
					<radialGradient
						id="paint2_radial_16_13"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(410.922 560.61) rotate(89.8282) scale(7512.02 6681.97)"
					>
						<stop stopColor="#C2DEDC" />
						<stop offset="0.572347" stopColor="#7AB7B3" />
					</radialGradient>
					<linearGradient
						id="paint3_linear_16_13"
						x1="367.985"
						y1="1935"
						x2="3472.02"
						y2="1935"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#C2DEDC" />
						<stop offset="0.578778" stopColor="#7AB7B3" />
					</linearGradient>
				</defs>
			</svg>
		);
	}

	if (type === "square-with-name") {
		return (
			<svg
				width={size}
				height={size}
				viewBox="0 0 3840 3840"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M600 2940H1470L2340 870H1470L600 2940Z"
					fill="url(#paint0_linear_16_37)"
					stroke="url(#paint1_linear_16_37)"
					strokeWidth="1.71409"
					strokeLinejoin="round"
				/>
				<path
					d="M390 210L678.679 874.444H1573.59L2439.62 2940H3305.66L2439.62 874.444H3450C3274.71 470.976 2876.95 210 2437.31 210H390Z"
					fill="url(#paint2_radial_16_37)"
					stroke="url(#paint3_linear_16_37)"
					strokeWidth="1.71409"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M511.992 3652H416.367L629.766 3149.27H729.961L947.93 3652H847.734L790.43 3514.89H623.438L655.43 3434.03H756.68L677.578 3245.24L511.992 3652ZM1009.45 3651.3V3149.27H1237.97C1340.62 3149.27 1391.95 3194.15 1391.95 3283.91C1391.95 3344.62 1351.99 3394.89 1272.07 3434.73L1431.33 3652H1313.91L1160.98 3432.98V3390.44C1250.04 3375.2 1294.57 3340.63 1294.57 3286.73C1294.57 3249.7 1273.71 3231.18 1231.99 3231.18H1104.38V3651.3H1009.45ZM1804.34 3149.27V3230.12H1660.2V3652H1567.03V3230.12H1422.89V3149.27H1804.34ZM1950.59 3149.27V3652H1857.42V3149.27H1950.59ZM2420.27 3149.27V3230.12L2152.73 3571.14H2420.27V3652H2047.62V3571.14L2326.76 3230.12H2054.65V3149.27H2420.27ZM2840.04 3149.27V3229.42H2588.32V3355.98H2828.09V3439.3H2587.27V3571.14H2844.96V3652H2495.86V3149.27H2840.04ZM2931.09 3652V3149.27H3024.26L3289.69 3515.59V3149.27H3379.34V3652H3286.17L3020.74 3277.94V3652H2931.09Z"
					fill="url(#paint4_linear_16_37)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_16_37"
						x1="-531.646"
						y1="1984.58"
						x2="2574.65"
						y2="609.446"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0.530547" stopColor="#116A7B" />
						<stop offset="1" stopColor="#062227" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_16_37"
						x1="-531.646"
						y1="1984.58"
						x2="2574.65"
						y2="609.446"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0.495177" stopColor="#116A7B" />
						<stop offset="1" stopColor="#0A4650" />
					</linearGradient>
					<radialGradient
						id="paint2_radial_16_37"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(410.922 200.61) rotate(89.8282) scale(7512.02 6681.97)"
					>
						<stop stopColor="#C2DEDC" />
						<stop offset="0.572347" stopColor="#7AB7B3" />
					</radialGradient>
					<linearGradient
						id="paint3_linear_16_37"
						x1="367.985"
						y1="1575"
						x2="3472.02"
						y2="1575"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#C2DEDC" />
						<stop offset="0.578778" stopColor="#7AB7B3" />
					</linearGradient>
					<linearGradient
						id="paint4_linear_16_37"
						x1="4065"
						y1="3270"
						x2="630"
						y2="3270"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#C2DEDC" />
						<stop offset="1" stopColor="#0A4650" />
						<stop offset="1" stopColor="#0A4650" />
					</linearGradient>
				</defs>
			</svg>
		);
	}

	if (type === "horizontal") {
		return (
			<svg
				width={size}
				height={(size * 1584) / 3840}
				viewBox="0 0 3840 1584"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M991.875 1067.25V531.75H1235.62C1345.12 531.75 1399.88 579.625 1399.88 675.375C1399.88 740.125 1357.25 793.75 1272 836.25L1441.88 1068H1316.62L1153.5 834.375V789C1248.5 772.75 1296 735.875 1296 678.375C1296 638.875 1273.75 619.125 1229.25 619.125H1093.12V1067.25H991.875ZM1839.75 531.75V618H1686V1068H1586.62V618H1432.88V531.75H1839.75ZM1995.75 531.75V1068H1896.38V531.75H1995.75ZM2496.75 531.75V618L2211.38 981.75H2496.75V1068H2099.25V981.75L2397 618H2106.75V531.75H2496.75ZM2944.5 531.75V617.25H2676V752.25H2931.75V841.125H2674.88V981.75H2949.75V1068H2577.38V531.75H2944.5ZM3041.62 1068V531.75H3141L3424.12 922.5V531.75H3519.75V1068H3420.38L3137.25 669V1068H3041.62Z"
					fill="url(#paint0_linear_15_2)"
				/>
				<path
					d="M360 1056H534L708 648H534L360 1056Z"
					fill="url(#paint1_linear_15_2)"
					stroke="url(#paint2_linear_15_2)"
					strokeWidth="1.71409"
					strokeLinejoin="round"
				/>
				<path
					d="M324 516L380.604 647.429H556.076L725.887 1056H895.698L725.887 647.429H924C889.629 567.622 811.636 516 725.434 516H324Z"
					fill="url(#paint3_radial_15_2)"
					stroke="url(#paint4_linear_15_2)"
					strokeWidth="1.71409"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_15_2"
						x1="4157.06"
						y1="809.999"
						x2="1112.71"
						y2="809.999"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#C2DEDC" />
						<stop offset="1" stopColor="#0A4650" />
						<stop offset="1" stopColor="#0A4650" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_15_2"
						x1="133.671"
						y1="867.686"
						x2="751.929"
						y2="589.962"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0.530547" stopColor="#116A7B" />
						<stop offset="1" stopColor="#062227" />
					</linearGradient>
					<linearGradient
						id="paint2_linear_15_2"
						x1="133.671"
						y1="867.686"
						x2="751.929"
						y2="589.962"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0.495177" stopColor="#116A7B" />
						<stop offset="1" stopColor="#0A4650" />
					</linearGradient>
					<radialGradient
						id="paint3_radial_15_2"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(328.102 514.143) rotate(89.8297) scale(1485.89 1310.19)"
					>
						<stop stopColor="#C2DEDC" />
						<stop offset="0.572347" stopColor="#7AB7B3" />
					</radialGradient>
					<linearGradient
						id="paint4_linear_15_2"
						x1="319.683"
						y1="786"
						x2="928.317"
						y2="786"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#C2DEDC" />
						<stop offset="0.578778" stopColor="#7AB7B3" />
					</linearGradient>
				</defs>
			</svg>
		);
	}

	return null;
};

export default Artizen;
