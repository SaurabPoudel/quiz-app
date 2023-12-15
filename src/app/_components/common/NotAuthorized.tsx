const NotAuthorized = () => {
  return (
    <section className="mx-auto flex w-full items-center justify-center text-red-500">
      <div className="flex w-2/3 flex-col items-center md:max-w-4xl">
        <div className="rounded-full bg-white px-10">
          <img src="/danger-icon.svg" width={200} height={200} />
        </div>
        <h1 className="text-3xl">Not Authorized</h1>
        <h1 className="text-3xl">Contact Admin</h1>
      </div>
    </section>
  );
};

export default NotAuthorized;
