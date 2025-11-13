"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import QuoteModal from "@/components/quote-modal"
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Search,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  Play,
  Award,
  Clock,
  Shield,
  Code,
  Globe,
  Database,
  Cloud,
  Settings,
  Monitor,
  MessageCircle,
} from "lucide-react"
import { useEffect, useState, useCallback } from "react"
import SplitText from "@/components/split-text";
import ParticleBackground from "@/components/particle-background";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import CardsContainer from "@/components/cards-container";
import Waves from "@/components/waves";
import { url } from "inspector"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home")
  const [activeTab, setActiveTab] = useState<keyof typeof tabContent>("mission")
  const [activeFilter, setActiveFilter] = useState("all")
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })])

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "about", "mission", "contact", "portfolio"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const animatedElements = document.querySelectorAll(".fade-in-section")
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const tabContent = {
    mission: {
      title: "Our Mission",
      description:
        "To empower businesses through innovative technology solutions that drive growth, efficiency, and digital transformation. We are committed to delivering cutting-edge web development, AI-powered applications, and comprehensive IT services that help our clients stay ahead in the digital age.",
      features: ["Innovative Solutions", "Client-Focused Approach", "Continuous Innovation", "Quality Assurance"],
    },
    vision: {
      title: "Our Vision",
      description:
        "To be the leading technology partner for businesses across Africa, recognized for our expertise in web development, artificial intelligence, and digital transformation. We envision a future where every business, regardless of size, has access to world-class technology solutions.",
      features: ["Market Leadership", "Global Recognition", "Technology Excellence", "Sustainable Growth"],
    },
    services: {
      title: "IT Services",
      description:
        "We offer comprehensive IT services including web development, software solutions, mobile applications, AI chatbots, cloud services, cybersecurity, and professional IT training programs designed to meet modern business needs.",
      features: ["Web Development", "Software Solutions", "Mobile Apps", "AI Chatbots"],
    },
    history: {
      title: "Our History",
      description:
        "Founded with a vision to bridge the technology gap in Zimbabwe, Verdsoft has grown from a small startup to a trusted IT solutions provider. Our journey reflects our commitment to excellence and innovation in the technology sector.",
      features: ["2020 - Founded", "2021 - First Major Client", "2022 - Team Expansion", "2023 - AI Integration"],
    },
  }

  const portfolioProjects = [
    { id: 1, category: "business", title: "E-commerce Platform", image: "/it-technology-digital-transformation.png" },
    { id: 2, category: "design", title: "Corporate Website", image: "/business-team-data-analysis-meeting.png" },
    {
      id: 3,
      category: "development",
      title: "Mobile Banking App",
      image: "/web-development-team-working-on-laptop.png",
    },
    {
      id: 4,
      category: "technology",
      title: "AI Chatbot System",
      image: "/software-development-professionals-discussing.png",
    },
    { id: 5, category: "business", title: "CRM Solution", image: "/modern-office-collaboration.png" },
    { id: 6, category: "idea", title: "IoT Dashboard", image: "/business-meeting-discussion-planning.png" },
  ]

  const filteredProjects =
    activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === activeFilter)

  const services = [
    {
      id: 1,
      category: "TECHNOLOGY",
      title: "Software Solution",
      description: "Build powerful, scalable software solutions that streamline your business operations and drive growth.",
      image: "/wodev.png",
      icon: Monitor
    },
    {
      id: 2,
      category: "SOLUTION",
      title: "Mobile Apps",
      description: "Develop custom mobile applications for iOS and Android platforms tailored to your business needs.",
      image: "/mob.png",
      icon: Phone
    },
    {
      id: 3,
      category: "EDUCATION",
      title: "IT Training",
      description: "Comprehensive IT training programs designed to upskill your team and enhance their technical expertise.",
      image: "/maledev.png",
      icon: Settings
    },
    {
      id: 4,
      category: "DEVELOPMENT",
      title: "Custom Software",
      description: "Tailored software solutions built from the ground up to meet the unique demands of your business.",
      image: "/wo2.png",
      icon: Monitor
    }
  ]

  const serviceTexts = [
    "Web Development & Modern Websites",
    "AI Chatbots & Automation Solutions",
    "Cloud, Mobile Apps & IT Training"
  ];
  const [serviceIdx, setServiceIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIdx((idx) => (idx + 1) % serviceTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 py-1 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-gray-600">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              <span>4th Floor Karigamombe, Harare CBD</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3" />
              <span>info@verdsoft.co.zw</span>
            </div>
          </div>
          <div className="flex items-center gap-3">

            <Facebook className="w-3 h-3 cursor-pointer" />


            <Linkedin className="w-3 h-3 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold text-gray-900">
                <img src="/logoverd.png" alt="Verdsoft Logo" className="w-28 h-10" />
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <button
                onClick={() => scrollToSection("home")}
                className={`hover:text-blue-600 transition-colors relative ${
                  activeSection === "home" ? "text-blue-600" : "text-gray-700"
                }`}
              >
                Home
                {activeSection === "home" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>}
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className={`hover:text-blue-600 transition-colors relative ${
                  activeSection === "about" ? "text-blue-600" : "text-gray-700"
                }`}
              >
                About
                {activeSection === "about" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={`hover:text-blue-600 transition-colors relative ${
                  activeSection === "services" ? "text-blue-600" : "text-gray-700"
                }`}
              >
                Services
                {activeSection === "services" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>}
              </button>
              <button
                onClick={() => scrollToSection("mission")}
                className={`hover:text-blue-600 transition-colors relative ${
                  activeSection === "mission" ? "text-blue-600" : "text-gray-700"
                }`}
              >
                Mission
                {activeSection === "mission" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>}
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className={`hover:text-blue-600 transition-colors relative ${
                  activeSection === "portfolio" ? "text-blue-600" : "text-gray-700"
                }`}
              >
                Portfolio
                {activeSection === "portfolio" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`hover:text-blue-600 transition-colors relative ${
                  activeSection === "contact" ? "text-blue-600" : "text-gray-700"
                }`}
              >
                Contact
                {activeSection === "contact" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>}
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center gap-3 text-xs">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-medium">Free Consultant:</div>
                  <div className="font-semibold text-sm text-gray-900">+263 787 062 575</div>
                </div>
              </div>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-sm font-semibold h-10 shadow-md hover:shadow-lg transition-all"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                GET A QUOTE <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden fade-in-section"

      >
         {/* Background Image */}
         <img
            src="/bact.png"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
            style={{ left: '-1rem', right: '-1rem', top: '-4rem', bottom: '-4rem', width: 'calc(100% + 2rem)', height: 'calc(100% + 8rem)' }}
          />

        {/* Waves Background */}
        <div className="absolute inset-0 z-0">
          <Waves
            lineColor="rgba(59, 130, 246, 0.4)"
            waveSpeedX={0.01}
            waveSpeedY={0.005}
            waveAmpX={20}
            waveAmpY={10}
            xGap={20}
            yGap={20}
            friction={0.9}
            tension={0.002}
            maxCursorMove={50}
          />
        </div>

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#0a1628]/70 via-[#1a237e]/60 to-[#0d1b3a]/70 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[75vh]">
            {/* Left Column - Text Content */}
            <div className="text-white text-left space-y-6">
              {/* Main Heading */}
              <div className="space-y-3">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  {mounted ? (
                    <SplitText text="Innovative" splitType="words" className="block text-white" textAlign="left" />
                  ) : (
                    <span className="block text-white">Innovative</span>
                  )}
                  <span className="block text-white mt-2">
                    {mounted ? (
                      <SplitText text="I.T Solutions" splitType="words" className="block" textAlign="left" />
                    ) : (
                      "I.T Solutions"
                    )}
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-200 leading-relaxed max-w-xl">
                {mounted ? (
                  <SplitText
                    text="Transform your business with cutting-edge technology solutions. We deliver responsive, secure, and scalable IT services tailored to drive your success in the digital age."
                    splitType="words"
                    textAlign="left"
                  />
                ) : (
                  "Transform your business with cutting-edge technology solutions. We deliver responsive, secure, and scalable IT services tailored to drive your success in the digital age."
                )}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-semibold rounded-lg shadow-lg transition-all"
                  onClick={() => scrollToSection("contact")}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white px-8 py-3 text-base font-semibold rounded-lg backdrop-blur-sm transition-all"
                  onClick={() => scrollToSection("portfolio")}
                >
                  View Portfolio
                </Button>
              </div>
            </div>

            {/* Right Column - Cards */}
            <CardsContainer />
          </div>
        </div>
      </section>

      {/* Consultation Form Section (overlapping hero) */}
      <section className="relative z-30 flex justify-center w-full -mt-16 pb-8">
        <div
          className="bg-white rounded-2xl shadow-2xl px-6 py-6 w-full max-w-4xl border border-gray-200 flex flex-col md:flex-row items-stretch gap-6 mx-4"
          style={{ boxShadow: "0 10px 40px 0 rgba(11,30,63,0.15)" }}
        >
          {/* Left Column */}
          <div className="flex flex-col justify-center md:w-1/3 w-full gap-2">
            <div className="text-xs text-blue-600 font-bold uppercase tracking-wide flex items-center gap-2">
              <Mail className="w-4 h-4" />
              GET IN TOUCH
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              Free Consultation
            </h3>
            <p className="text-sm text-gray-600">Let's discuss your project</p>
          </div>
          {/* Right Column */}
          <form className="flex-1 flex flex-col gap-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Input
                placeholder="Your Name"
                className="rounded-lg bg-gray-50 border border-gray-200 h-10 text-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <Input
                placeholder="Email Address"
                type="email"
                className="rounded-lg bg-gray-50 border border-gray-200 h-10 text-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <Input
                placeholder="Phone Number"
                className="rounded-lg bg-gray-50 border border-gray-200 h-10 text-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Select>
                <SelectTrigger className="rounded-lg bg-gray-50 border border-gray-200 h-10 text-sm">
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="web">Web Development</SelectItem>
                  <SelectItem value="software">Software Development</SelectItem>
                  <SelectItem value="mobile">Mobile Apps</SelectItem>
                  <SelectItem value="ai">AI Chatbots</SelectItem>
                  <SelectItem value="training">IT Training</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="mm/dd/yyyy"
                type="date"
                className="rounded-lg bg-gray-50 border border-gray-200 h-10 text-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all h-10">
                BOOK NOW
              </Button>
            </div>
          </form>
        </div>
      </section>


       {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 fade-in-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-md w-11/12 mx-auto">
                <img
                  src="/maledev.png"
                  alt="About Company"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg px-4 py-3 shadow-md">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">5+</div>
                      <div className="text-xs text-gray-600">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="space-y-6">
              <div>
                <Badge className="bg-blue-600 text-white border-none mb-4 px-4 py-1 text-xs font-semibold">
                  ABOUT COMPANY
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Empowering Businesses with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                    Innovative IT Solutions
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We specialize in delivering comprehensive IT services tailored for startups and growing businesses. Our expertise spans web development, mobile app creation, custom software solutions, and advanced AI chatbot integration. With a focus on quality, security, and scalability, we help our clients transform their ideas into impactful digital products.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 pt-4">
                <Card className="p-4 hover:shadow-md transition-all border-none bg-white shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Code className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-1">Web Development</h3>
                      <p className="text-xs text-gray-600">
                        Modern, responsive websites built with cutting-edge technologies.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-all border-none bg-white shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="bg-cyan-100 p-2 rounded-lg">
                      <Monitor className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-1">Mobile Apps</h3>
                      <p className="text-xs text-gray-600">
                        Custom iOS and Android apps that engage and convert users.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-all border-none bg-white shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Database className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-1">Software Solutions</h3>
                      <p className="text-xs text-gray-600">
                        End-to-end software tailored to your business needs.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-all border-none bg-white shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-1">AI Chatbots</h3>
                      <p className="text-xs text-gray-600">
                        Intelligent automation for enhanced customer engagement.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white fade-in-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-600 text-white border-none mb-4 px-4 py-1 text-xs font-semibold">
              OUR SERVICES
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Professional IT Services{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                We Deliver
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation journey
            </p>
          </div>

          <div className="relative">
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex -ml-4">
                {services.map((service) => {
                  const IconComponent = service.icon
                  return (
                    <div key={service.id} className="embla__slide min-w-0 flex-grow-0 flex-shrink-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden border-none bg-white shadow-sm">
                        <CardContent className="p-0">
                          <div className="relative overflow-hidden">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-3 left-3 bg-white p-2 rounded-lg shadow-md group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                              <IconComponent className="w-5 h-5" />
                            </div>
                          </div>
                          <div className="p-5">
                            <Badge className="bg-blue-50 text-blue-600 border-none mb-2 text-xs font-semibold">
                              {service.category}
                            </Badge>
                            <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                              {service.description}
                            </p>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="rounded-full bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-600 w-9 h-9 p-0 transition-all"
                            >
                              <ArrowRight className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="embla__dots flex justify-center mt-10 space-x-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`embla__dot w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => emblaApi && emblaApi.scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

     

      {/* Services Grid Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50/30 fade-in-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="text-center p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 border-none bg-white shadow-sm group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300">
                <span className="text-xl font-bold text-blue-600 group-hover:text-white transition-colors">01</span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">IT Management</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Strategic IT management solutions to ensure proactive operations and drive business growth.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 border-none bg-white shadow-sm group">
              <div className="bg-gradient-to-br from-cyan-100 to-cyan-50 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-cyan-600 group-hover:to-cyan-500 transition-all duration-300">
                <span className="text-xl font-bold text-cyan-600 group-hover:text-white transition-colors">02</span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-600 transition-colors">Cloud Services</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Modern cloud-based applications and seamless migration services for enhanced scalability.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 border-none bg-white shadow-sm group">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-purple-600 group-hover:to-purple-500 transition-all duration-300">
                <span className="text-xl font-bold text-purple-600 group-hover:text-white transition-colors">03</span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-purple-600 transition-colors">Machine Learning</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                AI-powered solutions and intelligent automation for transformative business processes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission/Vision Section */}
      <section id="mission" className="py-20 bg-white fade-in-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-full p-1.5 shadow-sm">
              <Button
                onClick={() => setActiveTab("mission")}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                  activeTab === "mission" ? "bg-blue-600 text-white shadow-md" : "bg-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Our Mission
              </Button>
              <Button
                onClick={() => setActiveTab("vision")}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                  activeTab === "vision" ? "bg-blue-600 text-white shadow-md" : "bg-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Our Vision
              </Button>
              <Button
                onClick={() => setActiveTab("services")}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                  activeTab === "services" ? "bg-blue-600 text-white shadow-md" : "bg-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                IT Services
              </Button>
              <Button
                onClick={() => setActiveTab("history")}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                  activeTab === "history" ? "bg-blue-600 text-white shadow-md" : "bg-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                History
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-md w-11/12 mx-auto">
                <img
                  src="/business-meeting-discussion-planning.png"
                  alt={tabContent[activeTab].title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {tabContent[activeTab].title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {tabContent[activeTab].description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {tabContent[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

         {/* Portfolio Section */}
         <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 fade-in-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-600 text-white border-none mb-4 px-4 py-1 text-xs font-semibold">
              FEATURED PROJECTS
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Showcase Of Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Recognized Work
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our portfolio of successful projects across various industries and technologies
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap gap-3 justify-center">
              <Button
                onClick={() => setActiveFilter("all")}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                  activeFilter === "all" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
                }`}
              >
                All
              </Button>
              <Button
                onClick={() => setActiveFilter("business")}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                  activeFilter === "business" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
                }`}
              >
                Business
              </Button>
              <Button
                onClick={() => setActiveFilter("design")}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                  activeFilter === "design" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
                }`}
              >
                Design
              </Button>
              <Button
                onClick={() => setActiveFilter("development")}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                  activeFilter === "development" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
                }`}
              >
                Development
              </Button>
              <Button
                onClick={() => setActiveFilter("idea")}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                  activeFilter === "idea" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
                }`}
              >
                Idea
              </Button>
              <Button
                onClick={() => setActiveFilter("technology")}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                  activeFilter === "technology" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
                }`}
              >
                Technology
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-none bg-white shadow-sm group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                      <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-3 py-1 text-xs">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </Badge>
                      <div className="mt-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/50 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm text-xs h-8"
                        >
                          View Details
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#0a1628] via-[#1a237e] to-[#0d1b3a] text-white fade-in-section relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 mb-4 px-4 py-1 text-xs font-semibold">
                  GET IN TOUCH
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Get Amazing{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    IT Services
                  </span>
                </h2>
                <p className="text-lg text-blue-100 leading-relaxed">
                  Ready to transform your business with cutting-edge technology? Our expert team is standing by to discuss
                  your project and provide instant solutions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-colors">
                  <div className="bg-blue-500/20 p-3 rounded-xl">
                    <Shield className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">High Security</h3>
                    <p className="text-sm text-blue-100/80 leading-relaxed">
                      Enterprise-grade security measures to protect your data and ensure compliance with industry standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-colors">
                  <div className="bg-cyan-500/20 p-3 rounded-xl">
                    <Award className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Quality Control</h3>
                    <p className="text-sm text-blue-100/80 leading-relaxed">
                      Rigorous testing and quality assurance processes to deliver flawless solutions that exceed expectations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-colors">
                  <div className="bg-purple-500/20 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">24/7 Support</h3>
                    <p className="text-sm text-blue-100/80 leading-relaxed">
                      Round-the-clock support team ready to assist you whenever you need help or guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-blue-600 font-bold uppercase tracking-wide">GET IN TOUCH</div>
                  <h3 className="text-xl font-bold">Have Questions? Contact Us</h3>
                </div>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Your Name" className="border-gray-300 h-11 focus:border-blue-500 focus:ring-blue-500" />
                  <Input placeholder="Email Address" type="email" className="border-gray-300 h-11 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Phone Number" className="border-gray-300 h-11 focus:border-blue-500 focus:ring-blue-500" />
                  <Select>
                    <SelectTrigger className="border-gray-300 h-11">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="software">Software Development</SelectItem>
                      <SelectItem value="mobile">Mobile Apps</SelectItem>
                      <SelectItem value="ai">AI Chatbots</SelectItem>
                      <SelectItem value="training">IT Training</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Textarea placeholder="Type Your Message" className="border-gray-300 min-h-[100px] text-sm focus:border-blue-500 focus:ring-blue-500" />
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all">
                  SUBMIT NOW
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

   

    

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 fade-in-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold mb-4">
                <img src="/logoverd.png" alt="Verdsoft" className="w-8 h-8" />
              </div>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                Verdsoft - IT Solution and Technology Modern Elementor Theme.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-300">4th Floor Karigamombe, Harare CBD</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-300">info@verdsoft.co.zw</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-300">+263 787 062 575</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold mb-3">Useful Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("mission")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Our Mission
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Get Quote
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold mb-3">Our Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Web Development
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Software Development
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Mobile Applications
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    AI Chatbots
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    IT Training
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cloud Services
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold mb-3">Newsletter</h3>
              <p className="text-sm text-gray-400 mb-4">
                Join the Community and Receive Our Monthly Newsletter Straight to Your Inbox
              </p>
              <div className="flex gap-2 mb-4">
                <Input
                  placeholder="Your Email Address"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 text-sm h-9"
                />
                <Button className="bg-[#1a237e] hover:bg-blue-700 px-4 h-9">
                  <ArrowRight className="w-3 h-3" />
                </Button>
              </div>
              <div className="mb-3">
                <h4 className="text-sm font-semibold mb-2">Follow Us</h4>
                <div className="flex gap-2">
                  <Button size="icon" variant="ghost" className="bg-gray-800 hover:bg-[#1a237e] text-white w-8 h-8">
                    <Twitter className="w-3 h-3" />
                  </Button>
                  <Button size="icon" variant="ghost" className="bg-gray-800 hover:bg-[#1a237e] text-white w-8 h-8">
                    <Facebook className="w-3 h-3" />
                  </Button>
                  <Button size="icon" variant="ghost" className="bg-gray-800 hover:bg-[#1a237e] text-white w-8 h-8">
                    <Instagram className="w-3 h-3" />
                  </Button>
                  <Button size="icon" variant="ghost" className="bg-gray-800 hover:bg-[#1a237e] text-white w-8 h-8">
                    <Linkedin className="w-3 h-3" />
                  </Button>
                  <Button size="icon" variant="ghost" className="bg-gray-800 hover:bg-[#1a237e] text-white w-8 h-8">
                    <Globe className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-sm text-gray-400">Copyright © 2025 All Rights Reserved | VERDSOFT Made by ThemeHt</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          size="icon"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-2xl w-12 h-12 transition-all hover:scale-110"
          onClick={() => scrollToSection("home")}
        >
          <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
        </Button>
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  )
}
