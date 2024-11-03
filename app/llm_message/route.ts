// app/api/messages/route.ts
import { NextResponse } from 'next/server';
import * as messageController from './controller';

export async function GET() {
  const messages = await messageController.getAllMessages();
  return NextResponse.json(messages);
}

export async function POST(request: Request) {
  const { content } = await request.json();
  const userMessage = await messageController.createMessage(content, 'user');
  const aiResponse = await messageController.getAIResponse(content);
  const assistantMessage = await messageController.createMessage(aiResponse, 'assistant');
  return NextResponse.json({ userMessage, assistantMessage });
}