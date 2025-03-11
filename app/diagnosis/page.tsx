"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Brain, Loader2, MessageSquare, FileText, AlertTriangle } from "lucide-react"
import { DiagnosisResult } from "@/components/diagnosis-result"
import { SymptomChecker } from "@/components/symptom-checker"

export default function DiagnosisPage() {
  const [loading, setLoading] = useState(false)
  const [symptoms, setSymptoms] = useState("")
  const [diagnosisComplete, setDiagnosisComplete] = useState(false)

  const handleDiagnosis = () => {
    if (!symptoms.trim()) return

    setLoading(true)
    // Simulate AI processing time
    setTimeout(() => {
      setLoading(false)
      setDiagnosisComplete(true)
    }, 3000)
  }

  const resetDiagnosis = () => {
    setSymptoms("")
    setDiagnosisComplete(false)
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="AI-Assisted Diagnosis" text="Describe your symptoms for a preliminary AI diagnosis.">
        <Button variant="outline" className="ml-auto">
          <FileText className="mr-2 h-4 w-4" />
          View History
        </Button>
        <Button>
          <MessageSquare className="mr-2 h-4 w-4" />
          Consult Doctor
        </Button>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Symptom Analysis
            </CardTitle>
            <CardDescription>Describe your symptoms in detail for the most accurate analysis</CardDescription>
          </CardHeader>
          <CardContent>
            {!diagnosisComplete ? (
              <>
                <Textarea
                  placeholder="Describe your symptoms here... (e.g., I've been experiencing a headache for the past 3 days, along with a mild fever and fatigue.)"
                  className="min-h-[200px]"
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                />
                <div className="mt-2 text-sm text-muted-foreground">
                  <p>For best results:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>Include when symptoms started</li>
                    <li>Mention any relevant medical history</li>
                    <li>Describe the severity and frequency</li>
                    <li>Note any factors that worsen or improve symptoms</li>
                  </ul>
                </div>
              </>
            ) : (
              <DiagnosisResult />
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {!diagnosisComplete ? (
              <Button onClick={handleDiagnosis} disabled={loading || !symptoms.trim()} className="ml-auto">
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {loading ? "Analyzing..." : "Analyze Symptoms"}
              </Button>
            ) : (
              <>
                <Button variant="outline" onClick={resetDiagnosis}>
                  New Analysis
                </Button>
                <Button>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Consult Doctor
                </Button>
              </>
            )}
          </CardFooter>
        </Card>

        <div className="md:col-span-3 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Describe your symptoms in detail</li>
                <li>Our AI analyzes your symptoms using advanced medical models</li>
                <li>Receive a preliminary diagnosis with possible conditions</li>
                <li>Get recommendations for next steps</li>
                <li>Consult with a healthcare professional if needed</li>
              </ol>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md flex items-start gap-2 dark:bg-yellow-950 dark:border-yellow-800">
                <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0 dark:text-yellow-400" />
                <p className="text-xs text-yellow-700 dark:text-yellow-400">
                  This AI diagnosis is not a substitute for professional medical advice. Always consult with a
                  healthcare provider for proper diagnosis and treatment.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Common Symptoms</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="general">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="pain">Pain</TabsTrigger>
                  <TabsTrigger value="respiratory">Respiratory</TabsTrigger>
                </TabsList>
                <TabsContent value="general" className="mt-2">
                  <SymptomChecker
                    symptoms={["Fever", "Fatigue", "Nausea", "Dizziness", "Weight loss", "Appetite changes"]}
                  />
                </TabsContent>
                <TabsContent value="pain" className="mt-2">
                  <SymptomChecker
                    symptoms={["Headache", "Chest pain", "Abdominal pain", "Joint pain", "Back pain", "Muscle aches"]}
                  />
                </TabsContent>
                <TabsContent value="respiratory" className="mt-2">
                  <SymptomChecker
                    symptoms={["Cough", "Shortness of breath", "Sore throat", "Runny nose", "Congestion", "Wheezing"]}
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  )
}

