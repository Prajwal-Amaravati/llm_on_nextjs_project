// models/Message.ts
import OpenAI from "openai";

export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export class MessageModel {
  static async getAllMessages(): Promise<Message[]> {
    // In a real application, this would fetch from a database
    return [];
  }

  static async createMessage(content: string, role: 'user' | 'assistant'): Promise<Message> {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      role,
      timestamp: new Date(),
    };
    // In a real application, this would save to a database
    return newMessage;
  }

  static async getAIResponse(userMessage: string): Promise<string> {
    try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: userMessage }],
        model: "o1-mini",
      });

      return completion.choices[0].message.content || "Sorry, I couldn't generate a response.";
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      // completion = "this is a dummy message"
      return "An error occurred while processing your request.";
    }
  }
}