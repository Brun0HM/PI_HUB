function ButtonOutline(props) {
  return (
    <button className="rounded-lg  px-3 py-1.5 text-text-primary bg-bg border border-primary hover:bg-primary-hover active:bg-primary-dark font-medium text-medium transition-colors duration-300 ease-in-out">
      {props.text}
    </button>
  );
}

export default ButtonOutline;
