import React, { ReactNode } from 'react'

import { Flex, Paper } from '@mantine/core'

type PageLayoutProps = {
    children: React.ReactNode
    pageTitle?: string
}
export function PageLayout({ children }: PageLayoutProps): ReactNode {
    return (
        <Flex direction='column' gap='md'>
            <Paper withBorder p='md'>
                <Flex direction='column' gap='md'>
                    {children}
                </Flex>
            </Paper>
        </Flex>
    )
}
