import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    console.log('Chat API called');
    const { messages } = await request.json();
    console.log('Received messages:', messages);
    
    if (!messages || !Array.isArray(messages)) {
      console.log('Invalid messages format');
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    // Check if OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY) {
      console.log('OpenAI API key not found - using demo mode');
      
      // Demo mode - simulate AI response
      const lastMessage = messages[messages.length - 1];
      const demoResponses = [
        "I'm a demo chatbot! To use the real OpenAI API, please add your OPENAI_API_KEY to the .env.local file.",
        "This is a demonstration response. The chatbot interface is working correctly!",
        `You said: "${lastMessage?.content}". I'm currently in demo mode - add your OpenAI API key to enable real AI responses.`,
        "Hello! I'm responding in demo mode. To connect to OpenAI, please configure your API key in the environment variables.",
      ];
      
      const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)];
      
      // Simulate some delay like a real API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return NextResponse.json({
        message: randomResponse,
        timestamp: new Date().toISOString(),
        demo: true
      });
    }

    console.log('Calling OpenAI API...');
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages,
      max_tokens: 1000,
      temperature: 0.7,
    });

    const response = {
      message: completion.choices[0]?.message?.content || 'No response generated',
      timestamp: new Date().toISOString()
    };
    
    console.log('OpenAI response received');
    return NextResponse.json(response);
  } catch (error) {
    console.error('OpenAI API error:', error);
    
    // More detailed error handling
    if (error instanceof Error) {
      return NextResponse.json(
        { 
          error: 'Failed to generate response', 
          details: error.message,
          type: error.constructor.name
        },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Unknown error occurred' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Chat API is running',
    status: 'ok'
  });
}



