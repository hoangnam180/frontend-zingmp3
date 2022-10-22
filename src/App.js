import DefaultLayout from '~/layouts/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        if (!route.children) {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <DefaultLayout>
                                            <Page />
                                        </DefaultLayout>
                                    }
                                />
                            );
                        } else {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <DefaultLayout>
                                            <Page />
                                        </DefaultLayout>
                                    }
                                >
                                    {route?.children.map((item, index) => {
                                        const PageChild = item?.component;
                                        return (
                                            <Route
                                                key={index}
                                                index={item?.index}
                                                path={item?.path}
                                                element={<PageChild />}
                                            />
                                        );
                                    })}
                                </Route>
                            );
                        }
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
