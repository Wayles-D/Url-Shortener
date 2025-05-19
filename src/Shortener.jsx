import React, { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "shortenedLinks";

const isValidUrl = (url) => {
  try {
    const pattern = /^(https?:\/\/|www\.)[^\s/$.?#].[^\s]*$/i;
    return pattern.test(url);
  } catch {
    return false;
  }
};

const Shortener = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [links, setLinks] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) setLinks(parsed);
      }
    } catch (err) {
      console.error("Error reading localStorage:", err);
    }
  }, []);

  useEffect(() => {
    try {
      if (links.length > 0) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(links));
      } else {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      }
    } catch (err) {
      console.error("Error writing to localStorage:", err);
    }
  }, [links]);

  const handleShorten = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();

    if (!trimmed) {
      setError("Please add a link");
      return;
    }

    if (!isValidUrl(trimmed)) {
      setError("Please enter a valid URL");
      return;
    }

    try {
      setError("");
      const response = await fetch(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(trimmed)}`
      );

      if (!response.ok) throw new Error("API Error");

      const shortUrl = await response.text();

      const newLink = {
        original: trimmed,
        short: shortUrl,
        copied: false,
      };

      setLinks([newLink, ...links]);
      setInput("");
    } catch (err) {
      console.error("Shorten Error:", err);
      setError("Failed to shorten link. Try again later.");
    }
  };

  const handleCopy = (idx) => {
    if (links[idx]?.short) {
      navigator.clipboard.writeText(links[idx].short);
      setLinks(
        links.map((link, i) =>
          i === idx ? { ...link, copied: true } : { ...link, copied: false }
        )
      );
    }
  };

  const handleClear = () => {
    setLinks([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <div className="max-width mx-auto px-4 sm:px-6 lg:px-8">
      {/* ✅ Shorten Box */}
      <div className="bg-[url('../images/bg-shorten-desktop.svg')] bg-[#3A3053] bg-no-repeat bg-cover bg-center rounded-xl shadow-md p-6 sm:p-8 md:p-10 -mt-2 lg:-mt-10 z-10 relative">
        <form
          onSubmit={handleShorten}
          className="flex flex-col md:flex-row items-stretch md:items-center gap-4"
        >
          <input
            type="text"
            placeholder="Shorten a link here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={`w-full md:flex-1 rounded-lg px-4 py-3 outline-none text-base bg-white md:text-lg ${
              error
                ? "border-2 border-red-400 placeholder-red-400"
                : "border-none"
            }`}
            aria-invalid={!!error}
          />
          <button
            type="submit"
            className="w-full md:w-auto h-full bg-[#2BD1D1] text-white font-bold rounded-lg px-6 py-3 text-base md:text-lg hover:bg-[#9be3e2] transition"
          >
            Shorten It!
          </button>
        </form>
        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
      </div>

      {/* ✅ Link History */}
      {links.length > 0 && (
        <div className="mt-10 flex flex-col gap-6">
          <div className="flex justify-end">
            <button
              onClick={handleClear}
              className="bg-red-400 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-500 transition"
            >
              Clear History
            </button>
          </div>
          {links.map((link, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between shadow-md"
            >
              <div className="mb-2 md:mb-0 break-all text-gray-800 text-sm md:text-base">
                {link.original}
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <a
                  href={link.short}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2BD1D1] text-sm md:text-base break-all"
                >
                  {link.short}
                </a>
                <button
                  onClick={() => handleCopy(idx)}
                  className={`rounded-lg px-6 py-2 font-bold transition text-sm md:text-base ${
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
