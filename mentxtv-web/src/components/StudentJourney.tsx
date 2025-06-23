
import { Button } from "@/components/ui/button";
import { FileText, BookOpen, GraduationCap, ThumbsUp, Users } from "lucide-react";

const StudentJourney = () => {
  const journeySteps = [
    {
      icon: FileText,
      title: "Take a free session",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: BookOpen,
      title: "Sign up to the exclusive community",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: BookOpen,
      title: "Weekly/Bi-weekly mentorship sessions",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Test your development with mock tests",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Ace your exams!",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: ThumbsUp,
      title: "Thank your mentor and connect for life",
      color: "bg-blue-100 text-blue-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your Journey from a{" "}
                <span className="text-blue-600">Student to Topper</span> with MentxTv
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {journeySteps.map((step, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 group"
                >
                  <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon size={24} />
                  </div>
                  <p className="text-lg text-gray-700 font-medium">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>

            <Button 
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Journey Now!
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-200 to-white rounded-3xl p-8 relative overflow-hidden min-h-[400px] flex items-center justify-center">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full translate-y-12 -translate-x-12"></div>
              
              {/* Students Group Image */}
              <div className="relative z-10 flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=300&fit=crop" 
                  alt="Students studying together"
                  className="w-64 h-64 rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentJourney;
