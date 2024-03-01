import Link from "next/link";


type Button = {
  title: string,
  styles: string
}

const LoginButton = ({title, styles}: Button) => {
  return (
    <Link href={"/demo"} className={styles}>{title}</Link>
  );
};

export default LoginButton;
