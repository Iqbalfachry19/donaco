'use client';
type Props = {
  unseenCount: number | undefined;
};

function NotificationBell({ unseenCount }: Props) {
  return (
    <div>
      {unseenCount === 0 ? (
        <button
          aria-label="Notification"
          className="items-center flex relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6  text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute bottom-2.5 left-2.5 object-right-top -mr-6"></span>
        </button>
      ) : (
        <button
          aria-label="Notification"
          className="items-center flex relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6  text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute bottom-2.5 left-2.5 object-right-top -mr-6">
            <div className="inline-flex items-center px-0.5  border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
              {unseenCount}
            </div>
          </span>
        </button>
      )}
    </div>
  );
}

export default NotificationBell;
