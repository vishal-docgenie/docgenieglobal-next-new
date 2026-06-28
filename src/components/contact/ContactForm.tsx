
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { trackEvent } from "@/lib/analytics";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    // phone: "",
    intent: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok) {
        if (responseData.status === "success") {
          trackEvent({ event: "generate_lead", form_name: "contact_form", page_path: window.location.pathname });
          window.lintrk?.("track", { conversion_id: 22311258 });
          toast({
            title: "Message sent successfully",
            description: responseData.message,
            variant: "default",
          });
          setFormData({ firstName: "", lastName: "", email: "", company: "", role: "", intent: "", message: "" }); //, phone: ""
        } else {
          toast({ title: "Could not send message", description: responseData.message || "Please try again later.", variant: "destructive" });
        }
      } else {
        toast({ title: "Submission Failed", description: responseData.message || `Server error: ${response.status}. Please try again later.`, variant: "destructive" });
      }
    } catch (error) {
      console.error("Network or fetch error:", error);
      toast({ title: "Submission Failed", description: "Could not connect to the server. Please check your network connection.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-md p-5 md:p-6">
        <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-3">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="First name" className="w-full" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Last name" className="w-full" />
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="email">Professional Email *</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" className="w-full" />
          </div>

          <div className="space-y-1">
            <Label htmlFor="company">Name of Organisation *</Label>
            <Input id="company" name="company" value={formData.company} onChange={handleChange} required placeholder="Your organisation name" className="w-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="role">Your Role</Label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="" hidden>Select your role (Optional)</option>
                <option value="CEO/Founder">CEO / Founder</option>
                <option value="CTO/IT Director">CTO / IT Director</option>
                <option value="Clinic Manager">Clinic Manager</option>
                <option value="Hospital Admin">Hospital Admin</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/* <div className="space-y-1">
              <Label htmlFor="phone">Phone / WhatsApp</Label>
              <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 8900" className="w-full" />
            </div> */}
          {/* </div> */}

          <div className="space-y-1">
            <Label htmlFor="intent">How can we help? *</Label>
            <select
              id="intent"
              name="intent"
              value={formData.intent}
              onChange={handleChange}
              required
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="" hidden>Select an option</option>
              <option value="Schedule a Demo">Schedule a Demo</option>
              <option value="Get Pricing">Get Pricing</option>
              <option value="Technical Question">Technical Question</option>
              <option value="Partnership">Partnership</option>
              <option value="Other">Other</option>
            </select>
          </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us more about your needs (optional)" className="w-full min-h-[80px]" rows={4} />
          </div>

          <Button type="submit" className="primary-button w-full" disabled={isSubmitting} aria-label={isSubmitting ? "Submitting your message" : "Submit your message"}>
            {isSubmitting ? (
              <span>Submitting...</span>
            ) : (
              <><Send className="h-4 w-4 md:mr-2" /> <span className="hidden md:inline">Submit Message</span><span className="inline md:hidden">Submit</span></>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
