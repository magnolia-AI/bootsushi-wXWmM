'use client'
import ChatInterface from '@/components/chat-interface'
import { MessageCircle, Sparkles, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-full">
      <section className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-[800px] mx-auto text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold tracking-tight lg:text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Chat Assistant
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto">
            Experience the power of AI conversation. Ask questions, get help, or just have a friendly chat with our intelligent assistant.
          </p>
          
          <div className="flex justify-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span>Powered by OpenAI</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4 text-green-500" />
              <span>Real-time responses</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-3xl blur-3xl"></div>
          <div className="relative">
            <ChatInterface />
          </div>
        </div>
      </section>
    </div>
  )
}
