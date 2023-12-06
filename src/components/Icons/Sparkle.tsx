import React, { FC } from "react";

interface Props {
  size?: number | string;
}

const Sparkle: FC<Props> = ({ size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8748 0.68967C15.0895 0.109258 15.9105 0.109258 16.1252 0.68967L19.7151 10.3911C19.7826 10.5735 19.9265 10.7174 20.1089 10.7849L29.8103 14.3748C30.3907 14.5895 30.3907 15.4105 29.8103 15.6252L20.1089 19.2151C19.9265 19.2826 19.7826 19.4265 19.7151 19.6089L16.1252 29.3103C15.9105 29.8907 15.0895 29.8907 14.8748 29.3103L11.2849 19.6089C11.2174 19.4265 11.0735 19.2826 10.8911 19.2151L1.18967 15.6252C0.609258 15.4105 0.609258 14.5895 1.18967 14.3748L10.8911 10.7849C11.0735 10.7174 11.2174 10.5735 11.2849 10.3911L14.8748 0.68967Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Sparkle;