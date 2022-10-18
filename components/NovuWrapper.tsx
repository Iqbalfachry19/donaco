// import type { AddRequest } from '../pages/api/task/add';

import NotificationBell from './NotificationBell';
import {
  NovuProvider,
  PopoverNotificationCenter,
  IMessage,
} from '@novu/notification-center';
import { useRouter } from 'next/router';

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

  const router = useRouter();

  return (
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
  );
};

export default NovuWrapper;
