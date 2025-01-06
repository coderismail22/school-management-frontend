// routes.tsx
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/SharedPages/NotFound/NotFound";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Dashboard from "@/pages/Dashboard/Dashboard/Dashboard";
import AdminHome from "@/pages/Dashboard/Admin/AdminHome/AdminHome";
import AddTeacher from "@/pages/Dashboard/Admin/Teacher Management/AddTeacher";
import EditTeacher from "@/pages/Dashboard/Admin/Teacher Management/EditTeacher";
import AllTeachers from "@/pages/Dashboard/Admin/Teacher Management/AllTeachers";
import Login from "@/pages/Auth/Login/Login";
import Register from "@/pages/Auth/Register/Register";
// import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import Unauthorized from "@/components/Auth/Unauthorized/Unauthorized";
import RoleWrapper from "@/components/Auth/RoleWrapper/RoleWrapper";
import { ROLE } from "@/constants/role";
import Courses from "@/pages/Courses/Courses";
import CourseDetailsPageForAll from "@/pages/Courses/CourseDetailsPageForAll/CourseDetailsPageForAll";
import StudentHome from "@/pages/Dashboard/Student/StudentHome/StudentHome";
import Contact from "@/pages/Contact/Contact/Contact";
import About from "@/pages/About/About";
import PublishNotice from "@/pages/Dashboard/Admin/Notice/PublishNotice";
import AllNotice from "@/pages/Dashboard/Admin/Notice/AllNotice";
import EditNotice from "@/pages/Dashboard/Admin/Notice/EditNotice";
import RegisterStudent from "@/pages/Dashboard/Admin/Student Management/RegisterStudent";
import StudentInfo from "@/pages/Dashboard/Admin/Student Management/StudentInfo";
import PublishEvent from "@/pages/Dashboard/Admin/Event/PublishEvent";
import AllEvent from "@/pages/Dashboard/Admin/Event/AllEvent";
import EditEvent from "@/pages/Dashboard/Admin/Event/EditEvent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/courses", element: <Courses /> },
      {
        path: "/courses/:batchId/:courseId",
        element: <CourseDetailsPageForAll />,
      },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      // Auth
      {
        path: "auth/login",
        element: <Login />,
      },

      {
        path: "auth/signup",
        element: <Register />,
      },
      {
        path: "/unauthorized",
        element: <Unauthorized />, // Fallback for unauthorized access
      },
    ],
  },

  // {
  //   path: "/reset-password",
  //   element: <ResetPassword />,
  // },
  // {
  //   path: "/set-new-password-form",
  //   element: <SetNewPasswordForm />,
  // },
  {
    path: "/dashboard",
    element: (
      // <ProtectedRoute>
      <Dashboard />
      // </ProtectedRoute>
    ),
    children: [
      // Role: Admin
      { path: "/dashboard/admin/home", element: <AdminHome /> },
      // Notice
      { path: "/dashboard/admin/notice", element: <AllNotice /> },
      { path: "/dashboard/admin/publish-notice", element: <PublishNotice /> },
      {
        path: "/dashboard/admin/edit-notice/:noticeId",
        element: <EditNotice />,
      },
      // Event
      { path: "/dashboard/admin/event", element: <AllEvent /> },
      { path: "/dashboard/admin/publish-event", element: <PublishEvent /> },
      {
        path: "/dashboard/admin/edit-event/:eventId",
        element: <EditEvent />,
      },
      // Teacher Management
      {
        path: "/dashboard/admin/teacher-management/create-teacher",
        element: <AddTeacher />,
      },
      {
        path: "/dashboard/admin/teacher-management/edit-teacher/:teacherId",
        element: <EditTeacher />,
      },
      {
        path: "/dashboard/admin/teacher-management/all-teachers",
        element: <AllTeachers />,
      },
      // Student Management
      {
        path: "/dashboard/admin/student-management/register-student",
        element: <RegisterStudent />,
      },
      {
        path: "/dashboard/admin/student-management/student-info-page",
        element: <StudentInfo />,
      },
      // Role: Teacher

      // Role: Student
      {
        path: "/dashboard/student/home",
        element: (
          <RoleWrapper allowedRoles={[ROLE.STUDENT]}>
            {/* <Cart /> */}
            <StudentHome />
          </RoleWrapper>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />, // Render NotFound component within MainLayout
  },
]);
