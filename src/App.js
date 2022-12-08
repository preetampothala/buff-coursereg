import { Redirect, Route, Switch } from "react-router-dom";

import CourseDetail from "./pages/CourseDetail";
import CartPage from "./pages/CartPage/CartPage";
import MyCourses from "./pages/MyCourses";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound";
import AllCourses from "./pages/AllCourses";
import CartProvider from "./store/CartProvider";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/courses"/>
          </Route>
          <Route path="/courses" exact>
            <AllCourses />
          </Route>
          <Route path="/courses/:courseId">
            <CourseDetail />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/mycourses">
            <MyCourses />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Layout>
    </CartProvider>
  );
}

export default App;
