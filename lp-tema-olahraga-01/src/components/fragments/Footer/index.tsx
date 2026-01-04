const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Garis Aksen Kecil */}
          <div className="w-8 h-[1px] bg-yellow-400 opacity-50 mb-4"></div>

          {/* Copyright Section */}
          <div className="text-center space-y-2">
            <p className="text-[11px] md:text-xs uppercase tracking-[0.4em] font-medium text-white/80">
              © {currentYear} All Rights Reserved.
            </p>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-black italic text-neutral-600">
              Developed for Professional Athletes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
