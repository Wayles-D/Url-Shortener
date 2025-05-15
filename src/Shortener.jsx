import React, { useState } from "react";

const initialLinks = [];

const Shortener = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [links, setLinks] = useState(initialLinks);

  const handleShorten = async (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError("Please add a link");
      return;
    }

    try {
      setError("");
      const response = await fetch(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(input)}`
      );
      const shortUrl = await response.text();

      setLinks([
        {
          original: input,
          short: shortUrl,
          copied: false,
        },
        ...links,
      ]);
      setInput("");
    } catch (err) {
      console.error("Error shortening URL:", err);
      setError("Failed to shorten link. Try again later.");
    }
  };

  const handleCopy = (idx) => {
    navigator.clipboard.writeText(links[idx].short);
    setLinks(
      links.map((link, i) =>
        i === idx ? { ...link, copied: true } : { ...link, copied: false }
      )
    );
  };

  return (
    <div className="max-width mx-auto px-2">
      {/* Input Box with matching background and width */}
      <div className="max-width bg-[url('../images/bg-shorten-desktop.svg')] bg-[#3A3053] bg-no-repeat bg-cover bg-center rounded-lg shadow-md p-6 md:p-10 mb-6">
        <form
          onSubmit={handleShorten}
          className="flex flex-col md:flex-row items-stretch gap-4"
        >
          <input
            type="text"
            placeholder={error ? error : "Shorten a link here..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={`w-full md:flex-1 rounded-lg px-4 py-3 outline-none text-base bg-white md:text-lg ${
              error
                ? "border-2 border-red-400 placeholder-red-400"
                : "border-none"
            }`}
          />
          <button
            type="submit"
            className="w-full md:w-auto h-full bg-[#2BD1D1] text-white font-bold rounded-lg px-6 py-3 text-base md:text-lg hover:bg-[#9be3e2] transition"
          >
            Shorten It!
          </button>
        </form>
      </div>

      {/* History */}
      {links.length > 0 && (
        <div className="mt-6 flex flex-col gap-6">
          {links.map((link, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between shadow"
            >
              <div className="mb-2 md:mb-0 break-all text-gray-700">{link.original}</div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <a
                  href={link.short}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2BD1D1] break-all"
                >
                  {link.short}
                </a>
                <button
                  onClick={() => handleCopy(idx)}
                  className={`rounded-lg px-6 py-2 font-bold transition ${
                    link.copied
                      ? "bg-[#3b3054] text-white"
                      : "bg-[#2BD1D1] text-white hover:bg-[#9be3e2]"
                  }`}
                >
                  {link.copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shortener;
