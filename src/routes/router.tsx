// routes.tsx
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/SharedPages/NotFound/NotFound";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Dashboard from "@/pages/Dashboard/Dashboard/Dashboard";
import AdminHome from "@/pages/Dashboard/Admin/AdminHome/AdminHome";
import InstructorHome from "@/pages/Dashboard/Instructor/InstructorHome/InstructorHome";
import CreateCourse from "@/pages/Dashboard/Admin/CourseManagement/Course/CreateCourse";
import AllCourses from "@/pages/Dashboard/Admin/CourseManagement/Course/AllCourses";
import CreateSubject from "@/pages/Dashboard/Admin/CourseManagement/Subject/CreateSubject";
import AllSubjects from "@/pages/Dashboard/Admin/CourseManagement/Subject/AllSubjects";
import CreateLesson from "@/pages/Dashboard/Admin/CourseManagement/Lesson/CreateLesson";
import AllLessons from "@/pages/Dashboard/Admin/CourseManagement/Lesson/AllLessons";
import RunningCourses from "@/pages/Dashboard/Instructor/CourseManagement/RunningCourses/RunningCourses";
import UpcomingCourses from "@/pages/Dashboard/Instructor/CourseManagement/UpcomingCourses/UpcomingCourses";
import CompletedCourses from "@/pages/Dashboard/Instructor/CourseManagement/CompletedCourses/CompletedCourses";
import EnrolledCourses from "@/pages/Dashboard/Student/Courses/EnrolledCourses/EnrolledCourses";
import Categories from "@/pages/Dashboard/Admin/Categories/Categories";
import Batch from "@/pages/Dashboard/Admin/Batch/Batch";
import AddBatch from "@/components/AddBatch/AddBatch";
import EditBatch from "@/components/EditBatch/EditBatch";
import EditCourse from "@/pages/Dashboard/Admin/CourseManagement/Course/EditCourse";
import EditSubject from "@/pages/Dashboard/Admin/CourseManagement/Subject/EditSubject";
import CreateTopic from "@/pages/Dashboard/Admin/CourseManagement/Topic/CreateTopic";
import AllTopics from "@/pages/Dashboard/Admin/CourseManagement/Topic/AllTopics";
import EditTopic from "@/pages/Dashboard/Admin/CourseManagement/Topic/EditTopic";
import EditLesson from "@/pages/Dashboard/Admin/CourseManagement/Lesson/EditLesson";
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
import Payment from "@/pages/Dashboard/Student/Payment/Payment";
import AllPayments from "@/pages/Dashboard/Admin/Payments/AllPayments";
import AllOrders from "@/pages/Dashboard/Admin/Orders/AllOrders";
import StudentHome from "@/pages/Dashboard/Student/StudentHome/StudentHome";
import PendingCourses from "@/pages/Dashboard/Student/Courses/PendingCourses/PendingCourses";
import AllBatchStudents from "@/pages/Dashboard/Admin/Batch/AllBatchStudents";
import CourseDetailsPage from "@/CourseDetailsPage/CourseDetailsPage";
import Contact from "@/pages/Contact/Contact/Contact";
import About from "@/pages/About/About";
import PublishNotice from "@/pages/Dashboard/Admin/Notice/PublishNotice";
import AllNotice from "@/pages/Dashboard/Admin/Notice/AllNotice";
import EditNotice from "@/pages/Dashboard/Admin/Notice/EditNotice";
import RegisterStudent from "@/pages/Dashboard/Admin/Student Management/RegisterStudent";
import StudentDropdownPage from "@/pages/Dashboard/Admin/Student Management/StudentDropdownPage";

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
        path: "/dashboard/admin/student-management/student-dropdown-page",
        element: <StudentDropdownPage />, 
      },
      // Role: Instructor
      { path: "/dashboard/instructor/home", element: <InstructorHome /> },
      // Course Management
      {
        path: "/dashboard/instructor/course-management/running",
        element: <RunningCourses />,
      },
      {
        path: "/dashboard/instructor/course-management/upcoming",
        element: <UpcomingCourses />,
      },
      {
        path: "/dashboard/instructor/course-management/completed",
        element: <CompletedCourses />,
      },
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
      // {
      //   path: "/dashboard/student/cart",
      //   element: (
      //     <RoleWrapper allowedRoles={[ROLE.STUDENT]}>
      //       <Cart />
      //     </RoleWrapper>
      //   ),
      // },
      {
        path: "/dashboard/student/paymentpage",
        element: (
          <RoleWrapper allowedRoles={[ROLE.STUDENT]}>
            <Payment />
          </RoleWrapper>
        ),
      },
      {
        path: "/dashboard/student/courses/enrolled-courses",
        element: (
          <RoleWrapper allowedRoles={[ROLE.STUDENT]}>
            <EnrolledCourses />
          </RoleWrapper>
        ),
      },
      {
        path: "/dashboard/student/courses/pending-courses",
        element: (
          <RoleWrapper allowedRoles={[ROLE.STUDENT]}>
            <PendingCourses />
          </RoleWrapper>
        ),
      },
      {
        path: "/dashboard/student/:studentId/courses/:courseId",
        element: <CourseDetailsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />, // Render NotFound component within MainLayout
  },
]);
