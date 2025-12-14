import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  type: "departure" | "promo" | "webinar";
  description?: string;
}

const events: CalendarEvent[] = [
  { id: "1", title: "Gorilla Trekking", date: "2025-12-08", type: "departure", description: "Experience the ultimate gorilla trekking adventure" },
  { id: "2", title: "Cultural Tour", date: "2025-12-09", type: "departure", description: "Immerse in Rwanda's rich cultural heritage" },
  { id: "3", title: "Rwanda Webinar", date: "2025-12-10", type: "webinar", description: "Learn about tour opportunities" },
  { id: "4", title: "Luxury Safari", date: "2025-12-15", type: "departure", description: "Premium safari experience" },
  { id: "5", title: "Holiday Special", date: "2025-12-20", type: "promo", description: "Special holiday pricing available" },
  { id: "6", title: "New Year Trek", date: "2025-12-28", type: "departure", description: "Ring in the new year with gorillas" },
];

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 11, 1)); // December 2025
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  
  const getEventsForDay = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(event => event.date === dateStr);
  };
  
  const getEventColor = (type: string) => {
    switch (type) {
      case "departure": return "bg-warning";
      case "promo": return "bg-blue-500";
      case "webinar": return "bg-accent";
      default: return "bg-muted";
    }
  };

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="p-2 min-h-[100px] bg-muted/30" />);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const dayEvents = getEventsForDay(day);
    const isToday = day === 14 && currentDate.getMonth() === 11 && currentDate.getFullYear() === 2025;
    
    days.push(
      <div 
        key={day} 
        className={cn(
          "p-2 min-h-[100px] bg-card border-r border-b border-border transition-colors hover:bg-muted/50 cursor-pointer",
          dayEvents.length > 0 && "bg-warning/10",
          isToday && "bg-primary text-primary-foreground"
        )}
      >
        <div className={cn("font-semibold mb-1", isToday && "text-primary-foreground")}>
          {day}
        </div>
        {dayEvents.map((event, idx) => (
          <div 
            key={idx} 
            className={cn(
              "text-xs p-1 rounded mb-1 text-white truncate",
              getEventColor(event.type)
            )}
          >
            {event.title}
          </div>
        ))}
      </div>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient pt-24 pb-8">
        <div className="container-max">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <nav className="flex items-center space-x-2 text-sm mb-4">
                <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <Link to="/tours" className="text-muted-foreground hover:text-primary">Tours</Link>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground font-medium">Calendar</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Tour Calendar
              </h1>
              <p className="text-muted-foreground">
                Plan your adventure with upcoming departures and events
              </p>
            </div>
            <Button asChild className="mt-4 md:mt-0">
              <Link to="/tours">View All Tours</Link>
            </Button>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-warning" />
              <span className="text-sm text-muted-foreground">Tour Departures</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-blue-500" />
              <span className="text-sm text-muted-foreground">Promotional Events</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-accent" />
              <span className="text-sm text-muted-foreground">Webinars</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-8 bg-background">
        <div className="container-max">
          <div className="bg-card rounded-xl shadow-card overflow-hidden border border-border">
            {/* Calendar Header */}
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-foreground">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={previousMonth}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextMonth}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 border-b border-border">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="p-4 text-center font-semibold text-muted-foreground bg-muted/50 border-r border-border last:border-r-0">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {days}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-muted/50">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-foreground mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.slice(0, 6).map((event) => (
              <div key={event.id} className="bg-card rounded-xl p-6 border border-border shadow-subtle card-hover">
                <div className={cn("inline-block px-3 py-1 rounded-full text-xs text-white mb-4", getEventColor(event.type))}>
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Book Your Adventure?
          </h2>
          <p className="text-muted-foreground mb-8">
            Explore our tour packages and start planning your journey today.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/tours">View Tour Packages</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CalendarPage;
