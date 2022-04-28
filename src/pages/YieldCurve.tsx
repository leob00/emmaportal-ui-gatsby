import React, { useEffect, useState } from 'react'
import Layout from '../components/Organisms/Layout'
import { getYieldCurveData } from '../data/yieldCurveData'
import { YieldCurveData } from '../models/YieldCurveModel'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import { Button, Container, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { _DeepPartialObject } from 'chart.js/types/utils'
import YieldCurveChart from '../components/Organisms/YieldCurveChart'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const YieldCurve: React.FunctionComponent<{}> = ({}) => {
	const [apiData, setApiData] = useState<YieldCurveData | null>(null)
	const [showTable, setShowTable] = useState(false)

	let request: RequestInit = {
		method: 'get',
		headers: {},
	}
	const loadApiData = async () => {
		let data = await getYieldCurveData()
		setApiData(data)
	}

	const handleChartToggle = () => {
		let toggleTable = !showTable
		setShowTable(toggleTable)
	}

	useEffect(() => {
		loadApiData()
	}, [])

	return (
		<Layout>
			<Container sx={{ padding: '10px' }}>
				<Container>
					<h3>Yield Curve</h3>
					<Typography variant='body1'>
						the content below was created using CSR - Client Side Rendering and is regenerated on every visit to the
						page
					</Typography>
					<hr></hr>
				</Container>
				{showTable ? (
					<Container sx={{ textAlign: 'center' }}>
						<Button variant='contained' color='primary' onClick={handleChartToggle}>
							show chart
						</Button>
						<Container sx={{ width: '350px' }}>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell>Years to maturity</TableCell>
										<TableCell>Yield</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{apiData?.Points.map((item, index) => (
										<TableRow key={index}>
											<TableCell>{item.X}</TableCell>
											<TableCell>{item.Y}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Container>
					</Container>
				) : (
					<Container sx={{ textAlign: 'center' }}>
						<Button variant='contained' color='primary' onClick={handleChartToggle}>
							show table
						</Button>
						<Container sx={{ paddingTop: '20px' }}>{apiData && <YieldCurveChart data={apiData} />}</Container>
					</Container>
				)}
			</Container>
		</Layout>
	)
}
export default YieldCurve
