import { Link } from "react-router-dom";
import { Shield, Clock, Trash2, Code, Heart, Eye, EyeOff, Users, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto py-12 px-4">

        {/* Hero */}
        <div className="text-center mb-16">
          <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold text-gray-900">About Ten Minute Emails</h1>
          <p className="mt-3 text-lg text-gray-600">Built by the team behind Lansira</p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
          <div className="flex items-start gap-4">
            <Heart className="w-7 h-7 text-primary mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                We believe everyone deserves simple, privacy-first tools that work without compromise.
                Ten Minute Emails exists to give people a fast, reliable way to protect their real
                inbox — no sign-ups, no strings attached. Our goal is to make online privacy
                accessible to everyone, regardless of technical skill.
              </p>
            </div>
          </div>
        </div>

        {/* Why We Built This Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
          <div className="flex items-start gap-4">
            <EyeOff className="w-7 h-7 text-primary mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Why We Built This</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The modern internet has a spam problem. Signing up for a one-time download, accessing
                a free trial, or reading a gated article almost always means handing over your email
                address. What follows is predictable: promotional emails, newsletter subscriptions you
                never asked for, and in worst cases, your data sold to third-party brokers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We built Ten Minute Emails because we were tired of inbox pollution and the erosion of
                personal privacy that comes with it. A disposable email address solves the problem at
                the source — you get the access you need without giving away anything permanent.
              </p>
            </div>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Code className="w-7 h-7 text-primary mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Approach</h2>
              <p className="text-gray-700 leading-relaxed">
                Ten Minute Emails is built with modern, open-source tools and designed around a simple
                principle: your data should not outlive its purpose.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 ml-11">
            <div className="flex items-start gap-3 p-4 rounded-md bg-gray-50">
              <Trash2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Automatic Data Deletion</h3>
                <p className="text-sm text-gray-600">All emails and temporary addresses are permanently deleted after 24 hours.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-md bg-gray-50">
              <Eye className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-1">No Tracking</h3>
                <p className="text-sm text-gray-600">We do not track your behavior, fingerprint your browser, or build advertising profiles.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-md bg-gray-50">
              <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Privacy by Design</h3>
                <p className="text-sm text-gray-600">Privacy is not an afterthought — it is the foundation every feature is built on.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-md bg-gray-50">
              <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-1">No Ads Profiling</h3>
                <p className="text-sm text-gray-600">Your activity is never used to serve targeted ads or sold to data brokers.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Part of the Lansira Family Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm mb-12">
          <div className="flex items-start gap-4">
            <Users className="w-7 h-7 text-primary mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Part of the Lansira Family</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ten Minute Emails is one of several products built under the Lansira name. Our sibling
                project, the Lansira Chrome Extension, focuses on developer productivity — helping
                engineers streamline their workflow directly in the browser.
              </p>
              <p className="text-gray-700 leading-relaxed">
                While the products serve different audiences, they share the same core philosophy:
                make the internet more private and more productive. Every tool we build is guided by
                the belief that software should respect its users, protect their data, and stay out
                of the way.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions, feedback, or ideas? We would love to hear from you.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gap-2">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;
