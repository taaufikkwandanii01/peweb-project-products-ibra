const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 ${className}`}
  >
    {children}
  </div>
);

export default Card;
