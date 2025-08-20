import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/dashboard/Dashboard";
import { ProjectsPage } from "./components/projects/ProjectsPage";
import { TasksPage } from "./components/tasks/TasksPage";
import { LeavesPage } from "./components/leaves/LeavesPage";
import CreateProject from "./components/projects/CreateProject";
import Tasks from "./components/tasks/Tasks";
import MainLayout from "./pages/MainLayout";
import { LoginPage } from "./components/auth/LoginPage";
import Error from "./components/Design/Error";
import Loader from "./components/Design/Loader";
import ProjectView from "./components/projects/ProjectView";
import ViewTask from "./components/tasks/ViewTask";
import { RegisterPage } from "./components/auth/RegisterPage";
import TeamMember from "./components/auth/TeamMember";

import { useAuth } from "./contexts/AuthContext"; // ✅ import auth

function App() {
  const { role } = useAuth(); // ✅ get logged in user role

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/tasks" element={<TasksPage />} />

        {/* ✅ Show leaves route only if role !== employee */}
        {role !== "employee" && (
          <>
            <Route path="/leaves" element={<LeavesPage />} />
            <Route path="/members" element={<TeamMember />} />
            <Route path="/create-project" element={<CreateProject />} />
            <Route path="/update-project/:id" element={<CreateProject />} />
            <Route path="/update-task/:id" element={<Tasks />} />
            <Route path="/create-task" element={<Tasks />} />
          </>
        )}

        <Route path="/project/:id" element={<ProjectView />} />
        <Route path="/view-task/:id" element={<ViewTask />} />
      </Route>
      <Route path="/Loading" element={<Loader />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default App;
