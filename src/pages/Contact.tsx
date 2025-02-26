
import Navigation from "@/components/Navigation";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <MessageSquare className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-2 text-gray-600">We'd love to hear from you</p>
        </div>

        <div className="max-w-lg mx-auto">
          <form 
            action="https://formsubmit.co/lansira.dev@gmail.com" 
            method="POST" 
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input
                id="name"
                name="name"
                required
                className="mt-1"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Textarea
                id="message"
                name="message"
                required
                className="mt-1"
                rows={6}
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
