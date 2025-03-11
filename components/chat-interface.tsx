"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Paperclip, Send, Mic, Image, FileText } from "lucide-react"

interface ChatInterfaceProps {
  doctor: {
    name: string
    specialty: string
  }
}

export function ChatInterface({ doctor }: ChatInterfaceProps) {
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState([
    {
      sender: "doctor",
      content: `Hello! I'm ${doctor.name}. How can I help you today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ])

  const handleSendMessage = () => {
    if (!message.trim()) return

    // Add user message to chat
    const userMessage = {
      sender: "user",
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setChatHistory([...chatHistory, userMessage])
    setMessage("")

    // Simulate doctor response after a short delay
    setTimeout(() => {
      const doctorResponse = {
        sender: "doctor",
        content:
          "Thank you for sharing that information. Could you tell me more about when these symptoms started and if you've noticed any patterns?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }

      setChatHistory((prev) => [...prev, doctorResponse])
    }, 2000)
  }

  return (
    <div className="flex flex-col h-[500px]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatHistory.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`flex gap-2 max-w-[80%] ${msg.sender === "user" ? "flex-row-reverse" : ""}`}>
              <Avatar className="h-8 w-8">
                {msg.sender === "doctor" ? (
                  <>
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt={doctor.name} />
                    <AvatarFallback>
                      {doctor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </>
                ) : (
                  <>
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="You" />
                    <AvatarFallback>YO</AvatarFallback>
                  </>
                )}
              </Avatar>
              <div>
                <div
                  className={`rounded-lg p-3 ${
                    msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{msg.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t p-4">
        <div className="flex items-end gap-2">
          <div className="flex-1">
            <Textarea
              placeholder="Type your message..."
              className="min-h-[80px] resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage()
                }
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Button size="icon" variant="ghost" className="rounded-full h-8 w-8" type="button">
              <Paperclip className="h-4 w-4" />
              <span className="sr-only">Attach file</span>
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full h-8 w-8" type="button">
              <Image className="h-4 w-4" />
              <span className="sr-only">Send image</span>
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full h-8 w-8" type="button">
              <Mic className="h-4 w-4" />
              <span className="sr-only">Voice message</span>
            </Button>
          </div>
          <Button
            size="icon"
            className="rounded-full h-10 w-10 flex-shrink-0"
            onClick={handleSendMessage}
            disabled={!message.trim()}
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
              <FileText className="h-3 w-3 mr-1" />
              Share Medical Records
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">Your conversation is private and secure</p>
        </div>
      </div>
    </div>
  )
}

