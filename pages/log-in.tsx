import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useCallback } from 'react';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSDK, useAddress, useMetamask } from '@thirdweb-dev/react';
import { loginSchema, ILogin } from '../common/validation/auth';
import { ErrorMessage } from '@hookform/error-message';
const LogIn: NextPage = () => {
  const sdk = useSDK();
  const address = useAddress();
  const connect = useMetamask();
  const loginWithWallet = async () => {
    // Set this to your domain to prevent signature malleability attacks.
    const domain = 'donaco.vercel.app';
    const payload = await sdk?.auth.login(domain);
    // And then we pass it into the next-auth signIn function
    await signIn('credentials', {
      payload: JSON.stringify(payload),
      callbackUrl: '/dashboard',
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = useCallback(async (data: ILogin) => {
    await signIn('email-password', { ...data, callbackUrl: '/dashboard' });
  }, []);

  return (
    <div>
      <Head>
        <title>Donaco - Login</title>
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
              <h2 className="card-title">Welcome back!</h2>
              <input
                type="email"
                placeholder="Type your email..."
                className="input input-bordered w-full max-w-xs mt-2"
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
              <div className="card-actions items-center justify-between">
                <Link href="/sign-up" className="link">
                  Go to sign up
                </Link>
                <button className="btn btn-secondary" type="submit">
                  Login
                </button>
                {address ? (
                  <button onClick={loginWithWallet}>Login with Wallet</button>
                ) : (
                  <button onClick={connect}>Connect Wallet</button>
                )}
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default LogIn;
