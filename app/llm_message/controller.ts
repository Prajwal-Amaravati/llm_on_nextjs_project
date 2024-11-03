// controllers/messageController.ts
import { MessageModel, Message } from './core';

export async function getAllMessages(): Promise<Message[]> {
  return await MessageModel.getAllMessages();
}

export async function createMessage(content: string, role: 'user' | 'assistant'): Promise<Message> {
  return await MessageModel.createMessage(content, role);
}

export async function getAIResponse(userMessage: string): Promise<string> {
  return await MessageModel.getAIResponse(userMessage);
}