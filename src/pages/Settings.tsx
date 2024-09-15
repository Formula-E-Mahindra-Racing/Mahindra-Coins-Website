import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bell } from "lucide-react"

export default function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <Tabs defaultValue="account" className="space-y-4">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="help">Help & Support</TabsTrigger>
          <TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account details and preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Your username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Preferred Language</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose how you want to be notified.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications" className="flex items-center space-x-2">
                  <Bell className="h-4 w-4" />
                  <span>Enable Notifications</span>
                </Label>
                <Switch
                  id="notifications"
                  checked={notificationsEnabled}
                  onCheckedChange={setNotificationsEnabled}
                />
              </div>
              <div className="space-y-2">
                <Label>Notification Types</Label>
                <RadioGroup defaultValue="all" className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="all" />
                    <Label htmlFor="all">All Notifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="important" id="important" />
                    <Label htmlFor="important">Important Only</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="none" />
                    <Label htmlFor="none">None</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="privacy">
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
        </TabsContent>
        <TabsContent value="help">
          <Card>
            <CardHeader>
              <CardTitle>Help & Support</CardTitle>
              <CardDescription>Get help or contact our support team.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="issue">Describe Your Issue</Label>
                <Textarea id="issue" placeholder="Type your question or issue here..." />
              </div>
              <div className="space-y-2">
                <Label>Frequently Asked Questions</Label>
                <div className="space-y-2">
                  <details className="cursor-pointer">
                    <summary className="font-medium">How do I earn Mahindra Coins?</summary>
                    <p className="mt-2 text-sm text-muted-foreground">You can earn Mahindra Coins by participating in events, making purchases, and engaging with our community.</p>
                  </details>
                  <details className="cursor-pointer">
                    <summary className="font-medium">How can I redeem my Mahindra Coins?</summary>
                    <p className="mt-2 text-sm text-muted-foreground">Mahindra Coins can be redeemed for exclusive merchandise, event tickets, and special experiences in our rewards store.</p>
                  </details>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Submit Support Request</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="terms">
          <Card>
            <CardHeader>
              <CardTitle>Terms & Conditions</CardTitle>
              <CardDescription>Please read our terms and conditions carefully.</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                <h3 className="text-lg font-semibold">1. Acceptance of Terms</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  By accessing or using the Mahindra Coins platform, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our service.
                </p>
                <h3 className="mt-4 text-lg font-semibold">2. Use of Service</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  You agree to use the Mahindra Coins platform only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the platform.
                </p>
                <h3 className="mt-4 text-lg font-semibold">3. Account Registration</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  To access certain features of the platform, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                </p>
                <h3 className="mt-4 text-lg font-semibold">4. Mahindra Coins</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Mahindra Coins are a virtual currency with no cash value. They cannot be purchased, traded, or exchanged for cash. Mahindra Coins may be earned through various activities on the platform and can be redeemed for rewards as specified by Mahindra.
                </p>
                <h3 className="mt-4 text-lg font-semibold">5. Intellectual Property</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the Mahindra Coins platform are protected under applicable copyrights, trademarks, and other proprietary rights.
                </p>
                <h3 className="mt-4 text-lg font-semibold">6. Limitation of Liability</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Mahindra shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the platform.
                </p>
                <h3 className="mt-4 text-lg font-semibold">7. Changes to Terms</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Mahindra reserves the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
                </p>
                <h3 className="mt-4 text-lg font-semibold">8. Contact Us</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  If you have any questions about these Terms, please contact us at support@mahindracoins.com.
                </p>
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <Button>I Accept</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
