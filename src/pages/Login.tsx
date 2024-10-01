import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image."

export function Login() {
    // const {isUserLogged} = useContext(LoginContext)
    // console.log('from login: ', isUserLogged)
  return (
    <section className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <section className="flex items-center justify-center py-12">
        <section className="mx-auto grid w-[350px] gap-6">
          <section className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </section>
          <section className="grid gap-4">
            <section className="grid gap-2">
              <Label htmlFor="login-email">Email</Label>
              <Input
                id="login-email"
                type="email"
                placeholder="mahindra@example.com"
                required
              />
            </section>
            <section className="grid gap-2">
              <section className="flex items-center">
                <Label htmlFor="login-password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </section>
              <Input id="login-password" type="password" required />
            </section>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </section>
          <section className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/sign-up" className="underline">
              Sign up
            </Link>
          </section>
        </section>
      </section>
      <section className="hidden bg-muted lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </section>
    </section>
  )
}
