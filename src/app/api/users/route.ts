import { users } from '@/app/api/users/users.data'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    return NextResponse.json(users)
}
