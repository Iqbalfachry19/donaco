import { useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Image from 'next/image';
import { loginSchema, ILogin } from '../common/validation/auth';
const ErrorMessage = dynamic(() =>
  import('@hookform/error-message').then((res) => res.ErrorMessage),
);
const LoginWallet = dynamic(() => import('../components/LoginWallet'));
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = useCallback(
    async (data: ILogin) => {
      const signIn = await import('next-auth/react').then((res) => res.signIn);
      try {
        const result = await signIn('email-password', {
          ...data,
          redirect: false,
        });
        if (result?.ok) {
          router.push('/dashboard');
        } else {
          toast.error('Credentials do not match!');
        }
      } catch (err) {
        toast.error('Something went wrong!');
      }
    },
    [router],
  );
  return (
    <form
      className="flex items-center justify-center h-screen w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-100 ">
        <div className="card-body">
          <div className="w-[20rem] h-[20rem]  lg:hidden relative  rounded-md ">
            <Image src="/image/ilustration.png" fill alt="" />
          </div>
          <h1 className="text-4xl">Website Donasi Donaco</h1>
          <h2 className="text-white text-lg">
            Selamat datang di layanan donasi Donaco
          </h2>
          <div className="flex space-x-2">
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Type your email..."
                className="input text-black input-bordered w-full max-w-xs mt-2"
                {...register('email')}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => <p>{message}</p>}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Type your password..."
                className="input text-black input-bordered w-full max-w-xs my-2"
                {...register('password')}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => <p>{message}</p>}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <button
              className="border border-white p-2 text-white rounded-lg"
              type="submit"
            >
              Login
            </button>
            <LoginWallet />
            <Toaster />
          </div>
        </div>
      </div>
      <div className="w-[30rem] h-[30rem] hidden lg:flex relative  rounded-md ">
        <Image src="/image/ilustration.png" fill alt="" />
      </div>
    </form>
  );
};

export default LoginForm;
