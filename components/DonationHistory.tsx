import React from 'react';

type Props = {};

const DonationHistory = ({ counter, amount }: any) => {
  return (
    <div className="w-2xl bg-primary rounded-lg p-2">
      <p>{`Donasi ke #${counter}`}</p>
      <p>{`Jumlah: ${amount}`}</p>
    </div>
  );
};

export default DonationHistory;
