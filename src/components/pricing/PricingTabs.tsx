
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PricingCard from "./PricingCard";

interface PricingTabsProps {
  billingCycle: "monthly" | "annual";
  setBillingCycle: (value: "monthly" | "annual") => void;
}

const PricingTabs = ({ billingCycle, setBillingCycle }: PricingTabsProps) => {
  return (
    <div className="w-full mx-auto">
      <Tabs
        value={billingCycle}
        onValueChange={(value) => {
          console.log("Tab changed to:", value);
          setBillingCycle(value as "monthly" | "annual");
        }}
        defaultValue="monthly"
      >
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="annual">Annual</TabsTrigger>
        </TabsList>
        
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <PricingCard 
              title="Basic Plan"
              description="For individual practitioners getting started with telemedicine"
              price={billingCycle === "monthly" ? "35" : "220"}
              isPopular={false}
              isAnnual={billingCycle === "annual"}
              features={[
                "Appointment Scheduling",
                "Calendar Management",
                "Patient Invoice",
                "Video Consultations",
                "Doctor Dashboard",
                "EMR",
                "ePrescription",
                "Admin Module",
                "HIPAA and ISO Compliance",
                "Basic Customisation and Branding with Logo",
                "Alerts on SMS"
              ]}
            />
            <PricingCard 
              title="Premium Plan"
              description="All Inclusive + AI Powered for growing practices"
              price={billingCycle === "monthly" ? "50" : "325"}
              isPopular={true}
              isAnnual={billingCycle === "annual"}
              features={[
                "Appointment Scheduling",
                "Calendar Management",
                "Patient Invoice",
                "Video Consultations",
                "Doctor Dashboard",
                "EMR",
                "ePrescription",
                "Admin Module",
                "HIPAA and ISO Compliance",
                "Advanced Customisation, Branding & Color Scheme Changes",
                "Alerts on SMS",
                "Reminder on WhatsApp & SMS",
                "CIMS Drug Database Access",
                "AI Enablement"
              ]}
            />
            <PricingCard 
              title="Enterprise"
              description="For clinics, hospitals and organisations requiring more sophisticated integrations or with over 20 doctors"
              price="Custom"
              isPopular={false}
              isCustomPricing={true}
              isAnnual={billingCycle === "annual"}
              features={[
                "Everything under the Premium Plan + bespoke integrations, customisations and complex workflows specific to your practice"
              ]}
            />
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default PricingTabs;
