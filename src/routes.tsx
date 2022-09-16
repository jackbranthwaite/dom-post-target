import React, { ComponentType, Fragment, lazy, Suspense } from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
// import { LoadingAnimation } from "./components/LoadingAnimation";

const PRESERVED = import.meta.globEager("/src/pages/(_app|404).tsx");
const ROUTES = import.meta.glob("/src/pages/**/[a-z[]*.tsx");

interface IPreserved {
  [key: string]: ComponentType<any>;
}

type TGlobPromise = () => Promise<{
  [key: string]: any;
}>;

const preserved: IPreserved = Object.keys(PRESERVED).reduce(
  (preserved, file) => {
    const key = file.replace(/\/src\/pages\/|\.tsx$/g, "");
    return { ...preserved, [key]: (PRESERVED[file] as any).default };
  },
  {}
);

const loadPage = (page: TGlobPromise) => {
  return async () => {
    try {
      const _page = await page();
      if (_page.default) {
        return {
          default: _page.default,
        };
      } else {
        throw new Error("The current page has no default export");
      }
    } catch (e) {
      console.warn(e, page.toString());
    }

    return {
      default: () => <Fragment />,
    };
  };
};

const routes = Object.keys(ROUTES).map((route) => {
  const path = route
    .replace(/\/src\/pages|index|\.tsx$/g, "")
    .replace(/\[\.{3}.+\]/, "*")
    .replace(/\[(.+)\]/, ":$1");

  return {
    path,
    component: lazy(
      // We're forcing the glob promise to have a default property – this isn't guaranteed but not exporting a default component from a page will cause an error that would be expected.
      loadPage(ROUTES[route] as any)
    ),
  };
});

export const Routes = () => {
  const App = preserved?.["_app"] || Fragment;
  const NotFound = preserved?.["404"] || Fragment;

  return (
    <App>
      <Suspense fallback={<></>}>
        <RouterRoutes>
          {routes.map(({ path, component: Component = Fragment }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </Suspense>
    </App>
  );
};
