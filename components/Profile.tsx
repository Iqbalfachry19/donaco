import Image from "next/legacy/image";

type Props = {
  name: string;
  job: string;
  image: string;
};

const Profile = ({ name, job, image }: Props) => {
  return (
    <div className="text-black flex flex-col  justify-center items-center p-2">
      <div className="w-24 h-24 relative rounded-full  overflow-hidden">
        <Image src={image} layout="fill" alt="" />
      </div>
      <h2 className="text-4xl font-bold">{name}</h2>
      <p className="text-2xl font-bold">{job}</p>
    </div>
  );
};

export default Profile;
