import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

type MessagesData = {
    id: number
    user_id: number
    timestamp: string
    text: string
    role: string
}
export function useGetMessagesQuery() {
    return useQuery({
        queryKey: ['messages'],
        queryFn: () =>
            axios.get<MessagesData[]>(`http://localhost:3000/api/messages`),
    })
}

export function useMessagesMutation() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: {
            id: number
            user_id: number
            timestamp: string
            text: string
            role: string
        }) =>
            axios.post<MessagesData>(
                'http://localhost:3000/api/messages',
                data
            ),
        onSuccess: async data => {
            console.log('Запрос отправлен:', data)
            await queryClient.invalidateQueries({ queryKey: ['messages'] })
        },
        onError: error => {
            console.error('Error', error)
        },
    })
}
