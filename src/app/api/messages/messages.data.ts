export type MessagesData = {
    id: number
    user_id: number
    timestamp: string
    text: string
    role: string
}

export const messages: MessagesData[] = [
    {
        id: 1,
        user_id: 1,
        timestamp: '2023-08-21, 10:35:00',
        text: 'Hello, how are you? Can you help me?',
        role: 'user',
    },
    {
        id: 2,
        user_id: 2,
        timestamp: '2023-08-21, 10:35:00',
        text: 'Sure, what do you need help with?',
        role: 'user',
    },
    {
        id: 3,
        user_id: 3,
        timestamp: '2023-08-21, 10:35:00',
        text: 'Hey, do you have the new book?',
        role: 'user',
    },
    {
        id: 4,
        user_id: 4,
        timestamp: '2023-08-21, 10:35:00',
        text: "Yes, I do. I'll bring it to you later.",
        role: 'user',
    },
    {
        id: 5,
        user_id: 5,
        timestamp: '2023-08-21, 10:35:00',
        text: 'Can you review my report?',
        role: 'user',
    },
    {
        id: 6,
        user_id: 6,
        timestamp: '2023-08-21, 10:35:00',
        text: "Sure, I'll look at it and give you feedback.",
        role: 'user',
    },
    {
        id: 7,
        user_id: 7,
        timestamp: '2023-08-21, 10:35:00',
        text: 'Are you joining the meeting at 3 PM?',
        role: 'user',
    },
    {
        id: 8,
        user_id: 8,
        timestamp: '2023-08-21, 10:35:00',
        text: "Yes, I'll be there.",
        role: 'user',
    },
]
