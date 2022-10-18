import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

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
  function onNotificationClick(notification: IMessage) {
    router.push({ pathname: notification.cta.data?.url });
  }

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
    <header
      className={`${
        router.pathname === '/log-in' || router.pathname === '/sign-up'
          ? 'bg-transparent fixed top-0 left-0 right-0'
          : 'bg-[#00aeef]'
      } flex items-center text-white justify-between`}
    >
      <Link href="/">
        <div className="flex items-center px-2 py-2 space-x-2 ">
          <div className="w-8 h-8 relative">
            <Image src="/image/logo.png" layout="fill" alt="" />
          </div>
          <h1 className="">Donaco</h1>
        </div>
      </Link>
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
