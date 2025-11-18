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
import StarBorder from "@/components/star-border";
import ParticleBackground from "@/components/particle-background";
import ElectricBorder from "@/components/electric-border";
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
    { id: 1, category: "business", title: "E-commerce Platform", image: "/images/it-technology-digital-transformation.png" },
    { id: 2, category: "design", title: "Corporate Website", image: "/images/business-team-data-analysis-meeting.png" },
    {
      id: 3,
      category: "development",
      title: "Mobile Banking App",
      image: "/images/Gemini_Generated_Image_mgell9mgell9mgel.png",
    },
    {
      id: 4,
      category: "technology",
      title: "AI Chatbot System",
      image: "/images/software-development-professionals-discussing.png",
    },
    { id: 5, category: "business", title: "CRM Solution", image: "/images/modern-office-collaboration.png" },
    { id: 6, category: "idea", title: "IoT Dashboard", image: "/images/business-meeting-discussion-planning.png" },
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
      image: "/images/software-development-professionals-discussing.png",
      icon: Monitor
    },
    {
      id: 2,
      category: "SOLUTION",
      title: "Mobile Apps",
      description: "Develop custom mobile applications for iOS and Android platforms tailored to your business needs.",
      image: "/images/Gemini_Generated_Image_vi0nomvi0nomvi0n.png",
      icon: Phone
    },
    {
      id: 3,
      category: "EDUCATION",
      title: "IT Training",
      description: "Comprehensive IT training programs designed to upskill your team and enhance their technical expertise.",
      image: "/images/business-team-data-analysis-meeting.png",
      icon: Settings
    },
    {
      id: 4,
      category: "DEVELOPMENT",
      title: "Custom Software",
      description: "Tailored software solutions built from the ground up to meet the unique demands of your business.",
      image: "/images/modern-office-collaboration.png",
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
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center">
              <div className="text-xl font-bold text-gray-900">
                <img src="/logoverd.png" alt="Verdsoft Logo" className="w-24 h-8" />
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6 text-sm">
              <button
                onClick={() => scrollToSection("home")}
                className={`hover:text-[#1a237e] transition-colors ${
                  activeSection === "home" ? "text-[#1a237e] font-semibold" : "text-gray-700"
                }`}
              >
                Home
              </button>
             
              <button
                onClick={() => scrollToSection("about")}
                className={`hover:text-[#1a237e] transition-colors ${
                  activeSection === "about" ? "text-[#1a237e] font-semibold" : "text-gray-700"
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={`hover:text-[#1a237e] transition-colors ${
                  activeSection === "services" ? "text-[#1a237e] font-semibold" : "text-gray-700"
                }`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("mission")}
                className={`hover:text-[#1a237e] transition-colors ${
                  activeSection === "mission" ? "text-[#1a237e] font-semibold" : "text-gray-700"
                }`}
              >
                Mission
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className={`hover:text-[#1a237e] transition-colors ${
                  activeSection === "portfolio" ? "text-[#1a237e] font-semibold" : "text-gray-700"
                }`}
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`hover:text-[#1a237e] transition-colors ${
                  activeSection === "contact" ? "text-[#1a237e] font-semibold" : "text-gray-700"
                }`}
              >
                Contact
              </button>
            </nav>

            <div className="flex items-center space-x-3">

              <div className="hidden lg:flex items-center gap-2 text-xs">
                <div className="bg-blue-100 p-1.5 rounded-full">
                  <Phone className="w-3 h-3 text-[#1a237e]" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500">Free Consultant:</div>
                  <div className="font-semibold text-xs">+263 787 062 575</div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  ))}
                </div>
              </div>
              <ElectricBorder color="#3b82f6" speed={1} chaos={0.5} thickness={2} style={{ borderRadius: '0.375rem' }}>
                <Button
                  className="bg-  text-[#1a237e] px-4 py-2 text-xs h-8"
                  onClick={() => setIsQuoteModalOpen(true)}
                >
                  GET A QUOTE <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </ElectricBorder>
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
         <img
            src="/bact.png"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
            style={{ left: '-1rem', right: '-1rem', top: '-4rem', bottom: '-4rem', width: 'calc(100% + 2rem)', height: 'calc(100% + 8rem)' }}
          />
        <div className="absolute inset-0 z-0">
          
          <Waves
            lineColor="#1e40af"
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
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-16">
         

          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[65vh]">
            <div className="text-white text-left">
              <div className="text-sm font-semibold tracking-wider text-blue-200 mb-6 uppercase">
                {mounted ? (
                  <SplitText text="SMART. SCALABLE. SECURE." splitType="words" className="inline-block text-left" textAlign="left" />
                ) : (
                  <span className="inline-block text-left">SMART. SCALABLE. SECURE.</span>
                )}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-left">
                {mounted ? (
                  <SplitText text="I.T " splitType="words" className="block text-left" textAlign="left" />
                ) : (
                  <span className="block text-left">I.T</span>
                )}
                <br />
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-300"
                  style={{
                    WebkitTextStroke: "2px rgba(59, 130, 246, 0.5)",
                    textShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  {mounted ? (
                    <SplitText text="Solutions" splitType="words" className="block text-left" textAlign="left" />
                  ) : (
                    <span className="block text-left">Solutions</span>
                  )}
                </span>
              </h1>
              <div className="mb-4 min-h-[28px] text-left">
                {mounted ? (
                  <SplitText
                    key={serviceIdx}
                    text={serviceTexts[serviceIdx]}
                    splitType="words"
                    className="text-lg text-blue-100 font-semibold text-left"
                    textAlign="left"
                  />
                ) : (
                  <span className="text-lg text-blue-100 font-semibold text-left">{serviceTexts[serviceIdx]}</span>
                )}
              </div>
              <div className="text-base text-blue-100 mb-8 leading-relaxed max-w-lg text-left">
                {mounted ? (
                  <SplitText text="We provide the most responsive and functional IT design for companies and businesses worldwide offer to help you find and select the best technology solutions." splitType="words" className="text-left" textAlign="left" />
                ) : (
                  <span className="text-left">We provide the most responsive and functional IT design for companies and businesses worldwide offer to help you find and select the best technology solutions.</span>
                )}
              </div>
            </div>
            <CardsContainer />
          </div>

        </div>
      </section>

      {/* Consultation Form Section (overlapping hero) */}
      <section className="relative z-30 flex justify-center w-full -mt-16 pb-8">
        <div
          className="bg-white rounded-3xl shadow-2xl px-6 py-6 w-full max-w-4xl border border-gray-100 flex flex-col md:flex-row items-stretch gap-6 backdrop-blur-sm bg-white/95"
          style={{ boxShadow: "0 10px 40px 0 rgba(11,30,63,0.15)" }}
        >
          {/* Left Column */}
          <div className="flex flex-col justify-center md:w-1/3 w-full gap-3">
            <div className="text-xs text-blue-600 font-bold uppercase tracking-wider">
              GET IN TOUCH
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              Make Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Consultation</span>
            </h3>
            <p className="text-sm text-gray-600">Connect with our experts today</p>
          </div>
          {/* Right Column */}
          <form className="flex-1 flex flex-col gap-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Input
                placeholder="Your Name"
                className="rounded-xl bg-gray-50 border border-gray-200 h-10 text-sm hover:border-blue-300 focus:border-blue-500 transition-colors"
              />
              <Input
                placeholder="Email Address"
                type="email"
                className="rounded-xl bg-gray-50 border border-gray-200 h-10 text-sm hover:border-blue-300 focus:border-blue-500 transition-colors"
              />
              <Input
                placeholder="Phone"
                className="rounded-xl bg-gray-50 border border-gray-200 h-10 text-sm hover:border-blue-300 focus:border-blue-500 transition-colors"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Select>
                <SelectTrigger className="rounded-xl bg-gray-50 border border-gray-200 h-10 text-sm hover:border-blue-300 focus:border-blue-500 transition-colors">
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-xl">
                  <SelectItem value="web">Web Development</SelectItem>
                  <SelectItem value="software">Software Development</SelectItem>
                  <SelectItem value="mobile">Mobile Apps</SelectItem>
                  <SelectItem value="ai">AI Chatbots</SelectItem>
                  <SelectItem value="training">IT Training</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="mm/dd/yyyy"
                className="rounded-xl bg-gray-50 border border-gray-200 h-10 text-sm hover:border-blue-300 focus:border-blue-500 transition-colors"
              />
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2 px-4 text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-10">
                BOOK NOW
              </Button>
            </div>
          </form>
        </div>
      </section>


       {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 fade-in-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative">
                <img
                  src="/images/maledev.png"
                  alt="About Company"
                  className="w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Award className="w-6 h-6 text-[#1a237e]" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#1a237e]">5+</div>
                      <div className="text-xs text-gray-600">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Badge className="bg-blue-100 text-[#1a237e] border-blue-200 mb-6 text-xs font-semibold px-4 py-2">ABOUT COMPANY</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Empowering Businesses with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Innovative IT Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                <span className="text-6xl font-bold text-[#1a237e] float-left mr-4 mt-2 leading-none">W</span>
                e specialize in delivering comprehensive IT services tailored for startups and growing businesses. Our expertise spans web development, mobile app creation, custom software solutions, and advanced AI chatbot integration. With a focus on quality, security, and scalability, we help our clients transform their ideas into impactful digital products.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="group hover:bg-blue-50 p-4 rounded-xl transition-all duration-300 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-6 h-6 text-[#1a237e]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900">Web Development</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Modern, responsive websites built with cutting-edge technologies.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group hover:bg-blue-50 p-4 rounded-xl transition-all duration-300 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-[#1a237e]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900">Mobile Apps</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Custom mobile applications for iOS and Android platforms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group hover:bg-blue-50 p-4 rounded-xl transition-all duration-300 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-6 h-6 text-[#1a237e]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900">Software Development</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        End-to-end software solutions tailored to your business needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group hover:bg-blue-50 p-4 rounded-xl transition-all duration-300 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="w-6 h-6 text-[#1a237e]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900">AI Chatbots</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Intelligent automation to enhance customer engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white fade-in-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-[#1a237e] border-blue-200 mb-6 text-xs font-semibold px-4 py-2">OUR SERVICES</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              We Deal With The Aspects Of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Professional IT Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="relative">
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex -ml-4">
                {services.map((service) => {
                  const IconComponent = service.icon
                  return (
                    <div key={service.id} className="embla__slide min-w-0 flex-grow-0 flex-shrink-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-none bg-white h-full hover:-translate-y-2">
                        <CardContent className="p-0">
                          <div className="relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="w-6 h-6 text-[#1a237e]" />
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="text-xs text-[#1a237e] font-bold mb-2 tracking-wider">{service.category}</div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-[#1a237e] transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                              {service.description}
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                              <span className="text-sm font-semibold text-gray-900 group-hover:text-[#1a237e] transition-colors">Learn More</span>
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:from-[#1a237e] group-hover:to-blue-700 flex items-center justify-center transition-all duration-300">
                                <ArrowRight className="w-4 h-4 text-[#1a237e] group-hover:text-white transition-colors" />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="embla__dots flex justify-center mt-12 space-x-3">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`embla__dot h-2 rounded-full transition-all duration-300 ${index === selectedIndex ? 'bg-[#1a237e] w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'}`}
                  onClick={() => emblaApi && emblaApi.scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

     

      {/* Services Grid Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 fade-in-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="group text-center p-8 hover:shadow-2xl transition-all duration-500 border-none bg-white hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-[#1a237e]">01</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#1a237e] transition-colors">IT Management</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.
                </p>
              </div>
            </Card>

            <Card className="group text-center p-8 hover:shadow-2xl transition-all duration-500 border-none bg-white hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-[#1a237e]">02</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#1a237e] transition-colors">Cloud Services</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Modern cloud-based applications and migration services for enhanced scalability.
                </p>
              </div>
            </Card>

            <Card className="group text-center p-8 hover:shadow-2xl transition-all duration-500 border-none bg-white hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-[#1a237e]">03</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#1a237e] transition-colors">Machine Learning</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  AI-powered solutions and intelligent automation for modern business processes.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission/Vision Section */}
      <section id="mission" className="py-20 bg-gradient-to-b from-white to-gray-50 fade-in-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center mb-16">
            <div className="flex flex-wrap bg-white rounded-2xl p-2 shadow-xl border border-gray-100">
              <Button
                onClick={() => setActiveTab("mission")}
                className={`rounded-xl px-6 py-3 transition-all duration-300 font-semibold ${activeTab === "mission" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" : "bg-transparent text-gray-600 hover:bg-gray-50"}`}
              >
                Our Mission
              </Button>
              <Button
                onClick={() => setActiveTab("vision")}
                className={`rounded-xl px-6 py-3 transition-all duration-300 font-semibold ${activeTab === "vision" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" : "bg-transparent text-gray-600 hover:bg-gray-50"}`}
              >
                Our Vision
              </Button>
              <Button
                onClick={() => setActiveTab("services")}
                className={`rounded-xl px-6 py-3 transition-all duration-300 font-semibold ${activeTab === "services" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" : "bg-transparent text-gray-600 hover:bg-gray-50"}`}
              >
                IT Services
              </Button>
              <Button
                onClick={() => setActiveTab("history")}
                className={`rounded-xl px-6 py-3 transition-all duration-300 font-semibold ${activeTab === "history" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" : "bg-transparent text-gray-600 hover:bg-gray-50"}`}
              >
                History
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative">
                <img
                  src="/images/business-meeting-discussion-planning.png"
                  alt={tabContent[activeTab].title}
                  className="w-full rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {tabContent[activeTab].title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{tabContent[activeTab].description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {tabContent[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 group/item">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <span className="text-[#1a237e] text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium group-hover/item:text-[#1a237e] transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

         {/* Portfolio Section */}
         <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-50 to-white fade-in-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-[#1a237e] border-blue-200 mb-6 text-xs font-semibold px-4 py-2">FEATURED PROJECTS</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Showcase Of Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Recognized Work</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
              Explore our portfolio of successful projects and digital transformations
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-3 text-sm bg-white rounded-2xl p-2 shadow-lg">
              <Button
                onClick={() => setActiveFilter("all")}
                className={`rounded-xl px-6 py-2 transition-all duration-300 ${
                  activeFilter === "all" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" : "bg-transparent text-gray-600 hover:bg-gray-100"
                }`}
              >
                All
              </Button>
              <Button
                onClick={() => setActiveFilter("business")}
                className={`rounded-xl px-6 py-2 transition-all duration-300 ${
                  activeFilter === "business" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" : "bg-transparent text-gray-600 hover:bg-gray-100"
                }`}
              >
                Business
              </Button>
              <Button
                onClick={() => setActiveFilter("design")}
                className={`rounded-xl px-6 py-2 transition-all duration-300 ${
                  activeFilter === "design" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" : "bg-transparent text-gray-600 hover:bg-gray-100"
                }`}
              >
                Design
              </Button>
              <Button
                onClick={() => setActiveFilter("development")}
                className={`rounded-xl px-6 py-2 transition-all duration-300 ${
                  activeFilter === "development" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" : "bg-transparent text-gray-600 hover:bg-gray-100"
                }`}
              >
                Development
              </Button>
              <Button
                onClick={() => setActiveFilter("idea")}
                className={`rounded-xl px-6 py-2 transition-all duration-300 ${
                  activeFilter === "idea" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" : "bg-transparent text-gray-600 hover:bg-gray-100"
                }`}
              >
                Idea
              </Button>
              <Button
                onClick={() => setActiveFilter("technology")}
                className={`rounded-xl px-6 py-2 transition-all duration-300 ${
                  activeFilter === "technology" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" : "bg-transparent text-gray-600 hover:bg-gray-100"
                }`}
              >
                Technology
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-none bg-white hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e]/95 via-[#1a237e]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-1">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </Badge>
                      <div className="mt-4 flex items-center justify-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                          <ArrowRight className="w-5 h-5 text-white" />
                        </div>
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
      <section id="contact" className="py-20 bg-gradient-to-br from-[#1a237e] via-blue-900 to-indigo-900 text-white fade-in-section relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Amazing Services</span>
              </h2>
              <p className="text-lg text-blue-100 mb-10 leading-relaxed">
                Ready to transform your business with cutting-edge technology? Our expert team is standing by to discuss
                your project and provide instant solutions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">High Security</h3>
                    <p className="text-base text-blue-100 leading-relaxed">
                      Enterprise-grade security protocols ensuring your data and systems remain protected at all times.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality Control</h3>
                    <p className="text-base text-blue-100 leading-relaxed">
                      Rigorous testing and quality assurance processes to deliver exceptional results every time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                    <p className="text-base text-blue-100 leading-relaxed">
                      Round-the-clock technical support to ensure your business never misses a beat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 text-gray-900 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-blue-600 font-bold uppercase tracking-wider">GET IN TOUCH</div>
                  <h3 className="text-2xl font-bold">Contact Us</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6">Have questions? We're here to help!</p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Your Name" className="rounded-xl border-gray-200 bg-gray-50 hover:border-blue-300 focus:border-blue-500 transition-colors h-12" />
                  <Input placeholder="Email Address" type="email" className="rounded-xl border-gray-200 bg-gray-50 hover:border-blue-300 focus:border-blue-500 transition-colors h-12" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Phone" className="rounded-xl border-gray-200 bg-gray-50 hover:border-blue-300 focus:border-blue-500 transition-colors h-12" />
                  <Select>
                    <SelectTrigger className="rounded-xl border-gray-200 bg-gray-50 hover:border-blue-300 focus:border-blue-500 transition-colors h-12">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="software">Software Development</SelectItem>
                      <SelectItem value="mobile">Mobile Apps</SelectItem>
                      <SelectItem value="ai">AI Chatbots</SelectItem>
                      <SelectItem value="training">IT Training</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Textarea placeholder="Type Your Message" className="rounded-xl border-gray-200 bg-gray-50 hover:border-blue-300 focus:border-blue-500 transition-colors min-h-[100px]" />
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-12">
                  SUBMIT NOW
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
      <div className="fixed bottom-6 right-6">
        <ElectricBorder
          color="#071a6eff"
          speed={1.5}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: '9999px' }}
        >
          <Button
            size="icon"
            className="bg-[#13267a78] border-none  text-white rounded-full shadow-lg w-10 h-10"
            onClick={() => scrollToSection("home")}
          >
            <ArrowRight className="w-3 h-3 rotate-[-90deg]" />
          </Button>
        </ElectricBorder>
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  )
}
