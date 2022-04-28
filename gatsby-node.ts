import path from 'path'

/* exports.createSchemaCustomization = ({actions}) => {
  actions.createTypes(`
    type summary implements Node
  `)
}
  */

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions

	const result = await graphql(`
		{
			allNodeArticle {
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
	`)
	let data = result.data.allNodeArticle.nodes
	const articlesPath = path.resolve(`src/template/Article.tsx`)
	const rulesPath = path.resolve(`src/template/Rules.tsx`)
	const aboutEmmaPath = path.resolve(`src/template/AboutEmma.tsx`)

	createPage({
		path: '/Rules',
		component: rulesPath,
		context: {
			Search: 'Rule-G-',
		},
	})

	createPage({
		path: '/AboutEmma',
		component: aboutEmmaPath,
	})

	data.map((articleData) =>
		createPage({
			path: articleData.path.alias,
			component: articlesPath,
			context: {
				ArticleId: articleData.id,
			},
		})
	)
}
