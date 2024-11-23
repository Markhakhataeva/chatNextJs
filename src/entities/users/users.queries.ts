import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

type usersDataQuery = {
    username: string
    id: number
    role: string
}

export function useGetUsersQuery() {
    return useQuery({
        queryKey: ['user'],
        queryFn: () =>
            axios.get<usersDataQuery[]>(`http://localhost:3000/api/users`),
    })
}
