
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
          <TabsTrigger value="annual">Annual (20% off)</TabsTrigger>
        </TabsList>
        
        <div className="max-w-6xl mx-auto">
          {billingCycle === "monthly" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PricingCard 
                title="Individual Provider"
                description="For healthcare providers who need a ready-to-use solution"
                price="100"
                isPopular={false}
                isAnnual={false}
                features={[
                  "Inclusive of all standard platform features",
                  "Access to standard workflows",
                  "Limited customization options available (for an additional fee)",
                  "Regular customer & tech support available"
                ]}
              />
              <PricingCard 
                title="Enterprise"
                description="For clinics & hospitals requiring complex workflows"
                price="Custom"
                isPopular={true}
                isCustomPricing={true}
                features={[
                  "Full access to all platform features",
                  "Extensive customizations available subject to mutual agreement",
                  "Priority tech and customer support included",
                  "Set up fee included in the plan",
                  "15 day free trial available"
                ]}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PricingCard 
                title="Individual Provider"
                description="For healthcare providers who need a ready-to-use solution"
                price="80"
                isPopular={false}
                isAnnual={true}
                features={[
                  "Inclusive of all standard platform features",
                  "Access to standard workflows",
                  "Limited customization options available (for an additional fee)",
                  "Regular customer & tech support available"
                ]}
              />
              <PricingCard 
                title="Enterprise"
                description="For clinics & hospitals requiring complex workflows"
                price="Custom"
                isPopular={true}
                isCustomPricing={true}
                features={[
                  "Full access to all platform features",
                  "Extensive customizations available subject to mutual agreement",
                  "Priority tech and customer support included",
                  "Set up fee included in the plan",
                  "15 day free trial available"
                ]}
              />
            </div>
          )}
        </div>
      </Tabs>
    </div>
  );
};

export default PricingTabs;
