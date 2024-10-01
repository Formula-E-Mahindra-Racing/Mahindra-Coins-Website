import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Label } from "@radix-ui/react-label"
import { Bell } from "lucide-react"
import { useState } from "react"

export default function Notifications() {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true)

    return (
        <Card>
            <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose how you want to be notified.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <section className="flex items-center justify-between">
                    <Label htmlFor="notifications" className="flex items-center space-x-2">
                        <Bell className="h-4 w-4" />
                        <span>Enable Notifications</span>
                    </Label>
                    <Switch
                        id="notifications"
                        checked={notificationsEnabled}
                        onCheckedChange={setNotificationsEnabled}
                    />
                </section>
                <section className="space-y-2">
                    <Label>Notification Types</Label>
                    <RadioGroup defaultValue="all" className="space-y-2">
                        <section className="flex items-center space-x-2">
                            <RadioGroupItem value="all" id="all" />
                            <Label htmlFor="all">All Notifications</Label>
                        </section>
                        <section className="flex items-center space-x-2">
                            <RadioGroupItem value="important" id="important" />
                            <Label htmlFor="important">Important Only</Label>
                        </section>
                        <section className="flex items-center space-x-2">
                            <RadioGroupItem value="none" id="none" />
                            <Label htmlFor="none">None</Label>
                        </section>
                    </RadioGroup>
                </section>
            </CardContent>
            <CardFooter>
                <Button>Save Preferences</Button>
            </CardFooter>
        </Card>
    )
}
