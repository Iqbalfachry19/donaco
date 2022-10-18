import { useSDK, useAddress, useMetamask } from '@thirdweb-dev/react';

const LoginWallet = () => {
  const sdk = useSDK();

  const address = useAddress();
  const connect = useMetamask();
  const loginWithWallet = async () => {
    // Set this to your domain to prevent signature malleability attacks.
    const domain = 'donaco.vercel.app';
    const payload = await sdk?.auth.login(domain);
    // And then we pass it into the next-auth signIn function
    const signIn = await import('next-auth/react').then((res) => res.signIn);
    await signIn('credentials', {
      payload: JSON.stringify(payload),
      callbackUrl: '/dashboard',
    });
  };
  return (
    <>
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
    </>
  );
};

export default LoginWallet;
