import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Send, Calendar, Mail, Linkedin, Instagram } from "lucide-react";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { NewsletterForm } from "@/components/NewsletterForm";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Chat directly with Stephanie for quick questions",
      cta: "Start WhatsApp Chat",
      href: "https://wa.me/15092946731?text=Hello+Stephanie",
      color: "from-green-500/20 to-green-600/20",
    },
    {
      icon: Send,
      title: "Messenger",
      description: "Connect via Facebook Messenger",
      cta: "Open Messenger",
      href: "https://m.me/investwithdiomin",
      color: "from-blue-500/20 to-blue-600/20",
    },
    {
      icon: Calendar,
      title: "Book Consultation",
      description: "Schedule a 1:1 strategy session",
      cta: "View Calendar",
      isDialog: true,
      color: "from-primary/20 to-secondary/20",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send a detailed inquiry",
      cta: "Send Email",
      href: "mailto:book@investwithdiomin.today",
      color: "from-gray-500/20 to-gray-600/20",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/investwithdiomin",
      username: "@investwithdiomin",
    },
    {
      icon: Send,
      label: "Threads",
      href: "https://threads.net/investwithdiomin",
      username: "@investwithdiomin",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/stephaniediomin",
      username: "Stephanie Diomin",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Let's Build Your Legacy
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Choose your preferred way to connect and start your wealth strategy journey. Whether you want a quick message, a scheduled consultation, or a thoughtful email, we make it simple to begin a conversation that leads to clarity, structure, and confidence in every decision you make.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground">
              Multiple ways to connect for your convenience, including direct messaging, email, and a guided calendar booking experience so you can engage at your own pace with the format that feels most natural.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={index}
                  className="group transition-all hover:shadow-xl hover:border-primary/30"
                >
                  <CardHeader>
                    <div
                      className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${method.color}`}
                    >
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <CardDescription className="text-base">{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {method.isDialog ? (
                      <ConsultationDialog>
                        <Button className="w-full" size="lg">
                          {method.cta}
                        </Button>
                      </ConsultationDialog>
                    ) : (
                      <Button className="w-full" size="lg" asChild>
                        <a href={method.href} target="_blank" rel="noopener noreferrer">
                          {method.cta}
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <Card className="mx-auto max-w-3xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Get in Touch</CardTitle>
              <CardDescription>Contact information for InvestWithDiomin.today, including preferred email, domain verification, and typical response windows to help you plan next steps with confidence.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="text-center">
                  <div className="mb-2 font-semibold">Primary Contact</div>
                  <div className="text-sm text-muted-foreground">
                    Email: book@investwithdiomin.today — the fastest way to reach the team for detailed requests, proposals, or next steps following a consultation.
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Domain: InvestWithDiomin.today — official site for resources, scheduling, and secure updates.
                  </div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-semibold">Business Hours</div>
                  <div className="text-sm text-muted-foreground">
                    Monday - Friday: 9:00 AM - 5:00 PM EST (with limited availability for priority engagements).
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Response time: Within 24 hours, with expedited follow-up for time-sensitive planning questions.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Follow for Insights</h2>
            <p className="mb-12 text-muted-foreground">
              Stay updated with wealth strategy tips, portfolio frameworks, and market observations tailored for founders, professionals, and family offices seeking clarity and durable outcomes.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Card key={index} className="group transition-all hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-2 font-semibold">{social.label}</h3>
                      <p className="mb-4 text-sm text-muted-foreground">{social.username}</p>
                      <Button variant="outline" size="sm" asChild className="w-full">
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          Follow
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">Join Our Newsletter</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Weekly wealth insights delivered to your inbox, including tax-aware strategies, durable portfolio principles, and actionable checklists to help you make decisions with precision.
            </p>
            <div className="flex justify-center">
              <NewsletterForm redirectUrl="/thank-you" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}