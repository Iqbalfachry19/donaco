import React from 'react';
type Props = {
  bgcolor: string;
  progress: string;
  height: number;
};
const ProgressBar = ({ bgcolor, progress, height }: Props) => {
  const Parentdiv = {
    height: height,
    width: '100%',
    backgroundColor: 'whitesmoke',
    borderRadius: 40,

    borderWidth: 2,
  };

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
  };

  const progresstext = {
    padding: 10,
    color: 'black',
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}></div>
    </div>
  );
};

export default ProgressBar;
