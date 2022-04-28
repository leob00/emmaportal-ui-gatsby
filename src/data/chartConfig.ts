export const getDefaultOptions = () => {
	return {
		interaction: {
			mode: 'index',
			//intersect: false,
		},
		radius: 0,
		responsive: true,
		maintainAspectRatio: true,

		hover: {
			mode: 'nearest',
			intersect: false,
			displayColors: false,
		},

		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				titleColor: 'black',
				bodyColor: 'black',
				borderColor: 'black',
				bodySpacing: 8,
				backgroundColor: 'rgba(255, 136, 0, 0.822)',
				color: 'rgba(231, 184, 50, 0.9)',
				displayColors: false,
				usePointStyle: true,
				padding: 10,
				borderWidth: 2,
				caretSize: 8,

				//bodyColor: 'green'
			},
			decimation: {
				enabled: true,
				algorithm: 'lttb',

				//samples : 5
			},
		},
		scales: {
			y: {
				ticks: {
					beginAtZero: true,
					hoverRadius: 3,
					color: 'rgba(203, 241, 247, 0.932)',
				},
				grid: {
					//color: "black"
				},
			},
			x: {
				display: true,
				color: 'rgba(231, 184, 50, 0.62)',
				ticks: {
					color: 'rgba(166, 186, 194, 0.911)',
				},
				grid: {
					//color: "black"
				},
			},
		},
	}
}
