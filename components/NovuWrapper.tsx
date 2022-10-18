// import type { AddRequest } from '../pages/api/task/add';

import Link from 'next/link';
import NotificationBell from './NotificationBell';
import {
  NovuProvider,
  PopoverNotificationCenter,
  IMessage,
} from '@novu/notification-center';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
const NovuWrapper = () => {
  // async function createTask(req: AddRequest): Promise<void> {
  //   const res = await fetch('/api/task/add', {
  //     method: 'POST',
  //     body: JSON.stringify(req),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }
  function onNotificationClick(notification: IMessage) {
    router.push({ pathname: notification.cta.data?.url });
  }
  const { data } = useSession();
  const router = useRouter();

  return (
    <div className="flex space-x-2 px-2 items-center">
      <NovuProvider
        subscriberId={'63395cf0ee1316a5c8b25873'}
        applicationIdentifier={'Kb-zKM23Fwbf'}
      >
        <PopoverNotificationCenter
          colorScheme="light"
          onNotificationClick={onNotificationClick}
        >
          {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
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
  );
};

export default NovuWrapper;
