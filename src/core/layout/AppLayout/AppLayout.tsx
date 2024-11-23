import React from 'react'

import { usersQueries } from '@/entities/users'
import {
    AppShell,
    Burger,
    Flex,
    Group,
    List,
    ListItem,
    Loader,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export function AppLayout({ children }: { children: React.ReactNode }) {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)
    const { id: chatId } = useParams<{ id: string }>()

    const { data: users } = usersQueries.useGetUsersQuery()

    if (!users) return <Loader />

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}
            padding='md'
        >
            <AppShell.Header>
                <Flex justify='space-between' align='center' h='100%'>
                    <Group h='100%' px='md'>
                        <Burger
                            opened={mobileOpened}
                            onClick={toggleMobile}
                            hiddenFrom='sm'
                            size='sm'
                        />
                        <Burger
                            opened={desktopOpened}
                            onClick={toggleDesktop}
                            visibleFrom='sm'
                            size='sm'
                        />
                        Lincode Web-Messenger
                    </Group>
                </Flex>
            </AppShell.Header>
            <AppShell.Navbar p='md'>
                <List>
                    {users.data.map(user => (
                        <Link href={`/user/${user.id}`} key={user.id}>
                            <ListItem
                                mb='xl'
                                className={
                                    user.id === parseInt(chatId)
                                        ? 'active'
                                        : 'sidebar'
                                }
                            >
                                {user.role === 'Admin' ? null : user.username}
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    )
}
