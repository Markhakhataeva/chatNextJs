'use client'

import React from 'react'

import { AppLayout } from '@/core/layout/AppLayout/AppLayout'
import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { QueryClientProvider } from '@tanstack/react-query'

import { theme } from '@/shared/constants'
import { queryClient } from '@/shared/reactQuery'

type ClientProviderTypes = {
    children?: React.ReactNode
}

export function ClientProvider({ children }: ClientProviderTypes) {
    return (
        <QueryClientProvider client={queryClient}>
            <MantineProvider defaultColorScheme='light' theme={theme}>
                <ModalsProvider>
                    <AppLayout>{children}</AppLayout>
                </ModalsProvider>
            </MantineProvider>
        </QueryClientProvider>
    )
}
