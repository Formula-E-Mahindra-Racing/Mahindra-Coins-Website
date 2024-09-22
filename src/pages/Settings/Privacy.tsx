import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@radix-ui/react-label"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@radix-ui/react-select"

export default function Privacy() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Manage your privacy and security preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="visibility">Profile Visibility</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select visibility" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="public">Public</SelectItem>
                            <SelectItem value="friends">Friends Only</SelectItem>
                            <SelectItem value="private">Private</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-center space-x-2">
                    <Switch id="marketing" />
                    <Label htmlFor="marketing">Receive Marketing Emails</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Switch id="data-sharing" />
                    <Label htmlFor="data-sharing">Allow Data Sharing with Partners</Label>
                </div>
            </CardContent>
            <CardFooter>
                <Button>Update Privacy Settings</Button>
            </CardFooter>
        </Card>
    )
}
