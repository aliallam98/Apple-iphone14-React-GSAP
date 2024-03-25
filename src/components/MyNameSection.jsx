const MyNameSection = () => {
  return (
    <section className="h-[600px] bg-bgColor flex flex-col justify-center items-center">
      <h1
        className="text-8xl font-semibold bg-gradient-to-r
       from-purple-600 to-sky-600
       text-transparent bg-clip-text mb-2"
      >
        Ali Allam
      </h1>
      <p className="text-textColor font-semibold text-3xl">
        allam.ali98@gmail.com
      </p>
      <h3 className="text-zinc font-semibold text-7xl mt-10">Thank You</h3>
    </section>
  );
};

export default MyNameSection;
