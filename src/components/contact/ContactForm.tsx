
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

/**
 * Contact form component with form state management and submission handling
 * Displays form fields for name, email, subject and message
 * Shows success toast on submission
 */
const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.info("Form submitted successfully. Attempting to fire LinkedIn Insight Tag."); // Debugging
      if (window.lintrk) {
        window.lintrk('track', { conversion_id: 22311258 });
        console.log("LinkedIn Insight Tag tracking fired for successful contact form submission."); // Debugging
      } else {
        console.warn("window.lintrk is not defined. LinkedIn Insight Tag might not be loaded for contact form conversion.");
      }
      
      // const response = await fetch('https://apis.docgenieglobal.com/apis/common/globalContactMail.php', {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json(); // Parse the JSON response body

      if (response.ok) {
        if (responseData.status === "success") {
          toast({
            title: "Form submitted successfully",
            description: responseData.message,
            variant: "default",
          });
    
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: ""
          });
        } else {
          console.error("Server error:", response.status, response.statusText, responseData);
          toast({
            title: "Mail could not be sent",
            description: responseData.message || "Please try again later.",
            variant: "destructive",
          });
        }
      } else {
        console.error("Server error:", response.status, response.statusText, responseData);
        toast({
          title: "Submission Failed",
          description: responseData.message || `Server error: ${response.status}. Please try again later.`,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Network or fetch error:", error);
      toast({
        title: "Submission Failed",
        description: "Could not connect to the server. Please check your network connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-md p-5 md:p-6">
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="firstName">First Name</Label>
              <Input 
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="Enter your first name"
                className="w-full"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="lastName">Last Name</Label>
              <Input 
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Enter your last name"
                className="w-full"
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              className="w-full"
            />
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="subject">Subject</Label>
            <Input 
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Enter the subject"
              className="w-full"
            />
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message"
              className="w-full min-h-[80px] md:min-h-[100px]"
              rows={3}
            />
          </div>
          
          <Button 
            type="submit" 
            className="primary-button w-full" 
            disabled={isSubmitting}
            aria-label={isSubmitting ? "Submitting your message" : "Submit your message"}
          >
            {isSubmitting ? (
              <span>Submitting...</span>
            ) : (
              <>
                <Send className="h-4 w-4 md:mr-2" /> <span className="hidden md:inline">Submit Message</span>
                <span className="inline md:hidden">Submit</span>
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
