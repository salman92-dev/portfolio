const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="peer text-black w-full text-xl syne py-4 bg-transparent border-b-2 border-black/40
                   focus:outline-none focus:border-black transition-all"
      />
      <span className="absolute left-0 -bottom-[1px] h-[1px] w-0 bg-black transition-all duration-300 peer-focus:w-full" />
    </div>
  );
};

export default Input;
