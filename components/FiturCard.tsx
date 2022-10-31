import Link from 'next/link';
import React from 'react';

type Props = {
  name: string;
  description: string;
  isCrypto?: boolean;
};

const FiturCard = ({ name, description, isCrypto }: Props) => {
  return (
    <div className="bg-white p-4 text-center space-y-4 rounded-lg">
      <h1>{name}</h1>
      <p>{description}</p>
      <div>
        {isCrypto && (
          <Link
            target="_blank"
            href="https://metamask.io/"
            className="bg-[#00aeef] text-white p-2 rounded-lg"
          >
            Pelajari Metamask
          </Link>
        )}
      </div>
    </div>
  );
};

export default FiturCard;
