
import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Video, Calendar, FileText, Palette } from "lucide-react";
import FeatureTabContent from "./FeatureTabContent";
import ErrorBoundary from "@/components/ErrorBoundary";
import { debugComponent } from "@/utils/debugUtils";

const FeatureTabs = () => {
  const tabsData = [
    {
      id: "video",
      label: "Video Consultations",
      icon: <Video className="h-4 w-4 mr-2" />,
      content: {
        title: "High-Definition Video Consultations",
        description: "Deliver exceptional patient experiences with crystal-clear video and audio quality that adapts to any connection speed.",
        features: [
          "HD-quality video that adjusts to bandwidth",
          "End-to-end encrypted for complete privacy",
          "Screen sharing and multi-party calls",
          "Integrated chat and file sharing",
          "Works across all modern browsers and devices"
        ],
        image: "/lovable-uploads/e01a9a3d-63ac-435a-87f1-8bdcf7d4e1c0.png",
        iconComponent: <Video className="h-4 w-4 text-brand-blue" />,
        iconLabel: "HD Quality",
        primaryColor: "blue" as const
      }
    },
    {
      id: "scheduling",
      label: "Scheduling",
      icon: <Calendar className="h-4 w-4 mr-2" />,
      content: {
        title: "Intelligent Appointment Management",
        description: "Streamline scheduling with our powerful calendar system designed specifically for healthcare workflows.",
        features: [
          "Smart scheduling with availability management",
          "Automated reminders via SMS and email",
          "Patient self-scheduling portal",
          "Custom appointment types and durations",
          "Seamless integration with existing systems"
        ],
        image: "/lovable-uploads/588df964-312d-4467-a9cb-2ec984d2931c.png",
        iconComponent: <Calendar className="h-4 w-4 text-brand-orange" />,
        iconLabel: "Smart Scheduling",
        primaryColor: "orange" as const
      }
    },
    {
      id: "documentation",
      label: "Documentation",
      icon: <FileText className="h-4 w-4 mr-2" />,
      content: {
        title: "Streamlined Clinical Documentation",
        description: "Reduce administrative burden with intuitive documentation tools designed by clinicians, for clinicians.",
        features: [
          "Customizable templates for different specialties",
          "Voice-to-text transcription capabilities",
          "Automated coding suggestions",
          "Digital signature and form management",
          "Secure document storage and sharing"
        ],
        image: "/lovable-uploads/b75f7508-ab04-4362-8e57-d4a462b4176a.png",
        iconComponent: <FileText className="h-4 w-4 text-brand-blue" />,
        iconLabel: "Smart Documentation",
        primaryColor: "blue" as const
      }
    },
    {
      id: "personalized",
      label: "Personalised",
      icon: <Palette className="h-4 w-4 mr-2" />,
      content: {
        title: "Fully Personalised Experience",
        description: "Tailor the platform to perfectly match your organization's unique requirements, workflows, and brand identity for a seamless healthcare experience.",
        features: [
          "Customizable user interface with your branding",
          "Workflow adaptations for different specialties",
          "Configurable patient journeys and care pathways",
          "Role-based access controls and permissions",
          "Custom forms and data collection fields"
        ],
        image: "/lovable-uploads/56534aae-fe9c-49ca-98a2-0bf0cddcbab3.png",
        iconComponent: <Palette className="h-4 w-4 text-brand-orange" />,
        iconLabel: "Custom Branding",
        primaryColor: "orange" as const
      }
    }
  ];

  useEffect(() => {
    debugComponent('FeatureTabs', { tabsData });
  }, []);

  return (
    <ErrorBoundary>
      <Tabs defaultValue="video" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto p-1 mb-8">
          {tabsData.map((tab) => (
            <TabsTrigger 
              key={tab.id}
              value={tab.id} 
              className="py-3 px-4 data-[state=active]:bg-brand-blue data-[state=active]:text-white flex items-center justify-center"
            >
              {tab.icon}
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {tabsData.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="mt-0">
            <ErrorBoundary
              fallback={
                <div className="p-4 border border-red-300 bg-red-50 rounded-md">
                  <h3 className="font-medium">Failed to load {tab.label} content</h3>
                  <p>There was an error rendering this tab's content.</p>
                </div>
              }
            >
              <FeatureTabContent {...tab.content} />
            </ErrorBoundary>
          </TabsContent>
        ))}
      </Tabs>
    </ErrorBoundary>
  );
};

export default FeatureTabs;
