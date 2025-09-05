import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Teacher } from '@/types/teacher';
import { DigitalGifts } from './DigitalGifts';
import { TeacherPoem } from './TeacherPoem';
import heroBg from '@/assets/teachers-day-hero.jpg';

interface TeacherDashboardProps {
  teacher: Teacher;
  onLogout: () => void;
}

export const TeacherDashboard = ({ teacher, onLogout }: TeacherDashboardProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-secondary/20">
      {/* Hero Section */}
      <div 
        className="relative h-80 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-accent/70 to-secondary/80"></div>
        
        <div className="relative z-10 text-center text-white space-y-4 px-4">
          <div className="text-6xl animate-float">🌟</div>
          <h1 className="text-4xl md:text-6xl font-bold animate-glow">
            Welcome, {teacher.name}!
          </h1>
          <p className="text-xl md:text-2xl font-medium opacity-90">
            Happy Teachers' Day 2024
          </p>
          <Badge variant="secondary" className="text-lg px-6 py-2 animate-bounce">
            🎉 You're Appreciated! 🎉
          </Badge>
        </div>

        <Button
          onClick={onLogout}
          variant="outline"
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
        >
          Logout
        </Button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Message */}
        <Card className="card-festive text-center">
          <CardContent className="pt-6">
            <div className="text-4xl mb-4">🍎📚✨</div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dear {teacher.name}, you are the light that guides young minds toward knowledge and wisdom. 
              Today, we celebrate your dedication, passion, and the countless lives you've touched. 
              Your impact extends far beyond the classroom - you shape the future, one student at a time.
            </p>
          </CardContent>
        </Card>

        {/* Your Personalized Poem */}
        <TeacherPoem teacher={teacher} />

        {/* Digital Gifts Section */}
        <DigitalGifts />

        {/* Coming Soon Section */}
        <Card className="card-festive text-center border-dashed border-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-secondary/5 to-primary/5"></div>
          <CardHeader className="relative z-10">
            <CardTitle className="text-2xl font-bold text-gradient flex items-center justify-center gap-3">
              🤖 TYSON Desk Assistant
              <Badge variant="outline" className="text-accent border-accent">
                Coming Soon
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <p className="text-muted-foreground text-lg">
              Get ready for your AI-powered teaching assistant! TYSON will help you with 
              lesson planning, student management, and administrative tasks.
            </p>
            <div className="mt-4 flex justify-center">
              <div className="animate-pulse bg-gradient-to-r from-primary via-accent to-secondary h-2 w-32 rounded-full"></div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-muted-foreground">
            With gratitude and appreciation from all your students 💝
          </p>
          <div className="flex justify-center items-center gap-2 mt-2 text-2xl">
            🌸 🎓 📖 ✏️ 🌸
          </div>
        </div>
      </div>
    </div>
  );
};