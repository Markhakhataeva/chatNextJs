'use client'

import React, { useState } from 'react'

import { PageLayout } from '@/core/layout/PageLayout/PageLayout'
import { messagesQueries } from '@/entities/messages'
import { usersQueries } from '@/entities/users'
import {
    Button,
    Flex,
    Input,
    Loader,
    Paper,
    ScrollArea,
    Text,
} from '@mantine/core'
import { useParams } from 'next/navigation'

type UserMessageType = {
    id: number
    user_id: number
    timestamp: string
    text: string
    role: string
}

export function UserViews() {
    const { id: chatId } = useParams<{ id: string }>()
    const { data: users } = usersQueries.useGetUsersQuery()
    const { data: messages } = messagesQueries.useGetMessagesQuery()
    const { mutateAsync: sendMess } = messagesQueries.useMessagesMutation()
    const [localMessages, setLocalMessages] = useState<UserMessageType[]>([])
    const [text, setText] = useState<string>('')

    if (!users || !messages) return <Loader />
    const userChat = users.data.find(user => user.id === parseInt(chatId!))

    const messagesChat = messages.data
        .filter(message => message.user_id === parseInt(chatId!))
        .sort(
            (a, b) =>
                new Date(a.timestamp).getTime() -
                new Date(b.timestamp).getTime()
        )

    const handleSubmit = async () => {
        try {
            const res = await sendMess({
                id: +1,
                user_id: +chatId,
                timestamp: new Date().toISOString(),
                text: text,
                role: 'Admin',
            })
            if (res) {
                setLocalMessages(x => [...x, res.data])
            }
            setText('')
        } catch (error) {
            console.error('Ошибка при отправке сообщения:', error)
        }
    }

    console.log(localMessages)

    return (
        <>
            <PageLayout>
                <Flex justify='center'>
                    <Text c='old-blue' fw={500} fz={18}>
                        {userChat?.username}
                    </Text>
                </Flex>
            </PageLayout>
            <Flex mt='30px'>
                <ScrollArea w='100%' h='700px' bd='1px solid lightgray'>
                    {messagesChat.map((x, index) => (
                        <Paper
                            bg='blue'
                            w='20%'
                            p='20px'
                            c='white'
                            m='15px'
                            key={index}
                        >
                            <Text>
                                <Text fz='sm' fw='bold'>
                                    from:
                                    {x.id === parseInt(chatId!)
                                        ? userChat?.username
                                        : 'Markha'}
                                </Text>
                                <Text fz='md' mb='md' mt='sm'>
                                    {x.text}
                                </Text>
                                <Text fz={13}>{x.timestamp}</Text>
                            </Text>
                        </Paper>
                    ))}
                    {localMessages.map(loc => (
                        <Flex
                            key={loc.id}
                            justify={loc.role === 'Admin' ? 'end' : ''}
                            mx='20px'
                            mt='20px'
                        >
                            <Paper
                                bg='blue'
                                p='20px'
                                c='white'
                                w='20%'
                                miw={250}
                                display='block'
                            >
                                <Text fz='sm' fw='bold' key={loc.id}>
                                    from:
                                    {loc.id === parseInt(chatId!)
                                        ? userChat?.username
                                        : 'Markha Khataeva'}
                                </Text>
                                <Text fz='md' mb='md' mt='sm'>
                                    {loc.user_id === parseInt(chatId!)
                                        ? loc.text
                                        : loc.text}
                                </Text>
                                <Text fz={13}>{loc.timestamp}</Text>
                            </Paper>
                        </Flex>
                    ))}
                </ScrollArea>
            </Flex>
            <Flex justify='space-between' w='100%' m='auto' mt='25px'>
                <Input
                    size='md'
                    placeholder='Введите'
                    w='90%'
                    type='text'
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <Button size='md' variant='filled' onClick={handleSubmit}>
                    Отправить
                </Button>
            </Flex>
        </>
    )
}
