import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Teacher } from '@/types/teacher';
import poemBg from '@/assets/poem-bg.jpg';

interface TeacherPoemProps {
  teacher: Teacher;
}

export const TeacherPoem = ({ teacher }: TeacherPoemProps) => {
  return (
    <Card className="card-poem relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${poemBg})` }}
      ></div>
      
      <CardHeader className="relative z-10 text-center">
        <div className="text-4xl mb-2">📜</div>
        <CardTitle className="text-2xl font-bold text-gradient">
          A Special Poem Just For You
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <div className="bg-gradient-to-br from-white/90 to-muted/90 rounded-lg p-6 border border-secondary/20">
          <pre className="whitespace-pre-wrap text-foreground text-base leading-relaxed font-medium text-center">
            {teacher.poem}
          </pre>
          
          <div className="mt-6 text-center">
            <div className="text-2xl space-x-2">
              🌹 💐 🌺 🌻 🌹
            </div>
            <p className="text-sm text-muted-foreground mt-2 italic">
              Written with love and appreciation
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};