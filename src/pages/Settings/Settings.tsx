import { ReactNode } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SubHeader } from '@/components/sub-header/SubHeader'
import { ContentWrapper } from '@/components/content-wrapper/ContentWrapper'
import List from '@/components/utils/List'
import { SETTINGS_TABS } from '@/constants/Settings'
import Account from './Account'
import Notifications from './Notifications'
import Privacy from './Privacy'
import { Values as TabsValues } from '@/types/SettingsTabs'
import Help from './Help'
import Terms from './Terms'

export default function Settings() {

    const settingsPages: { [key in TabsValues]: ReactNode } = {
        account: Account(),
        notifications: Notifications(),
        privacy: Privacy(),
        help: Help(),
        terms: Terms()
    }

    return (
        <ContentWrapper.Root>
            <SubHeader.Root>
                <SubHeader.Wrapper>
                    <SubHeader.Title>Settings</SubHeader.Title>
                </SubHeader.Wrapper>
            </SubHeader.Root>

            <Tabs defaultValue="account" className="mt-3 space-y-4">
                <TabsList className='h-auto flex-wrap'>
                    <List
                        items={SETTINGS_TABS}
                        render={({ text, value }, i) => <TabsTrigger key={i} value={value}>{text}</TabsTrigger>}
                    />
                </TabsList>
                <List
                    items={SETTINGS_TABS}
                    render={({ value }, i) => <TabsContent key={i} value={value}>{settingsPages[value]}</TabsContent>}
                />
            </Tabs>
        </ContentWrapper.Root>
    )
}
