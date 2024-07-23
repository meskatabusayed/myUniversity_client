import OfferedCourse from "../pages/student/OfferedCourse";
import Studentdashboard from "../pages/student/StudentDashboard";

export const studentPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <Studentdashboard/>
      },
      {
        name: 'Offered Course',
        path: 'offered-course',
        element: <OfferedCourse/>
      },
    
]