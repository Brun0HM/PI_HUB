function InfoSection({ title = "select", desc = "select" }) {
  return (
    <div className="bg-gray-900 px-6 py-24 text-white sm:py-32">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}

export default InfoSection;
