export default function Footer() {
  return (
    <footer className="bg-[#433422] text-[#fdf6e3] py-10 px-6 text-center">
      <p className="italic">Where the tides meet the memories.</p>
      <div className="mt-4 border-t border-[#fdf6e3]/20 pt-4 text-sm">
        © {new Date().getFullYear()} Coastal Vintage Tourism. All Rights
        Reserved.
      </div>
    </footer>
  );
}
