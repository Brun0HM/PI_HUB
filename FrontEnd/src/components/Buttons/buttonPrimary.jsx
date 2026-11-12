function ButtonPrimary(props) {
  return (
    <button className="rounded-[0.5rem]  px-3 py-1.5 text-text-primary bg-primary hover:bg-primary-hover active:bg-primary-dark font-medium text-medium transition-colors duration-300 ease-in-out">
      {props.text}
    </button>
  );
}

export default ButtonPrimary;
