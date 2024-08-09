import { useRef } from 'react';
import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { LoaderCircle } from 'lucide-react';

import { useMutation } from '@tanstack/react-query';

import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../http/api';
export function LoginPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  // Mutations
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      // Invalidate and refetch

      navigate('/dashboard/home');
      console.log('Login ');
    },
  });

  const handelLoginSubmit = () => {
    const email = emailRef.current?.value as string;
    const password = passwordRef.current?.value as string;

    if (!email || !password) {
      return alert('Please required the fild!');
    }

    mutation.mutate({ email, password });
  };

  return (
    <div className="flex items-center justify-center h-screen px-11">
      <Card className="mx-auto ">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                ref={emailRef}
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to={''}
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input ref={passwordRef} id="password" type="password" required />
            </div>
            <Button
              disabled={mutation.isPending}
              onClick={handelLoginSubmit}
              type="submit"
              className="w-full flex gap-2"
            >
              <span>Login</span>
              {mutation.isPending && <LoaderCircle className="animate-spin" />}
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link to={'/register'} className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
