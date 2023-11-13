import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const BlogPostDesktop = React.lazy(() => import("pages/BlogPostDesktop"));
const HomeDesktop = React.lazy(() => import("pages/HomeDesktop"));
const LoginDesktop = React.lazy(() => import("pages/LoginDesktop"));
const SignUpDesktop = React.lazy(() => import("pages/SignUpDesktop"));
const Assets = React.lazy(() => import("pages/Assets"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/signupdesktop" element={<SignUpDesktop />} />
          <Route path="/logindesktop" element={<LoginDesktop />} />
          <Route path="/homedesktop" element={<HomeDesktop />} />
          <Route path="/blogpostdesktop" element={<BlogPostDesktop />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
