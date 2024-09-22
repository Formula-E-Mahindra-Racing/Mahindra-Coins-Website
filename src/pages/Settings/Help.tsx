import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

export default function Help() {
    return (
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
    )
}
