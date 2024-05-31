import React, { useState, lazy, Suspense } from 'react';

const RemoteApp1 = lazy(() => import('microApp1/app'));
// const RemoteApp2 = lazy(() => import('App2/RemoteApp2'));

function App() {
    const [activeApp, setActiveApp] = useState(null);

    const handleClick = (app) => {
        setActiveApp(app);
    };

    return (
        <div>
            <nav>
                <ul>
                    <li><span onClick={() => handleClick('App1')}>子应用1</span></li>
                    <li><span>子应用2</span></li>
                </ul>
            </nav>
            <div className="app-container">
                <Suspense fallback={<div>Loading...</div>}>
                    {activeApp === 'App1' && <RemoteApp1 />}
                    {/* {activeApp === 'App2' && <RemoteApp2 />} */}
                </Suspense>
            </div>
        </div>
    );
}

export default App;
