import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Brain, Calendar, FileText, MessageSquare, Pill, Shield } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="hidden font-bold sm:inline-block">HealthAI</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/dashboard" className="transition-colors hover:text-foreground/80">
                Dashboard
              </Link>
              <Link href="/diagnosis" className="transition-colors hover:text-foreground/80">
                Diagnosis
              </Link>
              <Link href="/records" className="transition-colors hover:text-foreground/80">
                Records
              </Link>
              <Link href="/consultations" className="transition-colors hover:text-foreground/80">
                Consultations
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  AI-Powered Healthcare Platform for the Future
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Personalized health monitoring, AI-assisted diagnosis, and seamless doctor consultations - all in one
                  secure platform.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/register">Get Started</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mr-0 lg:ml-auto">
                <div className="aspect-video overflow-hidden rounded-xl">
                  <img
                    alt="Healthcare Dashboard Preview"
                    className="object-cover w-full"
                    src="/placeholder.svg?height=500&width=800"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform combines cutting-edge AI technology with healthcare expertise to provide you with the
                  best care possible.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader>
                  <Activity className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Health Dashboard</CardTitle>
                  <CardDescription>Real-time monitoring of vital health metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  Track heart rate, blood pressure, glucose levels, and more with intuitive visualizations and trend
                  analysis.
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/dashboard">Learn more</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Brain className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>AI-Assisted Diagnosis</CardTitle>
                  <CardDescription>Advanced symptom analysis and preliminary diagnosis</CardDescription>
                </CardHeader>
                <CardContent>
                  Our AI system analyzes your symptoms and provides preliminary diagnosis with high accuracy, helping
                  you make informed decisions.
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/diagnosis">Learn more</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <MessageSquare className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Doctor Consultations</CardTitle>
                  <CardDescription>Secure chat and video consultations</CardDescription>
                </CardHeader>
                <CardContent>
                  Connect with healthcare professionals through secure chat and video calls, with AI-enhanced medical
                  assistance.
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/consultations">Learn more</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Health Records</CardTitle>
                  <CardDescription>Secure storage and retrieval of medical records</CardDescription>
                </CardHeader>
                <CardContent>
                  Store and access your medical records securely, with easy sharing options for healthcare providers.
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/records">Learn more</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Pill className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Medication Reminders</CardTitle>
                  <CardDescription>Never miss a dose with smart reminders</CardDescription>
                </CardHeader>
                <CardContent>
                  Automated scheduling and reminders for medications and doctor appointments, with smart notifications.
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/reminders">Learn more</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Calendar className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Emergency Alerts</CardTitle>
                  <CardDescription>Smart detection of critical conditions</CardDescription>
                </CardHeader>
                <CardContent>
                  Our system detects critical health conditions and automatically alerts emergency contacts and
                  services.
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/emergency">Learn more</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 HealthAI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

