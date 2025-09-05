import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

// Import wallpapers
import teachersDayDesktop from '@/assets/wallpapers/teachers-day-desktop.jpg';
import classroomDesktop from '@/assets/wallpapers/classroom-desktop.jpg';
import floralMobile from '@/assets/wallpapers/floral-mobile.jpg';

// Import cards
import thankYouCard from '@/assets/cards/thank-you-card.jpg';
import appreciationCard from '@/assets/cards/appreciation-card.jpg';

export const DigitalGifts = () => {
  const { toast } = useToast();

  const downloadFile = (url: string, filename: string, type: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download Started!",
      description: `Your ${type} is downloading now.`,
    });
  };

  const gifts = [
    {
      category: "Desktop Wallpapers",
      icon: "🖥️",
      items: [
        { 
          name: "Teachers' Day Special", 
          type: "HD Desktop Wallpaper", 
          action: () => downloadFile(teachersDayDesktop, "teachers-day-wallpaper.jpg", "Teachers' Day wallpaper") 
        },
        { 
          name: "Motivational Quotes", 
          type: "4K Desktop Wallpaper", 
          action: () => downloadFile('https://i.pinimg.com/736x/bf/ce/00/bfce002eb936a956caf1c25fd002f74f.jpg', "motivational-wallpaper.jpg", "Motivational wallpaper") 
        },
        { 
          name: "Classroom Memories", 
          type: "HD Desktop Wallpaper", 
          action: () => downloadFile(classroomDesktop, "classroom-wallpaper.jpg", "Classroom wallpaper") 
        }
      ]
    },
    {
      category: "Mobile Wallpapers",
      icon: "📱",
      items: [
        { 
          name: "Inspirational", 
          type: "Mobile Wallpaper", 
          action: () => downloadFile('https://i.pinimg.com/736x/f1/04/c5/f104c512d89e46578546ef4501cd36a5.jpg', "inspirational-mobile.jpg", "Inspirational mobile wallpaper") 
        },
        { 
          name: "Floral Design", 
          type: "Mobile Wallpaper", 
          action: () => downloadFile(floralMobile, "floral-mobile.jpg", "Floral mobile wallpaper") 
        }
      ]
    },
    {
      category: "Greeting Cards",
      icon: "💌",
      items: [
        { 
          name: "Thank You Card", 
          type: "Digital Card", 
          action: () => downloadFile(thankYouCard, "thank-you-card.jpg", "Thank You card") 
        },
        { 
          name: "Appreciation Card", 
          type: "Digital Card", 
          action: () => downloadFile(appreciationCard, "appreciation-card.jpg", "Appreciation card") 
        },
      ]
    }
  ];

  return (
    <Card className="card-festive">
      <CardHeader className="text-center">
        <div className="text-4xl mb-2"></div>
        <CardTitle className="text-2xl font-bold text-gradient">
          Digital Tech Gifts
        </CardTitle>
        <p className="text-muted-foreground">
          Beautiful wallpapers and greeting cards created specially for you
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {gifts.map((category, categoryIdx) => (
          <div key={categoryIdx} className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span className="text-2xl">{category.icon}</span>
              {category.category}
            </h3>
            
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx}
                  className="bg-gradient-to-br from-white to-muted/50 p-4 rounded-lg border border-border/50 hover:shadow-warm transition-all duration-300 hover:scale-105"
                >
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-foreground">{item.name}</h4>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {item.type}
                      </Badge>
                    </div>
                    
                    <Button
                      onClick={item.action}
                      size="sm"
                      className="btn-celebration w-full"
                    >
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="text-center mt-6 p-4 bg-muted/30 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Tip:</strong> Right-click and "Save As" to keep these beautiful gifts on your device!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
