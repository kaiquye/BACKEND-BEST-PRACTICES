export default function ButtonGenereteMessage({
  children,
  generete,
  className,
  inLoading,
}) {
  return (
    <div>
      {inLoading === false ? (
        <button
          className={className}
          onClick={async () => {
            await generete();
          }}
        >
          {children}
        </button>
      ) : (
        <button
          className={className}
          onClick={async () => {
            await generete();
          }}
        >
          in loading...
        </button>
      )}
    </div>
  );
}
