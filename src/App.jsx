import { Routes, Route } from "react-router-dom";

const importGlob = import.meta.glob(["./pages/**/index.jsx", "./pages/**/404.jsx"], {
  eager: true,
});

const routes = Object.keys(importGlob).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.jsx$/i)[1];
  const component = importGlob[path].default;

  if (name.endsWith("404")) {
    return {
      path: name === "404" ? "*" : `${name.replace(/404$/, "*")}`,
      component,
    };
  }

  return {
    path: name === "index" ? "" : `${name.replace(/index$/, "")}`,
    component,
  };
});

function App() {
  return (
    <Routes>
      {routes.map(({ path, component: Component }, index) => (
        <Route key={index} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}

export default App;
