import { messages, MessagesData } from '@/app/api/messages/messages.data'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    return NextResponse.json(messages)
}

export async function POST(req: NextRequest) {
    const body = await req.json()
    const newMessages: MessagesData = {
        id: messages.length + 1,
        user_id: body.user_id,
        timestamp: new Date().toISOString(),
        text: body.text,
        role: body.role,
    }
    return NextResponse.json(newMessages, { status: 201 })
}
