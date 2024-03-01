
type Button = {
  title: string;
  styles: string;
  handleClick?: () => void;
};

const LoginButton = ({ title, styles, handleClick }: Button) => {
  return (
    <button className={styles} onClick={handleClick}>
      {title}
    </button>
  );
};

export default LoginButton;
