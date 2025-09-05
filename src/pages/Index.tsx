import { useState, useEffect } from 'react';
import { LoginForm } from '@/components/LoginForm';
import { TeacherDashboard } from '@/components/TeacherDashboard';
import { Teacher } from '@/types/teacher';

const Index = () => {
  const [currentTeacher, setCurrentTeacher] = useState<Teacher | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if teacher is already logged in
    const savedTeacher = localStorage.getItem('currentTeacher');
    if (savedTeacher) {
      try {
        setCurrentTeacher(JSON.parse(savedTeacher));
      } catch (error) {
        localStorage.removeItem('currentTeacher');
      }
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (teacher: Teacher) => {
    setCurrentTeacher(teacher);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentTeacher');
    setCurrentTeacher(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="text-6xl animate-float">🍎</div>
          <div className="text-xl text-gradient font-semibold">Loading Teachers' Day Celebration...</div>
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
        </div>
      </div>
    );
  }

  if (currentTeacher) {
    return <TeacherDashboard teacher={currentTeacher} onLogout={handleLogout} />;
  }

  return <LoginForm onLogin={handleLogin} />;
};

export default Index;
