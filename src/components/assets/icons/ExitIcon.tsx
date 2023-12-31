const ExitIcon = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg
      width="20"
      height="12"
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.59 1.41L16.17 5H4V7H16.17L12.58 10.59L14 12L20 6L14 0L12.59 1.41ZM0 0V12H2V0H0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ExitIcon;
