import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Assets = lazy(() => import("./pages/Assets"));
const News = lazy(() => import("./pages/News"));
const Alerts = lazy(() => import("./pages/Alerts"));
function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/news" element={<News />} />
          <Route path="/alerts" element={<Alerts />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
