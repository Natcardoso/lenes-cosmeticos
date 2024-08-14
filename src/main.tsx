import './styles.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/index.tsx';
import { Sales } from './pages/Sales/index.tsx';
import { Customers } from './pages/Customers/index.tsx';
import { Storage } from './pages/Storage/index.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />,
	},
	{
		path: '/clientes',
		element: <Customers />,
	},
	{
		path: '/vendas',
		element: <Sales />,
	},
	{
		path: '/estoque',
		element: <Storage />,
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
