
import React, { useState, useEffect, useRef } from 'react';
import useSpeechRecognition from '@/hooks/useSpeechRecognition';
import { detectEmotion, getResponseBasedOnEmotion } from '@/utils/emotionDetection';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MicIcon, MicOffIcon, VolumeIcon, Volume2Icon, Volume1Icon } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const VoiceChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [apiKey, setApiKey] = useState<string>('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const { transcript, isListening, startListening, stopListening, hasRecognitionSupport } = useSpeechRecognition();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Handle speech recognition transcript changes
  useEffect(() => {
    if (transcript && !isProcessing) {
      console.log("Transcript:", transcript);
    }
  }, [transcript, isProcessing]);
  
  // Function to handle user submitting a message
  const handleSendMessage = async () => {
    if (!transcript.trim()) return;
    
    stopListening();
    setIsProcessing(true);
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: transcript,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Detect emotion in user's message
    const emotionAnalysis = detectEmotion(transcript);
    console.log("Emotion analysis:", emotionAnalysis);
    
    // Get response based on detected emotion
    const aiResponse = getResponseBasedOnEmotion(emotionAnalysis.primaryEmotion);
    
    // Simulate AI processing time
    setTimeout(() => {
      // Add AI response
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      speakMessage(aiResponse);
      setIsProcessing(false);
    }, 1000);
  };
  
  // Function to speak message using browser's speech synthesis
  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Get available voices and set a more natural voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice => 
        voice.name.includes('Female') || 
        voice.name.includes('Samantha') || 
        voice.name.includes('Google UK English Female')
      );
      
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
      
      utterance.rate = 1;
      utterance.pitch = 1;
      
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      
      window.speechSynthesis.speak(utterance);
    }
  };
  
  // Function to stop speaking
  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };
  
  // Function to handle start listening
  const handleStartListening = () => {
    if (isSpeaking) {
      stopSpeaking();
    }
    startListening();
  };
  
  // Add welcome message when component mounts
  useEffect(() => {
    const welcomeMessage: Message = {
      id: 'welcome',
      text: "Hello, I'm your AI companion. How are you feeling today? You can speak to me by clicking the microphone button.",
      sender: 'ai',
      timestamp: new Date()
    };
    
    setMessages([welcomeMessage]);
    
    // Check if speech synthesis voices are available
    if ('speechSynthesis' in window) {
      // Some browsers need this to get the voices
      const voices = window.speechSynthesis.getVoices();
      if (voices.length === 0) {
        // If no voices available yet, wait for them to load
        window.speechSynthesis.onvoiceschanged = () => {
          console.log("Voices loaded:", window.speechSynthesis.getVoices().length);
        };
      }
    }
    
    return () => {
      stopSpeaking();
    };
  }, []);
  
  // Message component
  const MessageBubble = ({ message }: { message: Message }) => {
    return (
      <div className={`mb-4 ${message.sender === 'user' ? 'ml-auto' : 'mr-auto'} max-w-[80%]`}>
        <div className={message.sender === 'user' ? 'voice-bubble' : 'voice-bubble-ai'}>
          <p>{message.text}</p>
        </div>
        <div className="text-xs text-muted-foreground mt-1 px-2">
          {message.sender === 'ai' ? 'EmpathyVoice' : 'You'} • {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    );
  };
  
  // Voice wave animation
  const VoiceWaveAnimation = () => {
    return (
      <div className="voice-wave">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="voice-wave-bar animate-wave" 
            style={{ 
              height: `${Math.random() * 16 + 8}px`,
              animationDelay: `${i * 0.1}s` 
            }}
          ></div>
        ))}
      </div>
    );
  };
  
  // API key input handler
  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('elevenlabs-api-key', apiKey);
    setShowApiKeyInput(false);
    // In a real app, you would verify the API key here
  };
  
  // Handle setup for ElevenLabs
  const handleSetupVoice = () => {
    setShowApiKeyInput(true);
  };
  
  return (
    <section id="voice-chat" className="py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-bold mb-3">Talk to EmpathyVoice</h2>
            <p className="text-muted-foreground">
              Speak directly to our AI companion using your microphone. Your voice will be recognized, 
              and you'll receive a supportive response.
            </p>
          </div>
          
          <Card className="p-1 bg-background shadow-md border-border">
            <div className="p-4 rounded-lg bg-secondary/50">
              {!hasRecognitionSupport && (
                <div className="text-center p-4 mb-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                  <p>Your browser doesn't support speech recognition. Try using Chrome, Edge, or Safari.</p>
                </div>
              )}
              
              {showApiKeyInput && (
                <div className="mb-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                  <form onSubmit={handleApiKeySubmit} className="space-y-4">
                    <div>
                      <label htmlFor="apiKey" className="block text-sm font-medium mb-1">
                        Enter your ElevenLabs API Key for enhanced voice quality
                      </label>
                      <input
                        id="apiKey"
                        type="password"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="sk-..."
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Your API key is stored locally on your device and never sent to our servers.
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button type="submit">Save API Key</Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setShowApiKeyInput(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              )}
              
              <div className="h-[400px] md:h-[500px] overflow-y-auto p-4 rounded-lg bg-white dark:bg-gray-800 mb-4">
                <div className="flex flex-col">
                  {messages.map((message) => (
                    <MessageBubble key={message.id} message={message} />
                  ))}
                  {isProcessing && (
                    <div className="voice-bubble-ai max-w-[80%] mt-2 mb-4">
                      <VoiceWaveAnimation />
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {isSpeaking ? (
                    <Button
                      onClick={stopSpeaking}
                      variant="outline"
                      size="icon"
                      className="rounded-full h-10 w-10"
                    >
                      <Volume1Icon className="h-5 w-5" />
                    </Button>
                  ) : (
                    <Button
                      onClick={() => speakMessage(messages[messages.length - 1]?.text || '')}
                      variant="outline"
                      size="icon"
                      className="rounded-full h-10 w-10"
                      disabled={!messages.length || isProcessing}
                    >
                      <VolumeIcon className="h-5 w-5" />
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleSetupVoice}
                  >
                    <Volume2Icon className="h-4 w-4 mr-2" />
                    Setup Better Voice
                  </Button>
                </div>
                
                <div className="flex items-center space-x-2">
                  {isListening ? (
                    <Button
                      onClick={() => {
                        stopListening();
                        handleSendMessage();
                      }}
                      variant="default"
                      size="lg"
                      className="rounded-full px-6 py-6 bg-empathy-500 hover:bg-empathy-600 text-white"
                    >
                      <MicIcon className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  ) : (
                    <Button
                      onClick={handleStartListening}
                      variant={isProcessing ? "outline" : "default"}
                      size="lg"
                      className={`rounded-full px-6 py-6 ${
                        isProcessing 
                        ? "bg-secondary hover:bg-secondary" 
                        : "bg-gradient-to-r from-empathy-500 to-lavender-500 hover:from-empathy-600 hover:to-lavender-600 text-white"
                      }`}
                      disabled={isProcessing || !hasRecognitionSupport}
                    >
                      {isProcessing ? (
                        <>
                          <MicOffIcon className="h-5 w-5 mr-2" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <MicIcon className="h-5 w-5 mr-2" />
                          Start Speaking
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </div>
              
              {transcript && isListening && (
                <div className="mt-4 p-3 bg-calm-50 dark:bg-calm-900 rounded-lg border border-calm-200 dark:border-calm-800">
                  <p className="text-sm">
                    <strong>Listening:</strong> {transcript}
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VoiceChat;
