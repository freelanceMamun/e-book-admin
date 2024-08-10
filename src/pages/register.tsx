import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useRef } from 'react';
import { register } from '../http/api';
import { useTokenStore } from '../store';
import { LoaderCircle } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const setToken = useTokenStore((state) => state.setToken);
  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (response) => {
      setToken(response.data.token);
      navigate('/dashboard/home');
    },
  });

  const handleRegisterSubmit = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const name = nameRef.current?.value;

    if (!name || !email || !password) {
      return alert('Please enter email and password');
    }

    mutation.mutate({ name, email, password });
  };

  return (
    <div className="flex items-center justify-center h-screen px-10">
      <Card className="mx-auto ">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-1">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input ref={nameRef} id="name" placeholder="name" required />
              </div>
            </div>
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
              <Label htmlFor="password">Password</Label>
              <Input required ref={passwordRef} id="password" type="password" />
            </div>
            <Button
              disabled={mutation.isPending}
              onClick={handleRegisterSubmit}
              type="submit"
              className="w-full flex gap-2"
            >
              <span>Create an Accout</span>
              {mutation.isPending && <LoaderCircle className="animate-spin" />}
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Link to="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
