function ButtonPrimary(props) {
  return (
    <button className="rounded px-3 py-2 text-text-primary bg-primary hover:bg-primary-hover active:bg-primary-dark font-medium transition-colors duration-300 ease-in-out">
      {props.text}
    </button>
  );
}

export default ButtonPrimary;
