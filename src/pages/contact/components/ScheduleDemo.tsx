import React, { useEffect } from "react";

const CALENDLY_SCRIPT_ID = "calendly-widget-script";

const ScheduleDemo = () => {
  useEffect(() => {
    if (!document.getElementById(CALENDLY_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = CALENDLY_SCRIPT_ID;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 md:p-5 h-full hover:shadow-xl transition-shadow duration-300">
      <div className="text-center mb-3">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">Talk to Us</h3>
        <p className="text-sm text-gray-600">Schedule a call to explore our solution</p>
      </div>
      <div
        className="calendly-inline-widget rounded-lg overflow-hidden"
        data-url="https://calendly.com/adityavj-docgenie/30min"
        style={{ minWidth: "300px", height: "480px" }}
      ></div>
    </div>
  );
};

export default ScheduleDemo;
