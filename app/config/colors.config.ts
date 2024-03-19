const colorConfig = {
	primary: '#BF3355',
	'gray.400': '#626262',
	yellow: '#FBC903'
};

export const getColor = (color: keyof typeof colorConfig) => colorConfig[color];
