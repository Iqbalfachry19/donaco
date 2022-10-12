import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
  IMessage,
} from '@novu/notification-center';
import { useRouter } from 'next/router';
import type { AddRequest } from '../pages/api/task/add';
type Props = {};

const Header = (props: Props) => {
  const { data } = useSession();
  const router = useRouter();
  function onNotificationClick(notification: IMessage) {}
  async function createTask(req: AddRequest): Promise<void> {
    const res = await fetch('/api/task/add', {
      method: 'POST',
      body: JSON.stringify(req),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(res);
  }
  return (
    <header className="bg-[#00aeef] flex items-center text-white justify-between">
      <div className="flex items-center px-2 py-2 space-x-2">
        <div className="w-8 h-8 relative">
          <Image src="/image/logo.png" layout="fill" alt="" />
        </div>
        <h1 className="">Donaco</h1>
      </div>
      <nav className="lg:flex space-x-2 hidden">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/donasi">
          <a>Donasi</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
      <div className="flex space-x-2 px-2 items-center">
        <p
          onClick={() =>
            createTask({
              userId: '63395cf0ee1316a5c8b25873',
              x: 2,
              y: 4,
            })
          }
        >
          2 + 4
        </p>
        <NovuProvider
          subscriberId={'63395cf0ee1316a5c8b25873'}
          applicationIdentifier={'Kb-zKM23Fwbf'}
        >
          <PopoverNotificationCenter
            colorScheme="light"
            onNotificationClick={onNotificationClick}
          >
            {({ unseenCount }) => (
              <NotificationBell unseenCount={unseenCount} />
            )}
          </PopoverNotificationCenter>
        </NovuProvider>
        {data ? (
          <p
            onClick={() => signOut({ callbackUrl: '/' })}
            className="cursor-pointer"
          >
            Log Out
          </p>
        ) : (
          <>
            <Link href="/log-in">
              <p className="cursor-pointer">Log In</p>
            </Link>
            <Link href="/sign-up">
              <button className="bg-white py-2 px-2 rounded-xl text-black">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
