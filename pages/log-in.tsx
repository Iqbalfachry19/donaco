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
import Image from 'next/image';
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
    <div className="bg-[url('/image/background.jpg')]">
      <Head>
        <title>Donaco - Login</title>
        <meta name="description" content="donaco is web for donating" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex  text-white">
        <form
          className="flex items-center justify-center h-screen w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-100 ">
            <div className="card-body">
              <div className="w-[20rem] h-[20rem]  lg:hidden relative  rounded-md ">
                <Image src="/image/ilustration.png" layout="fill" alt="" />
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
                {address ? (
                  <button
                    className="border border-white p-2 text-white rounded-lg"
                    onClick={loginWithWallet}
                  >
                    Login with Wallet
                  </button>
                ) : (
                  <button
                    className="border border-white p-2 text-white rounded-lg"
                    onClick={connect}
                  >
                    Connect Wallet
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="w-[30rem] h-[30rem] hidden lg:flex relative  rounded-md ">
            <Image src="/image/ilustration.png" layout="fill" alt="" />
          </div>
        </form>
      </main>
    </div>
  );
};

export default LogIn;
