import Link from "next/link";

type Button = {
  title: string;
  styles: string;
  handleClick?: () => void;
};

const LoginButton = ({ title, styles, handleClick }: Button) => {
  return (
    <Link href={"/demo"} className={styles} onClick={handleClick}>
      {title}
    </Link>
  );
};

export default LoginButton;
