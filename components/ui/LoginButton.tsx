
type Button = {
  title: string,
  styles: string
}

const LoginButton = ({title, styles}: Button) => {
  return (
    <button className={styles}>{title}</button>
  );
};

export default LoginButton;
