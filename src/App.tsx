import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from './routes';

// Styles
import './assets/css/grid.css';
import './assets/css/common.css';

const AppRoutes = () => {
    const element = useRoutes(routes);
    return element;
};

const App = () => {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
};

export default App;
