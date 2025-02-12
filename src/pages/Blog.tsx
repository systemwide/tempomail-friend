
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";

const Blog = () => {
  const posts = [
    {
      title: "Why Privacy Matters in the Digital Age",
      description: "Understanding the importance of protecting your online identity and personal information.",
      date: "2024-03-15",
      readTime: "5 min read",
    },
    {
      title: "Best Practices for Online Security",
      description: "Essential tips to keep your online presence secure while using temporary email services.",
      date: "2024-03-10",
      readTime: "4 min read",
    },
    {
      title: "Fighting Spam with Temporary Emails",
      description: "How disposable email addresses can help you maintain a clean primary inbox.",
      date: "2024-03-05",
      readTime: "3 min read",
    },
    {
      title: "The Rise of Email Privacy Services",
      description: "Exploring the growing trend of temporary email services and their impact on online privacy.",
      date: "2024-03-01",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Blog</h1>
        
        <div className="grid gap-6">
          {posts.map((post, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </div>
                  <Button variant="ghost" className="text-primary">
                    Read more <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
