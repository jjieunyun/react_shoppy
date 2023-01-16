import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      className="bg-brand text-white hover:brightness-110 py-2 px-4 rounded-lg"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
