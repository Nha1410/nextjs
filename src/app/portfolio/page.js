import Image from "next/image";

// pages/pdf-viewer.js

export default function PDFViewer() {
  return (
    <section className="relative w-full bg-white bg-cover bg-center">
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
        <div className="h-[70vh] w-full max-w-4xl overflow-hidden rounded-lg border border-gray-300 shadow-lg">
          <iframe src="/web-brief.pdf" className="h-full w-full" frameBorder="0"></iframe>
        </div>
      </div>
    </section>
  );
}
