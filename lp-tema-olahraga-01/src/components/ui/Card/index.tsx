const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border border-white/5 bg-neutral-900/50 hover:border-yellow-400/30 transition-colors duration-300">
      {children}
    </div>
  );
};

export default Card;
