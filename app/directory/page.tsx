export default function DirectoryPage() {
  return (
    <>
      {/* Hero section */}
      <section
        className="relative h-64 w-full overflow-hidden rounded-b-2xl"
        style={{
          backgroundImage: "url(/tiles/directory.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
            Local Directory
          </h1>
        </div>
      </section>

      {/* Page content */}
      <section style={{ padding: "20px" }}>
        <p>
          Browse trusted local businesses and services across Llantrisant.
        </p>
      </section>
    </>
  );
}
