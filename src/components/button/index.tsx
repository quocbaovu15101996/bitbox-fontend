import './index.less';

const Button = (props: any) => {
  const IconBtn = () => props.icon && props.icon;

  return (
    <button {...props}>
      {props.icon && (
        <div>
          <IconBtn />
        </div>
      )}
      <p>{props.children}</p>
    </button>
  );
};

export default Button;
