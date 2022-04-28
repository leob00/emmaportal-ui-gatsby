import { Container, styled, Typography } from '@mui/material'
import {
	ChartData,
	CoreChartOptions,
	DatasetChartOptions,
	ElementChartOptions,
	PluginChartOptions,
	ScatterDataPoint,
} from 'chart.js'
import { _DeepPartialObject } from 'chart.js/types/utils'
import React from 'react'
import { Line } from 'react-chartjs-2'
import { YieldCurveData } from '../../models/YieldCurveModel'

const YieldCurveChart: React.FunctionComponent<{ data: YieldCurveData }> = ({ data }) => {
	const lineChartOptions: _DeepPartialObject<
		CoreChartOptions<'line'> & ElementChartOptions<'line'> & PluginChartOptions<'line'> & DatasetChartOptions<'line'>
	> = {
		plugins: {
			legend: {
				display: false,
			},
		},
	}

	let chartCfg: ChartData<'line', (number | ScatterDataPoint)[], unknown> = {
		labels: data.Points.map((p) => p.X),
		datasets: [
			{
				label: 'Yield Curve',
				data: data.Points.map((p) => p.Y),
				fill: true,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.1,
			},
		],
	}

	const ChartWrapper = styled(Container)`
		width: 90%;
	`
	return (
		<ChartWrapper>
			<Line data={chartCfg} options={lineChartOptions} />
			<Typography color='gray' sx={{ textAlign: 'center' }}>
				years to maturity
			</Typography>
		</ChartWrapper>
	)
}

export default YieldCurveChart
