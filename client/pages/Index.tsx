import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  Zap,
  Shield,
  BarChart3,
  Users,
  Star,
  ArrowRight,
  Play,
  Building2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 gradient-primary rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">FlowSync</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button className="gradient-primary text-white border-0 hover:opacity-90">
              Get Started Free
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 gradient-primary text-white border-0">
              ✨ Transform Your Workflow Today
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Streamline Your Business
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                Operations
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              FlowSync revolutionizes how teams collaborate, automate tasks, and
              drive results. Join thousands of companies already saving 40+
              hours per week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="gradient-primary text-white border-0 hover:opacity-90 px-8 py-3"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need to scale
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to grow with your business and
              streamline every aspect of your operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-0 bg-white">
              <CardHeader>
                <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Lightning Fast Automation</CardTitle>
                <CardDescription>
                  Automate repetitive tasks and workflows in minutes, not hours.
                  Our intelligent system learns your patterns.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 bg-white">
              <CardHeader>
                <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
                <CardDescription>
                  Bank-level encryption, SSO integration, and compliance with
                  SOC 2, GDPR, and HIPAA standards.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 bg-white">
              <CardHeader>
                <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Advanced Analytics</CardTitle>
                <CardDescription>
                  Real-time insights and customizable dashboards help you make
                  data-driven decisions instantly.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 bg-white">
              <CardHeader>
                <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Team Collaboration</CardTitle>
                <CardDescription>
                  Seamless collaboration tools that keep your team aligned and
                  productive, wherever they work.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 bg-white">
              <CardHeader>
                <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Seamless Integrations</CardTitle>
                <CardDescription>
                  Connect with 200+ popular tools including Slack, Salesforce,
                  HubSpot, and Google Workspace.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 bg-white">
              <CardHeader>
                <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <CardTitle>24/7 Support</CardTitle>
                <CardDescription>
                  World-class support team available around the clock to ensure
                  your success every step of the way.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get started in 3 simple steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From setup to success in minutes. Our streamlined onboarding gets
              you productive immediately.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Connect Your Tools
              </h3>
              <p className="text-gray-600">
                Integrate your existing apps and data sources in just a few
                clicks. Our smart detection makes setup effortless.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Customize Workflows
              </h3>
              <p className="text-gray-600">
                Design automation workflows using our visual builder. No coding
                required – just drag, drop, and configure.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Watch It Work
              </h3>
              <p className="text-gray-600">
                Sit back and watch as FlowSync automates your processes, saves
                time, and delivers consistent results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by teams worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of companies that have transformed their operations
              with FlowSync.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "FlowSync reduced our manual work by 75%. What used to take
                  our team 8 hours now takes 2. It's been absolutely
                  transformational."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold">
                    SJ
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">
                      VP Operations, TechCorp
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "The ROI was immediate. We saved $50K in the first quarter
                  alone. FlowSync pays for itself in the first month."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold">
                    MR
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">
                      Michael Rodriguez
                    </p>
                    <p className="text-sm text-gray-600">CEO, GrowthLabs</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Finally, a tool that actually works as advertised. Setup was
                  smooth, support is excellent, and results speak for
                  themselves."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold">
                    EC
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Emily Chen</p>
                    <p className="text-sm text-gray-600">
                      Director IT, MegaCorp
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include our core
              features and 24/7 support.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Starter</CardTitle>
                <CardDescription>Perfect for small teams</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Up to 5 users</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>100 automation runs/month</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Basic integrations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Email support</span>
                </div>
                <Button className="w-full mt-6" variant="outline">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 gradient-primary text-white border-0">
                Most Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Professional</CardTitle>
                <CardDescription>Best for growing businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$99</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Up to 25 users</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Unlimited automation runs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>All integrations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Advanced analytics</span>
                </div>
                <Button className="w-full mt-6 gradient-primary text-white border-0 hover:opacity-90">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$299</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Unlimited users</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>White-label options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Custom integrations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Dedicated success manager</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>SLA guarantee</span>
                </div>
                <Button className="w-full mt-6" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built by automation experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 2020 by former enterprise software leaders, FlowSync
              was born from the frustration of watching teams waste countless
              hours on manual tasks that should be automated.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                We believe every business deserves access to enterprise-level
                automation, regardless of size or technical expertise. Our
                mission is to democratize workflow automation and help teams
                focus on what matters most: growing their business.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-900">
                    50,000+ businesses trust FlowSync
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-900">
                    99.9% uptime SLA guarantee
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-900">
                    $500M+ in productivity savings
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-lg">
                <h4 className="text-3xl font-bold text-gray-900">50K+</h4>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg">
                <h4 className="text-3xl font-bold text-gray-900">99.9%</h4>
                <p className="text-gray-600">Uptime</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg">
                <h4 className="text-3xl font-bold text-gray-900">200+</h4>
                <p className="text-gray-600">Integrations</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg">
                <h4 className="text-3xl font-bold text-gray-900">24/7</h4>
                <p className="text-gray-600">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to transform your workflow?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of companies already saving time and money with
              FlowSync. Start your free trial today or book a personalized demo.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="border-0 bg-gray-50">
              <CardHeader>
                <CardTitle>Get Started Free</CardTitle>
                <CardDescription>
                  Try FlowSync for 14 days with full access to all features.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Work email address" type="email" />
                <Input placeholder="Company name" />
                <Button className="w-full gradient-primary text-white border-0 hover:opacity-90">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-sm text-gray-600 text-center">
                  No credit card required • Cancel anytime
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gray-50">
              <CardHeader>
                <CardTitle>Book a Demo</CardTitle>
                <CardDescription>
                  See FlowSync in action with a personalized demo tailored to
                  your needs.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Full name" />
                <Input placeholder="Work email" type="email" />
                <Textarea placeholder="Tell us about your automation needs..." />
                <Button className="w-full" variant="outline">
                  Schedule Demo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-8 w-8 gradient-primary rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">FlowSync</span>
              </div>
              <p className="text-gray-400 mb-6">
                Streamline your business operations with intelligent automation.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Docs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 FlowSync. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
