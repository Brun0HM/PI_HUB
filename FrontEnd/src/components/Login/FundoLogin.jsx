import fundoLogin from "../../assets/Formas decorativas.png";

function FundoLogin({ className = "" }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={fundoLogin}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

export default FundoLogin;
