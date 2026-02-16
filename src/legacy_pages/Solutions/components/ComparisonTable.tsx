
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Compare DocGenie Solutions
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Choose the right telemedicine platform for your healthcare practice with our comprehensive feature comparison
          </p>
          
          <div className="overflow-x-auto bg-white rounded-xl shadow-md">
            <Table>
              <TableCaption>
                All plans include 24/7 technical support and regular updates
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Feature</TableHead>
                  <TableHead>Standard Solution</TableHead>
                  <TableHead>Professional Solution</TableHead>
                  <TableHead>Enterprise Solution</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">White Label Branding</TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">HIPAA Compliance</TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Video Consultations</TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Secure Messaging</TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">EHR Integration</TableCell>
                  <TableCell><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">AI-Powered Diagnosis</TableCell>
                  <TableCell><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Custom Workflows</TableCell>
                  <TableCell><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                  <TableCell><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Multi-specialty Support</TableCell>
                  <TableCell><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                  <TableCell><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Dedicated Account Manager</TableCell>
                  <TableCell><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                  <TableCell><X className="h-5 w-5 text-gray-300 mx-auto" /></TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500 mx-auto" /></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
