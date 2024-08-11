import { RouteObject } from 'react-router-dom'
import App from '../App.tsx'
import ErrorPage from '../error-page.tsx'
import Main from '../routes/redux/index.tsx'
import Contact, { action as contactAction, loader as contactLoader } from '../routes/router/contact'
import { action as destroyAction } from '../routes/router/destroy.tsx'
import EditContact, { action as editAction } from '../routes/router/edit.tsx'
import Index from '../routes/router/index'
import Root, { action as rootAction, loader as rootLoader } from '../routes/router/root.tsx'

const routes: RouteObject[] = [
	{
		path: '/',
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <App />
			},
			{
				path: '/router',
				element: <Root />,
				loader: rootLoader,
				action: rootAction,
				children: [
					{
						errorElement: <ErrorPage />,
						children: [
							{
								index: true,
								element: <Index />
							},
							{
								path: 'contacts/:contactId',
								element: <Contact />,
								loader: contactLoader,
								action: contactAction
							},
							{
								path: 'contacts/:contactId/edit',
								element: <EditContact />,
								loader: contactLoader,
								action: editAction
							},
							{
								path: 'contacts/:contactId/destroy',
								action: destroyAction,
								errorElement: <div>Oops! There was an error.</div>
							}
						]
					}
				]
			},
			{
				path: '/redux',
				element: <Main />
			}
		]
	}
]

export { routes }
