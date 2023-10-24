import React, { FC } from "react";

interface Props {
  size?: string | number;
}

const Buildings: FC<Props> = ({ size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.2 30.9334C18.8222 30.9334 18.5 30.8056 18.2333 30.5501C17.9667 30.2945 17.8333 29.9778 17.8333 29.6001C17.8333 29.2223 17.9611 28.9056 18.2167 28.6501C18.4722 28.3945 18.7889 28.2667 19.1667 28.2667C21.7667 28.2667 23.9722 27.3612 25.7833 25.5501C27.5944 23.7389 28.5 21.5334 28.5 18.9334C28.5 18.5556 28.6278 18.2389 28.8833 17.9834C29.1389 17.7278 29.4556 17.6001 29.8333 17.6001C30.2111 17.6001 30.5278 17.7278 30.7833 17.9834C31.0389 18.2389 31.1667 18.5556 31.1667 18.9334C31.1667 20.5778 30.85 22.1278 30.2167 23.5834C29.5833 25.0389 28.7278 26.3112 27.65 27.4001C26.5722 28.4889 25.3056 29.3501 23.85 29.9834C22.3944 30.6167 20.8444 30.9334 19.2 30.9334ZM19.2 25.6001C18.8222 25.6001 18.5 25.4723 18.2333 25.2167C17.9667 24.9612 17.8333 24.6445 17.8333 24.2667C17.8333 23.8889 17.9611 23.5723 18.2167 23.3167C18.4722 23.0612 18.7889 22.9334 19.1667 22.9334C20.2778 22.9334 21.2222 22.5445 22 21.7667C22.7778 20.9889 23.1667 20.0445 23.1667 18.9334C23.1667 18.5556 23.2944 18.2389 23.55 17.9834C23.8056 17.7278 24.1222 17.6001 24.5 17.6001C24.8778 17.6001 25.1944 17.7278 25.45 17.9834C25.7056 18.2389 25.8333 18.5556 25.8333 18.9334C25.8111 20.7778 25.1611 22.3445 23.8833 23.6334C22.6056 24.9223 21.0444 25.5778 19.2 25.6001ZM7.9 30.1001C7.56667 30.1001 7.23333 30.0334 6.9 29.9001C6.56667 29.7667 6.26667 29.5778 6 29.3334L1.26667 24.6001C1.02222 24.3334 0.833333 24.0334 0.7 23.7001C0.566667 23.3667 0.5 23.0334 0.5 22.7001C0.5 22.3445 0.566667 22.0056 0.7 21.6834C0.833333 21.3612 1.02222 21.0778 1.26667 20.8334L5.5 16.6001C6.01111 16.0889 6.64444 15.8278 7.4 15.8167C8.15556 15.8056 8.78889 16.0556 9.3 16.5667L10.9667 18.2334L11.9 17.3001L10.2333 15.6334C9.72222 15.1223 9.46667 14.5001 9.46667 13.7667C9.46667 13.0334 9.72222 12.4112 10.2333 11.9001L12.1333 10.0001C12.6444 9.48895 13.2722 9.23339 14.0167 9.23339C14.7611 9.23339 15.3889 9.48895 15.9 10.0001L17.5667 11.6667L18.5 10.7334L16.8333 9.06672C16.3222 8.55561 16.0667 7.92783 16.0667 7.18339C16.0667 6.43895 16.3222 5.81117 16.8333 5.30006L21.0667 1.06672C21.3333 0.800057 21.6333 0.600057 21.9667 0.466724C22.3 0.33339 22.6333 0.266724 22.9667 0.266724C23.3 0.266724 23.6278 0.33339 23.95 0.466724C24.2722 0.600057 24.5667 0.800057 24.8333 1.06672L29.5667 5.80006C29.8333 6.0445 30.0278 6.32783 30.15 6.65006C30.2722 6.97228 30.3333 7.31117 30.3333 7.66672C30.3333 8.00006 30.2722 8.33339 30.15 8.66672C30.0278 9.00006 29.8333 9.30006 29.5667 9.56672L25.3333 13.8001C24.8222 14.3112 24.1944 14.5667 23.45 14.5667C22.7056 14.5667 22.0778 14.3112 21.5667 13.8001L19.9 12.1334L18.9667 13.0667L20.6333 14.7334C21.1444 15.2445 21.3944 15.8723 21.3833 16.6167C21.3722 17.3612 21.1111 17.9889 20.6 18.5001L18.7333 20.3667C18.2222 20.8778 17.5944 21.1334 16.85 21.1334C16.1056 21.1334 15.4778 20.8778 14.9667 20.3667L13.3 18.7001L12.3667 19.6334L14.0333 21.3001C14.5444 21.8112 14.7944 22.4445 14.7833 23.2001C14.7722 23.9556 14.5111 24.5889 14 25.1001L9.76667 29.3334C9.52222 29.5778 9.23889 29.7667 8.91667 29.9001C8.59444 30.0334 8.25556 30.1001 7.9 30.1001ZM7.9 27.4667L9.3 26.0667L4.56667 21.3334L3.16667 22.7334L7.9 27.4667ZM10.7333 24.6334L12.1333 23.2334L7.4 18.5001L6 19.9001L10.7333 24.6334ZM23.4667 11.9001L24.8667 10.5001L20.1333 5.76672L18.7333 7.16672L23.4667 11.9001ZM26.3 9.06672L27.7 7.66672L22.9667 2.93339L21.5667 4.33339L26.3 9.06672Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Buildings;