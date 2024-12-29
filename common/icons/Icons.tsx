import React from "react";
import Svg, { Path } from "react-native-svg";

interface IconProps {
  size?: number | string;
  color?: string;
}

export const Sorting05Icon: React.FC<IconProps> = ({
  size = 24,
  color = "#000",
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M11 10L18 10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 14H16"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 18H14"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 6H21"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 18.8125C6.60678 19.255 5.56018 21 5 21M3 18.8125C3.39322 19.255 4.43982 21 5 21M5 21L5 15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 5.1875C3.39322 4.74501 4.43982 3 5 3M7 5.1875C6.60678 4.74501 5.56018 3 5 3M5 3L5 9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ShuffleIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#000",
}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      color={color}
      fill={"none"}
    >
      <Path
        d="M19.5576 4L20.4551 4.97574C20.8561 5.41165 21.0566 5.62961 20.9861 5.81481C20.9155 6 20.632 6 20.0649 6C18.7956 6 17.2771 5.79493 16.1111 6.4733C15.3903 6.89272 14.8883 7.62517 14.0392 9M3 18H4.58082C6.50873 18 7.47269 18 8.2862 17.5267C9.00708 17.1073 9.50904 16.3748 10.3582 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.5576 20L20.4551 19.0243C20.8561 18.5883 21.0566 18.3704 20.9861 18.1852C20.9155 18 20.632 18 20.0649 18C18.7956 18 17.2771 18.2051 16.1111 17.5267C15.2976 17.0534 14.7629 16.1815 13.6935 14.4376L10.7038 9.5624C9.63441 7.81853 9.0997 6.9466 8.2862 6.4733C7.47269 6 6.50873 6 4.58082 6H3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const PlusSignIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#000",
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    color={color}
    fill={"none"}
  >
    <Path
      d="M12 4V20M20 12H4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const PathfinderExcludeIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#000",
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    color={color}
    fill={"none"}
  >
    <Path
      d="M9.49915 10.7141C9.57432 10.5723 9.6607 10.4402 9.75998 10.3157C9.92357 10.1106 10.1097 9.92446 10.3148 9.76086C10.4393 9.66159 10.5714 9.5752 10.7132 9.50004M14.4992 13.286C14.424 13.4278 14.3376 13.5599 14.2383 13.6844C14.0747 13.8895 13.8886 14.0756 13.6835 14.2392C13.559 14.3385 13.4269 14.4249 13.2851 14.5M9.03008 13C9.01507 13.3054 9.00673 13.6373 9.0021 13.9994C8.99606 14.4721 8.99303 14.7084 9.14232 14.8577C9.29161 15.007 9.52793 15.004 10.0006 14.9979C10.3627 14.9933 10.6946 14.9849 11 14.9699M13 9.03008C13.3054 9.01507 13.6373 9.00673 13.9994 9.0021C14.4721 8.99606 14.7084 8.99303 14.8577 9.14231C15.007 9.29159 15.0039 9.52792 14.9979 10.0006C14.9933 10.3627 14.985 10.6946 14.9699 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 17.4947C9.04098 19.0437 9.19209 19.982 9.74923 20.6807C9.91282 20.8858 10.0989 21.0719 10.3041 21.2355C11.2627 22 12.6726 22 15.4924 22C18.3121 22 19.722 22 20.6807 21.2355C20.8858 21.0719 21.0719 20.8858 21.2355 20.6807C22 19.722 22 18.3121 22 15.4924C22 12.6726 22 11.2627 21.2355 10.3041C21.0719 10.0989 20.8858 9.91283 20.6807 9.74923C19.982 9.19209 19.0437 9.04098 17.4947 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <Path
      d="M15 6.50528C14.959 4.95626 14.8079 4.01796 14.2508 3.31933C14.0872 3.11419 13.9011 2.92808 13.6959 2.76449C12.7373 2 11.3274 2 8.50763 2C5.68785 2 4.27797 2 3.31933 2.76449C3.11419 2.92808 2.92808 3.11419 2.76449 3.31933C2 4.27797 2 5.68785 2 8.50763C2 11.3274 2 12.7373 2.76449 13.6959C2.92808 13.9011 3.11419 14.0872 3.31933 14.2508C4.01796 14.8079 4.95626 14.959 6.50528 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </Svg>
);

export const ArrowDown: React.FC<IconProps> = ({
  size = 24,
  color = "#000",
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    color={color}
    fill={"none"}
  >
    <Path
      d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ArrowUp: React.FC<IconProps> = ({ size = 24, color = "#000" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    color={color}
    fill={"none"}
  >
    <Path
      d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const Edit: React.FC<IconProps> = ({ size = 24, color = "#000" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    color={color}
    fill={"none"}
  >
    <Path
      d="M6.53792 2.32172C6.69664 1.89276 7.30336 1.89276 7.46208 2.32172L8.1735 4.2443C8.27331 4.51403 8.48597 4.72669 8.7557 4.8265L10.6783 5.53792C11.1072 5.69664 11.1072 6.30336 10.6783 6.46208L8.7557 7.1735C8.48597 7.27331 8.27331 7.48597 8.1735 7.7557L7.46208 9.67828C7.30336 10.1072 6.69665 10.1072 6.53792 9.67828L5.8265 7.7557C5.72669 7.48597 5.51403 7.27331 5.2443 7.1735L3.32172 6.46208C2.89276 6.30336 2.89276 5.69665 3.32172 5.53792L5.2443 4.8265C5.51403 4.72669 5.72669 4.51403 5.8265 4.2443L6.53792 2.32172Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <Path
      d="M14.4039 9.64136L15.8869 11.1244M6 22H7.49759C8.70997 22 9.31617 22 9.86124 21.7742C10.4063 21.5484 10.835 21.1198 11.6923 20.2625L19.8417 12.1131C20.3808 11.574 20.6503 11.3045 20.7944 11.0137C21.0685 10.4605 21.0685 9.81094 20.7944 9.25772C20.6503 8.96695 20.3808 8.69741 19.8417 8.15832C19.3026 7.61924 19.0331 7.3497 18.7423 7.20561C18.1891 6.93146 17.5395 6.93146 16.9863 7.20561C16.6955 7.3497 16.426 7.61924 15.8869 8.15832L7.73749 16.3077C6.8802 17.165 6.45156 17.5937 6.22578 18.1388C6 18.6838 6 19.29 6 20.5024V22Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const Delete: React.FC<IconProps> = ({ size = 24, color = "#000" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    color={color}
    fill={"none"}
  >
    <Path
      d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
