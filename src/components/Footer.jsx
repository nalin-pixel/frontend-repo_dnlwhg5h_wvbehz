export default function Footer() {
  return (
    <footer className="h-[calc(100vh-72px)] w-screen flex-shrink-0 snap-start flex items-center">
      <div className="px-8 md:px-16 lg:px-24 w-full">
        <div className="max-w-3xl">
          <p className="text-2xl md:text-3xl font-semibold text-[#03045E]">Dibuat dengan semangat Glogenix — majulah bersama.</p>
          <div className="mt-6 flex items-center gap-4 text-[#03045E]/80">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#A2D2FF] to-[#03045E]" />
            <div>
              <p className="font-medium">Nama Pembuat</p>
              <p className="text-sm">instagram.com/username · github.com/username</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
