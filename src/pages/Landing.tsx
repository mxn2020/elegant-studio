// src/pages/Landing.tsx

import React, { useState, useEffect } from 'react';
import { Hammer, Users, CheckCircle, Phone, Mail, MapPin, Building, Wrench, Home, User, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, CardContent, Badge, Header, Nav, Section, Span, H1, H2, H3, P, Div, Footer, Input, Textarea } from '../lib/dev-container';
import { useAuth } from '../components/auth/AuthProvider';
import type { ComponentRegistryId } from '../registry/componentRegistry';

// Helper functions to ensure type safety for dynamic IDs
const getServiceCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['service-card-0', 'service-card-1', 'service-card-2', 'service-card-3', 'service-card-4', 'service-card-5'];
  return ids[index] || 'noID';
};

const getProjectCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['project-card-0', 'project-card-1', 'project-card-2', 'project-card-3'];
  return ids[index] || 'noID';
};

const getStatCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['stat-card-0', 'stat-card-1', 'stat-card-2', 'stat-card-3'];
  return ids[index] || 'noID';
};

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
    console.log('Contact form submitted:', contactForm);
    // Reset form
    setContactForm({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const services = [
    {
      icon: <Home className="w-8 h-8 text-orange-500" />,
      title: "Residential Construction",
      description: "Custom homes, renovations, and residential building projects throughout Brooklyn"
    },
    {
      icon: <Building className="w-8 h-8 text-blue-500" />,
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and commercial property development"
    },
    {
      icon: <Wrench className="w-8 h-8 text-green-500" />,
      title: "Renovation & Remodeling",
      description: "Kitchen, bathroom, and full home renovations with modern designs"
    },
    {
      icon: <Hammer className="w-8 h-8 text-red-500" />,
      title: "General Contracting",
      description: "Complete project management from planning to final inspection"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-500" />,
      title: "Project Management",
      description: "Professional oversight ensuring projects are completed on time and budget"
    },
    {
      icon: <Users className="w-8 h-8 text-teal-500" />,
      title: "Consultation Services",
      description: "Expert advice on construction planning, permits, and design optimization"
    }
  ];

  const projects = [
    {
      title: "Brooklyn Heights Townhouse",
      description: "Complete renovation of historic 4-story townhouse",
      image: "/api/placeholder/400/300",
      category: "Residential"
    },
    {
      title: "DUMBO Commercial Space",
      description: "Modern office build-out for tech startup",
      image: "/api/placeholder/400/300",
      category: "Commercial"
    },
    {
      title: "Park Slope Kitchen Remodel",
      description: "Luxury kitchen renovation with custom cabinetry",
      image: "/api/placeholder/400/300",
      category: "Renovation"
    },
    {
      title: "Williamsburg Loft Conversion",
      description: "Industrial loft converted to modern living space",
      image: "/api/placeholder/400/300",
      category: "Residential"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Years Experience", value: "5+" },
    { label: "Happy Clients", value: "50+" },
    { label: "Team Members", value: "50+" }
  ];

  return (
    <Container componentId="construction-landing-page">
      <Div 
        devId="main-wrapper" 
        devName="Main Wrapper" 
        devDescription="Main page wrapper with construction theme background"
        className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900"
      >
        {/* Header */}
        <Header 
          devId="construction-header" 
          devName="Construction Header" 
          devDescription="Primary site header with construction company branding"
          className="container mx-auto px-4 py-6"
        >
          <Nav 
            devId="construction-nav" 
            devName="Construction Navigation" 
            devDescription="Primary navigation bar for construction company"
            className="flex items-center justify-between"
          >
            <Div 
              devId="construction-logo" 
              devName="Construction Logo" 
              devDescription="Brooklyn construction company logo and brand"
              className="flex items-center space-x-2"
            >
              <Div devId="noID" className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Hammer className="w-5 h-5 text-white" />
              </Div>
              <Span 
                devId="construction-brand-name" 
                devName="Construction Brand Name" 
                devDescription="Brooklyn Construction Co brand name"
                className="text-xl font-bold text-white"
              >
                Brooklyn Construction Co.
              </Span>
            </Div>
            <Div 
              devId="construction-nav-actions" 
              devName="Construction Navigation Actions" 
              devDescription="Navigation buttons and user menu for construction site"
              className="flex items-center space-x-4"
            >
              <Button 
                devId="nav-services-button" 
                devName="Services Button" 
                devDescription="Link to services section"
                variant="ghost" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Services
              </Button>
              <Button 
                devId="nav-projects-button" 
                devName="Projects Button" 
                devDescription="Link to projects section"
                variant="ghost" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Projects
              </Button>
              <Button 
                devId="nav-contact-button" 
                devName="Contact Button" 
                devDescription="Link to contact section"
                variant="ghost" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact
              </Button>
              {isAuthenticated ? (
                <Div 
                  devId="construction-user-section" 
                  devName="Construction User Section" 
                  devDescription="Authenticated user area for construction dashboard"
                  className="flex items-center space-x-4"
                >
                  <Span 
                    devId="construction-welcome-message" 
                    devName="Construction Welcome Message" 
                    devDescription="Welcome message for authenticated construction user"
                    className="text-gray-300"
                  >
                    Welcome, {user?.name?.split(' ')[0]}!
                  </Span>
                  <Link to="/dashboard">
                    <Button 
                      devId="construction-dashboard-button"
                      devName="Construction Dashboard Button"
                      devDescription="Dashboard button for construction management"
                      className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Dashboard
                    </Button>
                  </Link>
                </Div>
              ) : (
                <Div 
                  devId="construction-auth-buttons" 
                  devName="Construction Auth Buttons" 
                  devDescription="Login and register buttons for construction site"
                  className="flex items-center space-x-2"
                >
                  <Link to="/login">
                    <Button 
                      devId="construction-login-button"
                      devName="Construction Login Button"
                      devDescription="Login button for construction dashboard access"
                      variant="ghost" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button 
                      devId="construction-register-button"
                      devName="Construction Register Button"
                      devDescription="Get quote button for construction services"
                      className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Get Quote
                    </Button>
                  </Link>
                </Div>
              )}
            </Div>
          </Nav>
        </Header>

        {/* Hero Section */}
        <Container componentId="construction-hero-section">
          <Section 
            devId="construction-hero-content" 
            devName="Construction Hero Content" 
            devDescription="Main hero section for Brooklyn construction company"
            className="container mx-auto px-4 py-20 text-center"
          >
            <Div 
              devId="construction-hero-wrapper" 
              devName="Construction Hero Wrapper" 
              devDescription="Animated wrapper for construction hero content"
              className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <H1 
                devId="construction-hero-title" 
                devName="Construction Hero Title" 
                devDescription="Main hero title for Brooklyn construction services"
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Building Brooklyn's
                <Span 
                  devId="construction-future-highlight" 
                  devName="Construction Future Highlight" 
                  devDescription="Highlighted future text in gradient"
                  className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
                >
                  {' '}Future
                </Span>
              </H1>
              <P 
                devId="construction-hero-description" 
                devName="Construction Hero Description" 
                devDescription="Hero section description for construction services"
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              >
                Premier construction and renovation services in Brooklyn. From residential homes to commercial spaces, 
                we bring your vision to life with quality craftsmanship and professional expertise.
              </P>
              <Div 
                devId="construction-hero-cta" 
                devName="Construction Hero CTA" 
                devDescription="Call-to-action buttons for construction services"
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  devId="construction-get-quote-button"
                  devName="Get Quote Button"
                  devDescription="Primary CTA button for getting construction quote"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Free Quote
                </Button>
                <Button 
                  devId="construction-view-projects-button"
                  devName="View Projects Button"
                  devDescription="Secondary button to view construction projects"
                  variant="outline"
                  className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Our Work
                </Button>
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Stats Section */}
        <Container componentId="construction-stats-section">
          <Section 
            devId="construction-stats-content" 
            devName="Construction Stats Content" 
            devDescription="Statistics section showing construction company metrics"
            className="container mx-auto px-4 py-12"
          >
            <Div 
              devId="construction-stats-grid" 
              devName="Construction Stats Grid" 
              devDescription="Grid container for construction statistics"
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  devId={getStatCardId(index)}
                  devName={`${stat.label} Construction Stat`}
                  devDescription={`Construction statistic showing ${stat.label}: ${stat.value}`}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 transition-all hover:scale-110 transform"
                >
                  <CardContent devId="noID" className="p-0">
                    <Div devId="noID" className="text-2xl font-bold text-white mb-2">{stat.value}</Div>
                    <Div devId="noID" className="text-gray-400">{stat.label}</Div>
                  </CardContent>
                </Card>
              ))}
            </Div>
          </Section>
        </Container>

        {/* Services Section */}
        <Container componentId="construction-services-section">
          <Section devId="noID" className="container mx-auto px-4 py-20" id="services">
            <Div devId="noID" className="text-center mb-16">
              <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Our Construction Services</H2>
              <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
                Comprehensive construction solutions for residential and commercial projects throughout Brooklyn
              </P>
            </Div>
            <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  devId={getServiceCardId(index)}
                  devName={`${service.title} Service Card`}
                  devDescription={`Service card for ${service.title}: ${service.description}`}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-orange-500/50 transition-all"
                >
                  <CardContent devId="noID" className="p-0">
                    <Div devId="noID" className="mb-4">{service.icon}</Div>
                    <H3 devId="noID" className="text-xl font-semibold text-white mb-2">{service.title}</H3>
                    <P devId="noID" className="text-gray-400">{service.description}</P>
                  </CardContent>
                </Card>
              ))}
            </Div>
          </Section>
        </Container>

        {/* Projects Section */}
        <Container componentId="construction-projects-section">
          <Section devId="noID" className="container mx-auto px-4 py-20" id="projects">
            <Div devId="noID" className="text-center mb-16">
              <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Recent Projects</H2>
              <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
                Showcasing our latest construction and renovation projects across Brooklyn
              </P>
            </Div>
            <Div devId="noID" className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  devId={getProjectCardId(index)}
                  devName={`${project.title} Project Card`}
                  devDescription={`Project showcase for ${project.title}: ${project.description}`}
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all"
                >
                  <Div devId="noID" className="h-48 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                    <Building className="w-16 h-16 text-gray-400" />
                  </Div>
                  <CardContent devId="noID" className="p-6">
                    <Div devId="noID" className="flex justify-between items-start mb-2">
                      <H3 devId="noID" className="text-xl font-semibold text-white">{project.title}</H3>
                      <Badge devId="noID" className="bg-orange-600 text-white">{project.category}</Badge>
                    </Div>
                    <P devId="noID" className="text-gray-400">{project.description}</P>
                  </CardContent>
                </Card>
              ))}
            </Div>
          </Section>
        </Container>

        {/* Contact Section */}
        <Container componentId="construction-contact-section">
          <Section devId="noID" className="container mx-auto px-4 py-20" id="contact">
            <Div devId="noID" className="text-center mb-16">
              <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Get In Touch</H2>
              <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
                Ready to start your construction project? Contact us for a free consultation and quote.
              </P>
            </Div>
            <Div devId="noID" className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <Div devId="noID" className="space-y-8">
                <Div devId="noID" className="flex items-center space-x-4">
                  <Div devId="noID" className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </Div>
                  <Div devId="noID">
                    <H3 devId="noID" className="text-white font-semibold">Phone</H3>
                    <P devId="noID" className="text-gray-400">(718) 555-0123</P>
                  </Div>
                </Div>
                <Div devId="noID" className="flex items-center space-x-4">
                  <Div devId="noID" className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </Div>
                  <Div devId="noID">
                    <H3 devId="noID" className="text-white font-semibold">Email</H3>
                    <P devId="noID" className="text-gray-400">info@brooklynconstruction.com</P>
                  </Div>
                </Div>
                <Div devId="noID" className="flex items-center space-x-4">
                  <Div devId="noID" className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </Div>
                  <Div devId="noID">
                    <H3 devId="noID" className="text-white font-semibold">Address</H3>
                    <P devId="noID" className="text-gray-400">123 Construction Ave<br />Brooklyn, NY 11201</P>
                  </Div>
                </Div>
              </Div>

              {/* Contact Form */}
              <Card 
                devId="construction-contact-form-card" 
                devName="Construction Contact Form" 
                devDescription="Contact form for construction inquiries and quotes"
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <CardContent devId="noID" className="p-0">
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <Div devId="noID" className="grid md:grid-cols-2 gap-4">
                      <Div devId="noID">
                        <label className="block text-white text-sm font-medium mb-2">Name</label>
                        <Input
                          devId="contact-name-input"
                          devName="Contact Name Input"
                          devDescription="Name input field for contact form"
                          type="text"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                          className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400"
                          placeholder="Your Name"
                          required
                        />
                      </Div>
                      <Div devId="noID">
                        <label className="block text-white text-sm font-medium mb-2">Email</label>
                        <Input
                          devId="contact-email-input"
                          devName="Contact Email Input"
                          devDescription="Email input field for contact form"
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                          className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400"
                          placeholder="your@email.com"
                          required
                        />
                      </Div>
                    </Div>
                    <Div devId="noID" className="grid md:grid-cols-2 gap-4">
                      <Div devId="noID">
                        <label className="block text-white text-sm font-medium mb-2">Phone</label>
                        <Input
                          devId="contact-phone-input"
                          devName="Contact Phone Input"
                          devDescription="Phone input field for contact form"
                          type="tel"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                          className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400"
                          placeholder="(555) 123-4567"
                        />
                      </Div>
                      <Div devId="noID">
                        <label className="block text-white text-sm font-medium mb-2">Service Needed</label>
                        <select
                          value={contactForm.service}
                          onChange={(e) => setContactForm({...contactForm, service: e.target.value})}
                          className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2"
                        >
                          <option value="">Select a service</option>
                          <option value="residential">Residential Construction</option>
                          <option value="commercial">Commercial Construction</option>
                          <option value="renovation">Renovation & Remodeling</option>
                          <option value="contracting">General Contracting</option>
                          <option value="consultation">Consultation</option>
                        </select>
                      </Div>
                    </Div>
                    <Div devId="noID">
                      <label className="block text-white text-sm font-medium mb-2">Message</label>
                      <Textarea
                        devId="contact-message-input"
                        devName="Contact Message Input"
                        devDescription="Message textarea for contact form"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400"
                        placeholder="Tell us about your project..."
                        rows={4}
                        required
                      />
                    </Div>
                    <Button
                      devId="contact-submit-button"
                      devName="Contact Submit Button"
                      devDescription="Submit button for construction contact form"
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 rounded-lg font-semibold transition-all"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Div>
          </Section>
        </Container>

        {/* Footer */}
        <Footer 
          devId="construction-footer" 
          devName="Construction Footer" 
          devDescription="Site footer for Brooklyn construction company"
          className="container mx-auto px-4 py-8 border-t border-white/10"
        >
          <Div devId="noID" className="flex flex-col md:flex-row justify-between items-center">
            <Div devId="noID" className="text-gray-400 mb-4 md:mb-0">
              © 2024 Brooklyn Construction Co. Building dreams since 1999.
            </Div>
            <Div devId="noID" className="flex space-x-6">
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </Div>
          </Div>
        </Footer>
      </Div>
    </Container>
  );
};