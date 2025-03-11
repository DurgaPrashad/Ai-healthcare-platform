HealthAI - AI-Powered Healthcare Platform
HealthAI is a futuristic healthcare platform that leverages artificial intelligence to provide personalized health monitoring, diagnosis assistance, and patient engagement. The platform features a modular architecture that allows for easy integration of APIs and pre-trained LLM models.



![image](https://github.com/user-attachments/assets/7b682a32-2356-4998-b6b2-b0ab12d1b751)
## Project Overview



![image](https://github.com/user-attachments/assets/2b27705c-91f7-4a38-bf49-6cc5527dbc7d)
1. **Landing Page**: A modern, responsive landing page that introduces the platform and its key features.

2. **Health Dashboard**: A dynamic dashboard displaying vital health metrics with real-time monitoring capabilities, including:
   - Key health indicators (heart rate, blood pressure, glucose levels)
   - Interactive charts for tracking health trends
   - Medication reminders and appointment scheduling
   - AI-generated health insights

3. **AI-Assisted Diagnosis**: An intelligent symptom analysis system that:
   - Allows users to describe their symptoms in detail
   - Analyzes symptoms using the AI SDK with OpenAI integration 
   - Provides preliminary diagnoses with confidence levels
   - Recommends appropriate next steps

4. **Doctor Consultations**: A secure communication platform for connecting with healthcare professionals through:
   - Doctor search and filtering
   - Secure chat interface
   - Video consultation capabilities
   - Appointment scheduling

5. **API Integration**: Backend routes for AI-powered features using the Vercel AI SDK , including:
   - Symptom analysis
   - Health insights generation
   - Secure data handling

The platform features a modular architecture that makes it easy to integrate with external APIs and pre-trained LLM models. The UI is built with shadcn/ui components and features a responsive design that works across all device sizes.

The sidebar navigation system allows for easy access to all platform features, with a collapsible design that adapts to different screen sizes 

To get started with this project, follow the setup instructions in the README file, which includes details on environment variables, API integration, and upcoming features.

Core Functionalities
User Health Dashboard - A dynamic interface displaying real-time health metrics (heart rate, BP, glucose levels, etc.)
AI-Assisted Diagnosis - A medical AI system leveraging LLMs for symptom analysis and preliminary diagnosis
Personalized Health Insights - AI-driven recommendations based on health data, trends, and patient history
Doctor Consultation & Chatbot - Secure chat and video consultation with AI-enhanced medical assistance
Health Record Management - Secure storage and retrieval of patient records with API-based integrations
Medication & Appointment Reminders - Automated scheduling and reminders for medications and doctor visits
Emergency Alerts - Smart emergency response system detecting critical conditions and alerting emergency contacts

![image](https://github.com/user-attachments/assets/47930be1-0969-444e-9180-e87bf5a88dcf)
Tech Stack
Frontend: Next.js 14 with App Router, React, Tailwind CSS, shadcn/ui
AI Integration: Vercel AI SDK with OpenAI models
Authentication: NextAuth.js (implementation ready)
Styling: Tailwind CSS with shadcn/ui components
Charts: Recharts for data visualization

Setup Instructions
Prerequisites
Node.js 18.x or higher
npm or yarn
Vercel account (for deployment)

Installation
Clone the repository:
