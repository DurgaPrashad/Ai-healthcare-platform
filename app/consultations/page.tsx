"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Calendar, MessageSquare, Video, Clock, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { DoctorCard } from "@/components/doctor-card"
import { ChatInterface } from "@/components/chat-interface"
import { AppointmentScheduler } from "@/components/appointment-scheduler"

export default function ConsultationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("doctors")
  const [selectedDoctor, setSelectedDoctor] = useState(null)

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor)
    setActiveTab("chat")
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Doctor Consultations"
        text="Connect with healthcare professionals through secure chat and video calls."
      >
        <Button variant="outline" className="ml-auto">
          <Clock className="mr-2 h-4 w-4" />
          Past Consultations
        </Button>
        <Button>
          <Calendar className="mr-2 h-4 w-4" />
          Schedule Appointment
        </Button>
      </DashboardHeader>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="doctors">Find Doctors</TabsTrigger>
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="video">Video Call</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
        </TabsList>

        <TabsContent value="doctors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Find a Healthcare Professional</CardTitle>
              <CardDescription>Search for doctors by specialty, name, or location</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex w-full max-w-sm items-center space-x-2 mb-6">
                <Input
                  type="text"
                  placeholder="Search doctors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit">
                  <Search className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <DoctorCard
                  name="Dr. Sarah Johnson"
                  specialty="Cardiologist"
                  rating={4.9}
                  availability="Available Today"
                  imageUrl="/placeholder.svg?height=150&width=150"
                  onSelect={() =>
                    handleDoctorSelect({
                      name: "Dr. Sarah Johnson",
                      specialty: "Cardiologist",
                    })
                  }
                />

                <DoctorCard
                  name="Dr. Michael Chen"
                  specialty="Family Medicine"
                  rating={4.7}
                  availability="Available Tomorrow"
                  imageUrl="/placeholder.svg?height=150&width=150"
                  onSelect={() =>
                    handleDoctorSelect({
                      name: "Dr. Michael Chen",
                      specialty: "Family Medicine",
                    })
                  }
                />

                <DoctorCard
                  name="Dr. Emily Rodriguez"
                  specialty="Neurologist"
                  rating={4.8}
                  availability="Available Today"
                  imageUrl="/placeholder.svg?height=150&width=150"
                  onSelect={() =>
                    handleDoctorSelect({
                      name: "Dr. Emily Rodriguez",
                      specialty: "Neurologist",
                    })
                  }
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chat" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Chat Consultation</CardTitle>
              <CardDescription>
                {selectedDoctor
                  ? `Chat with ${selectedDoctor.name}, ${selectedDoctor.specialty}`
                  : "Select a doctor to start a chat consultation"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {selectedDoctor ? (
                <ChatInterface doctor={selectedDoctor} />
              ) : (
                <div className="flex flex-col items-center justify-center h-[400px] text-center">
                  <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No Active Chat</h3>
                  <p className="text-sm text-muted-foreground mt-2 max-w-md">
                    Please select a doctor from the "Find Doctors" tab to start a chat consultation.
                  </p>
                  <Button variant="outline" className="mt-4" onClick={() => setActiveTab("doctors")}>
                    Find a Doctor
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="video" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Video Consultation</CardTitle>
              <CardDescription>Connect with your doctor through a secure video call</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center h-[400px] text-center">
                <Video className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No Active Video Call</h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-md">
                  Schedule a video consultation with your doctor or join a scheduled call.
                </p>
                <div className="flex gap-3 mt-4">
                  <Button variant="outline">Join with Code</Button>
                  <Button>Schedule Call</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Schedule an Appointment</CardTitle>
              <CardDescription>Book an appointment with a healthcare professional</CardDescription>
            </CardHeader>
            <CardContent>
              <AppointmentScheduler />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

