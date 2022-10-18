import { ErrorMessage } from '@hookform/error-message';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCallback } from 'react';
import { useRouter } from 'next/router';

import { trpc } from '../common/client/trpc';

import { signUpSchema, ISignUp } from '../common/validation/auth';
const SignupForm = () => {
  const router = useRouter();

  const { mutateAsync } = trpc.useMutation(['signup']);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>({
    resolver: zodResolver(signUpSchema),
  });
  const onSubmit = useCallback(
    async (data: ISignUp) => {
      const result = await mutateAsync(data);
      if (result.status === 201) {
        router.push('/log-in');
      }
    },
    [mutateAsync, router],
  );

  return (
    <form
      className="flex items-center justify-center h-screen w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className=" w-100">
        <div className="card-body">
          <div className="w-[20rem] h-[20rem]  lg:hidden relative  rounded-md ">
            <Image src="/image/ilustration.png" layout="fill" alt="" />
          </div>
          <h1 className="text-4xl">Website Donasi Donaco</h1>
          <h2 className="text-white text-lg">
            Selamat datang di layanan donasi Donaco
          </h2>
          <div className="flex space-x-2 ">
            <div className="flex flex-col">
              <label>username</label>
              <input
                type="text"
                placeholder="Type your username..."
                className="input text-black input-bordered w-full max-w-xs my-2"
                {...register('username')}
              />
              <ErrorMessage
                errors={errors}
                name="username"
                render={({ message }) => <p>{message}</p>}
              />
              <label>email</label>
              <input
                type="email"
                placeholder="Type your email..."
                className="input text-black input-bordered w-full max-w-xs"
                {...register('email')}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => <p>{message}</p>}
              />
            </div>
            <div className="flex flex-col ">
              <label>password</label>
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
              <label>confirm password</label>
              <input
                type="password"
                placeholder="Type your confirmation password..."
                className="input text-black input-bordered w-full max-w-xs "
                {...register('confirmPassword')}
              />
              <ErrorMessage
                errors={errors}
                name="confirmPassword"
                render={({ message }) => <p>{message}</p>}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <button
              className="border my-2 border-white p-2 text-white rounded-lg"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="w-[30rem] h-[30rem] hidden lg:flex relative  rounded-md ">
        <Image src="/image/ilustration.png" layout="fill" alt="" />
      </div>
    </form>
  );
};

export default SignupForm;
