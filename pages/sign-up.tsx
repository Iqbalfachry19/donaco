import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { signUpSchema, ISignUp } from '../common/validation/auth';
import { trpc } from '../common/client/trpc';
import { ErrorMessage } from '@hookform/error-message';

const SignUp: NextPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>({
    resolver: zodResolver(signUpSchema),
  });

  const { mutateAsync } = trpc.useMutation(['signup']);

  const onSubmit = useCallback(
    async (data: ISignUp) => {
      console.log('onSubmit');
      const result = await mutateAsync(data);
      if (result.status === 201) {
        router.push('/log-in');
      }
    },
    [mutateAsync, router],
  );

  return (
    <div>
      <Head>
        <title>Donaco - Register</title>
        <meta name="description" content="donaco is web for donating" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <form
          className="flex items-center justify-center h-screen w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Create an account!</h2>
              <input
                type="text"
                placeholder="Type your username..."
                className="input input-bordered w-full max-w-xs my-2"
                {...register('username')}
              />
              <ErrorMessage
                errors={errors}
                name="username"
                render={({ message }) => <p>{message}</p>}
              />
              <input
                type="email"
                placeholder="Type your email..."
                className="input input-bordered w-full max-w-xs"
                {...register('email')}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => <p>{message}</p>}
              />
              <input
                type="password"
                placeholder="Type your password..."
                className="input input-bordered w-full max-w-xs my-2"
                {...register('password')}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => <p>{message}</p>}
              />
              <input
                type="password"
                placeholder="Type your confirmation password..."
                className="input input-bordered w-full max-w-xs my-2"
                {...register('confirmPassword')}
              />
              <ErrorMessage
                errors={errors}
                name="confirmPassword"
                render={({ message }) => <p>{message}</p>}
              />

              <div className="card-actions items-center justify-between">
                <Link href="/log-in" className="link">
                  Go to login
                </Link>
                <button className="btn btn-secondary" type="submit">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignUp;
