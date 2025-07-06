import { useState } from "react";
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
import { useToast } from "@/hooks/use-toast";
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
  Loader2,
} from "lucide-react";
import { QuoteService, type SubmitQuoteData } from "@/lib/services";

export default function Index() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<SubmitQuoteData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    projectType: "",
    budgetRange: "",
    timeline: "",
    requirements: "",
  });

  const handleInputChange = (field: keyof SubmitQuoteData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const result = await QuoteService.submitQuote(formData);

      if (result.success) {
        toast({
          title: "Quote Request Submitted!",
          description:
            "Thank you! Our team will contact you within 24 hours to discuss your project.",
        });

        // Reset form
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          projectType: "",
          budgetRange: "",
          timeline: "",
          requirements: "",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description:
            result.error || "Please try again or contact us directly.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToQuoteForm = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWatchDemo = () => {
    // For now, show a toast - you can replace with actual demo video
    toast({
      title: "Demo Coming Soon!",
      description:
        "We're preparing an interactive demo. Contact us for a live demonstration.",
    });
  };

  const handleSignIn = () => {
    // For now, show a toast - you can implement actual auth later
    toast({
      title: "Sign In",
      description:
        "Sign in functionality will be available soon. Contact us for account setup.",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F58568866d7a34cc4ad219fad1e3fa393%2F4e597770b24444ffa5efbbeb32e8ee28?format=webp&width=800"
              alt="CipherBridge Logo"
              className="h-10 w-auto"
            />
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
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Get Quote
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="hidden md:inline-flex"
              onClick={handleSignIn}
            >
              Sign In
            </Button>
            <Button
              className="gradient-primary text-white border-0 hover:opacity-90"
              onClick={scrollToQuoteForm}
            >
              Get Quote
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 gradient-primary text-white border-0">
              ✨ Transform Your Business Today
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Custom Business
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              CipherBridge delivers custom CRM, ERP, and Database Management
              systems, plus cutting-edge Website and Mobile Application
              development. Empowering businesses with tailored digital
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="gradient-primary text-white border-0 hover:opacity-90 px-8 py-3"
                onClick={scrollToQuoteForm}
              >
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3"
                onClick={handleWatchDemo}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From custom business systems to mobile applications, we deliver
              complete digital transformation tailored to your unique needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-0 bg-white">
              <CardHeader>
                <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Custom CRM Solutions</CardTitle>
                <CardDescription>
                  Tailored Customer Relationship Management systems that fit
                  your business processes and enhance customer interactions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 bg-white">
              <CardHeader>
                <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Enterprise ERP Systems</CardTitle>
                <CardDescription>
                  Comprehensive Enterprise Resource Planning solutions to
                  streamline operations and boost efficiency across departments.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 bg-white">
              <CardHeader>
                <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Database Management</CardTitle>
                <CardDescription>
                  Advanced database design, optimization, and management
                  services ensuring your data is secure, accessible, and
                  performing optimally.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 bg-white">
              <CardHeader>
                <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Web Development</CardTitle>
                <CardDescription>
                  Modern, responsive websites and web applications built with
                  cutting-edge technologies and optimized for performance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 bg-white">
              <CardHeader>
                <div className="h-12 w-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Mobile Applications</CardTitle>
                <CardDescription>
                  Native and cross-platform mobile apps for iOS and Android that
                  deliver exceptional user experiences.
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
                  Bank-level encryption, secure authentication, and compliance
                  with industry standards to protect your business data.
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
              Our proven development process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to deployment, we follow a structured approach that
              ensures your custom solution meets every requirement.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Discovery & Planning
              </h3>
              <p className="text-gray-600">
                We analyze your business requirements, existing systems, and
                goals to create a comprehensive development strategy.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Custom Development
              </h3>
              <p className="text-gray-600">
                Our expert team builds your solution using modern technologies,
                with regular updates and feedback throughout the process.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Deploy & Support
              </h3>
              <p className="text-gray-600">
                We handle deployment, training, and provide ongoing support to
                ensure your solution continues to deliver results.
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
              Trusted by businesses worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how companies have transformed their operations with
              CipherBridge's custom solutions.
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
                  "CipherBridge's custom CRM solution transformed our sales
                  process. Our team productivity increased by 60% and customer
                  satisfaction has never been higher."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold">
                    SJ
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">
                      Sales Director, TechSolutions
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
                  "Their ERP system streamlined our entire operation. What used
                  to take days now takes hours. The ROI was evident within the
                  first quarter."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold">
                    MR
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">
                      Michael Rodriguez
                    </p>
                    <p className="text-sm text-gray-600">
                      CEO, ManufacturingCorp
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
                  "The mobile app CipherBridge developed exceeded our
                  expectations. Our customers love it and it's significantly
                  boosted our engagement."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold">
                    EC
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Emily Chen</p>
                    <p className="text-sm text-gray-600">CTO, RetailPlus</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Quote Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get a Custom Quote for Your Project
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your requirements and our team will call you to
              discuss your project and provide a detailed proposal.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 bg-gray-50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Request Your Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and our team will contact you within
                  24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitQuote} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={(e) =>
                          handleInputChange("fullName", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        placeholder="Your company name"
                        value={formData.companyName}
                        onChange={(e) =>
                          handleInputChange("companyName", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        placeholder="your@email.com"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        placeholder="+1 (555) 123-4567"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      value={formData.projectType}
                      onChange={(e) =>
                        handleInputChange("projectType", e.target.value)
                      }
                      required
                    >
                      <option value="">Select your project type</option>
                      <option value="crm">Custom CRM Solution</option>
                      <option value="erp">Enterprise ERP System</option>
                      <option value="database">Database Management</option>
                      <option value="website">Website Development</option>
                      <option value="mobile">Mobile Application</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Budget Range
                    </label>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      value={formData.budgetRange}
                      onChange={(e) =>
                        handleInputChange("budgetRange", e.target.value)
                      }
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                      <option value="discuss">Prefer to discuss</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Timeline
                    </label>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      value={formData.timeline}
                      onChange={(e) =>
                        handleInputChange("timeline", e.target.value)
                      }
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (Rush project)</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6months+">6+ months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Requirements *
                    </label>
                    <Textarea
                      placeholder="Please describe your project requirements, features needed, current challenges, and any specific goals you want to achieve..."
                      className="min-h-32"
                      value={formData.requirements}
                      onChange={(e) =>
                        handleInputChange("requirements", e.target.value)
                      }
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full gradient-primary text-white border-0 hover:opacity-90 py-4 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Get My Custom Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-gray-600 text-center">
                    Our team will review your requirements and call you within
                    24 hours • Free consultation • No commitment required
                  </p>
                </form>
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
              Built by development experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CipherBridge was founded by experienced software architects and
              developers who understand the unique challenges businesses face
              when implementing custom digital solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                We believe every business deserves custom software solutions
                that perfectly fit their unique processes and requirements. Our
                mission is to bridge the gap between complex business needs and
                innovative technology solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-900">
                    500+ custom solutions delivered
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-900">
                    99.9% client satisfaction rate
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-900">
                    15+ years combined experience
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-lg">
                <h4 className="text-3xl font-bold text-gray-900">500+</h4>
                <p className="text-gray-600">Projects Delivered</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg">
                <h4 className="text-3xl font-bold text-gray-900">99.9%</h4>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg">
                <h4 className="text-3xl font-bold text-gray-900">50+</h4>
                <p className="text-gray-600">Technologies</p>
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
              Ready to transform your business?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's discuss your unique requirements and create a custom
              solution that drives real results for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="border-0 bg-gray-50">
              <CardHeader>
                <CardTitle>Get a Free Consultation</CardTitle>
                <CardDescription>
                  Discuss your project requirements with our experts and get a
                  detailed proposal.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Work email address" type="email" />
                <Input placeholder="Company name" />
                <Button className="w-full gradient-primary text-white border-0 hover:opacity-90">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-sm text-gray-600 text-center">
                  No commitment required • Free project assessment
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gray-50">
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
                <CardDescription>
                  Tell us about your project and we'll provide a detailed
                  proposal with timeline and pricing.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Full name" />
                <Input placeholder="Work email" type="email" />
                <Textarea placeholder="Describe your project requirements..." />
                <Button className="w-full" variant="outline">
                  Request Quote
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
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F58568866d7a34cc4ad219fad1e3fa393%2F4e597770b24444ffa5efbbeb32e8ee28?format=webp&width=800"
                  alt="CipherBridge Logo"
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 mb-6">
                Bridging the gap between business needs and innovative
                technology solutions.
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
              © 2024 CipherBridge. All rights reserved.
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
