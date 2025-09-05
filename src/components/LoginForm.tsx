import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { teachersData } from '@/data/teachers';
import loginBg from '@/assets/login-bg.jpg';

interface LoginFormProps {
  onLogin: (teacher: any) => void;
}

export const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));

    const teacher = teachersData[username];
    
    if (teacher && teacher.password === password) {
      localStorage.setItem('currentTeacher', JSON.stringify(teacher));
      toast({
        title: "Welcome!",
        description: `Hello ${teacher.name}, Happy Teachers' Day!`,
      });
      onLogin(teacher);
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password. Please try again.",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      <Card className="card-festive w-full max-w-md relative z-10 animate-float">
        <CardHeader className="text-center space-y-4">
          <div className="text-4xl animate-glow">🍎</div>
          <CardTitle className="text-3xl font-bold text-gradient">
            Teachers' Day 2024
          </CardTitle>
          <CardDescription className="text-lg">
            Welcome back, dear teacher! Please login to view your personalized celebration.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="transition-all duration-300 focus:shadow-warm"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="transition-all duration-300 focus:shadow-warm"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isLoading}
              className="btn-hero w-full py-3 text-lg font-semibold"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  Signing In...
                </div>
              ) : (
                'Enter Your Celebration'
              )}
            </Button>
          </form>

          <div className="text-center text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
            <p className="font-medium mb-1">🎉 Happy Teachers' Day! 🎉</p>
            <p>Use your assigned username and password to access your personalized celebration.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};