import { Box, Container, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import { graphql, Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Organisms/Layout'
import { ArticleModel, ArticleResponse } from '../models/ArticleModel'

const Rules: React.FunctionComponent<{ data: any }> = ({ data }) => {
	const [rules, rulesSet] = useState<ArticleModel[]>([])
	useEffect(() => {
		let model = data.allNodeArticle.nodes as ArticleModel[]
		rulesSet(model)
	}, [])

	return (
		<>
			<Layout>
				<>
					<Container>
						<h3>Rules</h3>
						<Typography variant='body2'>the content below is static and was generated by a build</Typography>
						<hr></hr>
						{rules && rules.length > 0 && (
							<Table>
								<TableBody>
									{rules.map((rule) => (
										<TableRow key={rule.id}>
											<TableCell>
												<Link to={rule.path.alias}>{rule.title}</Link>
											</TableCell>
											<TableCell>
												<Link to={rule.path.alias}>{rule.body.summary}</Link>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						)}
					</Container>
				</>
			</Layout>
		</>
	)
}
export const query = graphql`
	query {
		allNodeArticle(filter: { path: { alias: { glob: "*/Rule-G-*" } } }, sort: { fields: title, order: ASC }) {
			nodes {
				id
				title
				path {
					alias
				}
				body {
					summary
				}
			}
		}
	}
`
export default Rules