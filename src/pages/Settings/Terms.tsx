import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Terms() {
    return (
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
    )
}
