
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { blogPosts } from "@/lib/blogPosts";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Blog</h1>
        
        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="ghost" className="text-primary">
                      Read more <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
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
