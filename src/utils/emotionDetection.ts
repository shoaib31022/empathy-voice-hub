
// A simple utility for basic emotion detection in text
// In a production app, this would use a more sophisticated NLP model

type Emotion = 'neutral' | 'happy' | 'sad' | 'angry' | 'anxious' | 'fearful';

interface EmotionAnalysis {
  primaryEmotion: Emotion;
  confidence: number;
  emotions: Record<Emotion, number>;
}

// Simple keyword-based detection
// This is a very basic implementation - in a real app, you would use a proper NLP model
const emotionKeywords: Record<Emotion, string[]> = {
  happy: ['happy', 'joy', 'pleased', 'delighted', 'excited', 'glad', 'content', 'satisfied', 'cheerful', 'grateful'],
  sad: ['sad', 'unhappy', 'depressed', 'down', 'blue', 'upset', 'miserable', 'heartbroken', 'disappointed', 'crying'],
  angry: ['angry', 'mad', 'furious', 'rage', 'outraged', 'annoyed', 'irritated', 'frustrated', 'hostile', 'resentful'],
  anxious: ['anxious', 'worried', 'nervous', 'stressed', 'overwhelmed', 'concerned', 'tense', 'uneasy', 'restless', 'apprehensive'],
  fearful: ['afraid', 'scared', 'fearful', 'terrified', 'panic', 'dread', 'horror', 'frightened', 'threatened', 'alarmed'],
  neutral: ['ok', 'okay', 'fine', 'alright', 'neutral', 'normal', 'so-so', 'average']
};

export const detectEmotion = (text: string): EmotionAnalysis => {
  const lowercaseText = text.toLowerCase();
  const words = lowercaseText.split(/\s+/);
  
  // Calculate scores for each emotion
  const scores: Record<Emotion, number> = {
    happy: 0,
    sad: 0,
    angry: 0,
    anxious: 0,
    fearful: 0,
    neutral: 0.2 // Base neutral score
  };
  
  // Count keyword occurrences
  words.forEach(word => {
    Object.entries(emotionKeywords).forEach(([emotion, keywords]) => {
      if (keywords.some(keyword => word.includes(keyword))) {
        scores[emotion as Emotion] += 1;
      }
    });
  });
  
  // Find the emotion with the highest score
  let primaryEmotion: Emotion = 'neutral';
  let maxScore = scores.neutral;
  
  Object.entries(scores).forEach(([emotion, score]) => {
    if (score > maxScore) {
      primaryEmotion = emotion as Emotion;
      maxScore = score;
    }
  });
  
  // Normalize scores to get confidence
  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
  const normalizedScores: Record<Emotion, number> = {} as Record<Emotion, number>;
  
  Object.entries(scores).forEach(([emotion, score]) => {
    normalizedScores[emotion as Emotion] = totalScore > 0 ? score / totalScore : score;
  });
  
  return {
    primaryEmotion,
    confidence: normalizedScores[primaryEmotion],
    emotions: normalizedScores
  };
};

export const getResponseBasedOnEmotion = (emotion: Emotion): string => {
  const responses: Record<Emotion, string[]> = {
    happy: [
      "It's wonderful to hear you're feeling happy! What's bringing you joy today?",
      "I'm glad you're in good spirits. Would you like to share more about what's making you happy?",
      "That positive energy comes through clearly! How can we maintain this good feeling?"
    ],
    sad: [
      "I'm sorry to hear you're feeling down. Would you like to talk about what's bothering you?",
      "It sounds like you're going through a difficult time. I'm here to listen if you want to share more.",
      "When we feel sad, sometimes it helps to talk about it. What's on your mind right now?"
    ],
    angry: [
      "I can sense some frustration in your voice. Would it help to talk about what's bothering you?",
      "It's okay to feel angry sometimes. Would you like to explain what triggered these feelings?",
      "I'm here to listen without judgment. What's causing this anger right now?"
    ],
    anxious: [
      "It sounds like you might be feeling anxious. Would it help to take a few deep breaths together?",
      "Anxiety can be overwhelming. Would you like to try a quick grounding exercise with me?",
      "I hear the concern in your voice. Let's take a moment to focus on what's happening right now."
    ],
    fearful: [
      "It's okay to feel scared sometimes. Would you like to talk about what's frightening you?",
      "Fear is a natural response. Let's talk through what's causing this feeling.",
      "I'm here with you. Would it help to focus on something that makes you feel safe right now?"
    ],
    neutral: [
      "How are you feeling today? I'm here to chat about whatever's on your mind.",
      "What would you like to talk about today?",
      "I'm here to listen. What's been on your mind recently?"
    ]
  };
  
  // Select a random response from the appropriate category
  const appropriateResponses = responses[emotion];
  const randomIndex = Math.floor(Math.random() * appropriateResponses.length);
  return appropriateResponses[randomIndex];
};
