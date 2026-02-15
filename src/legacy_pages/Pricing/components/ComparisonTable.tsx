
import React from "react";
import { Check } from "lucide-react";

const ComparisonTable = () => (
  <div className="max-w-5xl mx-auto mt-16 mb-24">
    <h2 className="heading-3 text-center mb-8">Compare Plans</h2>
    <div className="overflow-x-auto bg-white rounded-xl shadow-md">
      <table className="w-full min-w-[640px]">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-center py-4 px-6 font-semibold text-gray-900">Features</th>
            <th className="py-4 px-6 font-semibold text-gray-900">Individual Provider</th>
            <th className="py-4 px-6 font-semibold text-gray-900">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-100">
            <td className="py-4 px-6 text-sm text-gray-700 text-center">Standard Platform Features</td>
            <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-brand-blue mx-auto" /></td>
            <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-brand-blue mx-auto" /></td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="py-4 px-6 text-sm text-gray-700 text-center">Custom Workflows</td>
            <td className="py-4 px-6 text-center text-gray-700">Limited</td>
            <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-brand-blue mx-auto" /></td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="py-4 px-6 text-sm text-gray-700 text-center">Priority Support</td>
            <td className="py-4 px-6 text-center text-gray-700">Additional Fee</td>
            <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-brand-blue mx-auto" /></td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="py-4 px-6 text-sm text-gray-700 text-center">Setup Fee</td>
            <td className="py-4 px-6 text-center">Yes</td>
            <td className="py-4 px-6 text-center">Included</td>
          </tr>
          <tr>
            <td className="py-4 px-6 text-sm text-gray-700 text-center">Pilot Program Offered</td>
            <td className="py-4 px-6 text-center">15 Days</td>
            <td className="py-4 px-6 text-center">15 Days</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default ComparisonTable;
