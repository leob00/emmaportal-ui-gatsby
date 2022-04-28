import { Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { RouteComponentProps } from '@reach/router'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Organisms/Layout'

interface User {
	name: {
		title: string
		first: string
		last: string
	}
	location: {
		street: {
			number: number
			name: string
		}
		city: string
		state: string
		country: string
	}
}

const People: React.FC<RouteComponentProps> = () => {
	const [apiData, setApiData] = useState<User[]>([])

	const getApiData = async () => {
		fetch('https://randomuser.me/api/?results=50').then((m) => {
			m.json().then((data) => {
				setApiData(data.results)
			})
		})
	}

	useEffect(() => {
		getApiData()
	}, [])

	return (
		<Layout>
			<div>
				<h3>People</h3>
				<Typography variant='body2'>the content below is client-side rendered</Typography>
				<hr></hr>
			</div>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>
							<h5>Name</h5>
						</TableCell>
						<TableCell>
							<h5>State</h5>
						</TableCell>
						<TableCell>
							<h5>Country</h5>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{apiData.map((user) => (
						<TableRow key={`${user.name.first}${user.name.last}`}>
							<TableCell>{`${user.name.first} ${user.name.last}`}</TableCell>
							<TableCell>{`${user.location.state}`}</TableCell>
							<TableCell>{`${user.location.country}`}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Layout>
	)
}
export default People
