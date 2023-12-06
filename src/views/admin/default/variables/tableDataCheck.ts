type RowObj = {
	name: string;
	price: number;
	change: string;
	date: string;
	trade: string;
};

const tableDataCheck: RowObj[] = [
	{
		name: 'MX/USDT',
		price: 2458,
		change: '17.5%',
		date: '12 Jan 2021',
		trade: 'Trade'
	},
	{
		name: 'MX/USDT',
		price: 1485,
		change: '10.8%',
		date: '21 Feb 2021',
		trade: 'Trade'
	},
	{
		name: 'MX/USDT',
		price: 1024,
		change: '21.3%',
		date: '13 Mar 2021',
		trade: 'Trade'
	},
	{
		name: 'MX/USDT',
		price: 858,
		change: '31.5%',
		date: '24 Jan 2021',
		trade: 'Trade'
	},
	{
		name: 'MX/USDT',
		price: 258,
		change: '12.2%',
		date: '24 Oct 2022',
		trade: 'Trade'
	}
];

export default tableDataCheck;
