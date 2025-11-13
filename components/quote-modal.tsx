"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Download } from "lucide-react"

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

interface QuoteData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  projectType: string
  timeline: string
  budget: string
  description: string
  features: string[]
}

const serviceOptions = [
  { value: "web", label: "Web Development", basePrice: 2500 },
  { value: "software", label: "Software Development", basePrice: 5000 },
  { value: "mobile", label: "Mobile App Development", basePrice: 4000 },
  { value: "ai", label: "AI Chatbot Solutions", basePrice: 3000 },
  { value: "training", label: "IT Training Programs", basePrice: 1500 },
]

const featureOptions = {
  web: ["Responsive Design", "CMS Integration", "E-commerce", "SEO Optimization", "Analytics"],
  software: ["Custom Dashboard", "Database Integration", "API Development", "Cloud Deployment", "Security Features"],
  mobile: ["iOS App", "Android App", "Push Notifications", "Offline Support", "App Store Deployment"],
  ai: [
    "Natural Language Processing",
    "Multi-language Support",
    "Integration APIs",
    "Analytics Dashboard",
    "24/7 Support",
  ],
  training: ["Online Courses", "Certification", "Hands-on Labs", "Mentorship", "Job Placement Support"],
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    projectType: "",
    timeline: "",
    budget: "",
    description: "",
    features: [],
  })

  const [isGenerating, setIsGenerating] = useState(false)

  const handleInputChange = (field: keyof QuoteData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFeatureChange = (feature: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      features: checked ? [...prev.features, feature] : prev.features.filter((f) => f !== feature),
    }))
  }

  const calculatePrice = () => {
    const selectedService = serviceOptions.find((s) => s.value === formData.service)
    if (!selectedService) return 0

    const basePrice = selectedService.basePrice
    const featurePrice = formData.features.length * 500

    // Timeline multiplier
    const timelineMultiplier =
      {
        urgent: 1.5,
        "1-month": 1.2,
        "2-3-months": 1.0,
        "3-6-months": 0.9,
        "6-months+": 0.8,
      }[formData.timeline] || 1.0

    return Math.round((basePrice + featurePrice) * timelineMultiplier)
  }

  const generatePDF = async () => {
    setIsGenerating(true)

    try {
      // Dynamic import to avoid SSR issues
      const jsPDF = (await import("jspdf")).default

      const doc = new jsPDF()
      const price = calculatePrice()
      const selectedService = serviceOptions.find((s) => s.value === formData.service)

      // Header
      doc.setFontSize(20)
      doc.setTextColor(37, 99, 235) // Blue color
      doc.text("VERDSOFT", 20, 30)
      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0)
      doc.text("Professional IT Solutions", 20, 40)

      // Contact Info
      doc.setFontSize(10)
      doc.text("4th Floor Karigamombe, Harare CBD", 20, 50)
      doc.text("info@verdsoft.co.zw | +263 787 062 575", 20, 55)

      // Quote Title
      doc.setFontSize(16)
      doc.setTextColor(37, 99, 235)
      doc.text("PROJECT QUOTATION", 20, 75)

      // Client Info
      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0)
      doc.text("Client Information:", 20, 95)
      doc.setFontSize(10)
      doc.text(`Name: ${formData.name}`, 20, 105)
      doc.text(`Email: ${formData.email}`, 20, 110)
      doc.text(`Phone: ${formData.phone}`, 20, 115)
      if (formData.company) doc.text(`Company: ${formData.company}`, 20, 120)

      // Project Details
      doc.setFontSize(12)
      doc.text("Project Details:", 20, 135)
      doc.setFontSize(10)
      doc.text(`Service: ${selectedService?.label || formData.service}`, 20, 145)
      doc.text(`Timeline: ${formData.timeline}`, 20, 150)
      doc.text(`Budget Range: ${formData.budget}`, 20, 155)

      // Features
      if (formData.features.length > 0) {
        doc.setFontSize(12)
        doc.text("Selected Features:", 20, 170)
        doc.setFontSize(10)
        formData.features.forEach((feature, index) => {
          doc.text(`• ${feature}`, 25, 180 + index * 5)
        })
      }

      // Description
      if (formData.description) {
        doc.setFontSize(12)
        doc.text("Project Description:", 20, 200 + formData.features.length * 5)
        doc.setFontSize(10)
        const splitDescription = doc.splitTextToSize(formData.description, 170)
        doc.text(splitDescription, 20, 210 + formData.features.length * 5)
      }

      // Price
      doc.setFontSize(14)
      doc.setTextColor(37, 99, 235)
      doc.text(`Estimated Price: $${price.toLocaleString()}`, 20, 250)

      // Footer
      doc.setFontSize(8)
      doc.setTextColor(100, 100, 100)
      doc.text("This is an estimated quotation. Final pricing may vary based on detailed requirements.", 20, 280)
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 285)

      // Save the PDF
      doc.save(`Verdsoft_Quote_${formData.name.replace(/\s+/g, "_")}_${Date.now()}.pdf`)
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Error generating PDF. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  const isFormValid = formData.name && formData.email && formData.service && formData.timeline

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-blue-600">Get Your Project Quote</DialogTitle>
        </DialogHeader>

        <form className="bg-slate-200" onSubmit={(e) => e.preventDefault()}>
          {/* Personal Information */}
          <div className="grid grid-cols-2 gap-4 bg-white">
            <div className="bg-white">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="bg-slate-50">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-white">
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+263 xxx xxx xxx"
              />
            </div>
            <div>
              <Label htmlFor="company">Company (Optional)</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                placeholder="Your company name"
              />
            </div>
          </div>

          {/* Service Selection */}
          <div className="bg-white">
            <Label htmlFor="service">Service Required *</Label>
            <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {service.label} (Starting from ${service.basePrice.toLocaleString()})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Timeline and Budget */}
          <div className="grid grid-cols-2 gap-4 bg-white">
            <div>
              <Label htmlFor="timeline">Project Timeline *</Label>
              <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="urgent">Urgent (1-2 weeks) +50%</SelectItem>
                  <SelectItem value="1-month">1 Month +20%</SelectItem>
                  <SelectItem value="2-3-months">2-3 Months (Standard)</SelectItem>
                  <SelectItem value="3-6-months">3-6 Months -10%</SelectItem>
                  <SelectItem value="6-months+">6+ Months -20%</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="budget">Budget Range</Label>
              <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-5k">Under $5,000</SelectItem>
                  <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                  <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                  <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                  <SelectItem value="50k+">$50,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Features */}
          {formData.service && featureOptions[formData.service as keyof typeof featureOptions] && (
            <div className="bg-white">
              <Label>Additional Features (+$500 each)</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {featureOptions[formData.service as keyof typeof featureOptions].map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox
                      id={feature}
                      checked={formData.features.includes(feature)}
                      onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                    />
                    <Label htmlFor={feature} className="text-sm">
                      {feature}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Description */}
          <div className="bg-white">
            <Label htmlFor="description">Project Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Describe your project requirements, goals, and any specific features you need..."
              rows={4}
            />
          </div>

          {/* Price Preview */}
          {formData.service && formData.timeline && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold">Estimated Price:</span>
                <span className="text-xl font-bold text-blue-600">${calculatePrice().toLocaleString()}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">*Final pricing may vary based on detailed requirements</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 bg-white">
            <Button
              type="button"
              onClick={generatePDF}
              disabled={!isFormValid || isGenerating}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              {isGenerating ? (
                <>Generating...</>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Generate PDF Quote
                </>
              )}
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
