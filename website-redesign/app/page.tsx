"use client";
import Dock from "../Components/Dock";

const items = [
  { label: "Home", onClick: () => alert("Home!") },
  { label: "Archive", onClick: () => alert("Archive!") },
  { label: "Profile", onClick: () => alert("Profile!") },
  { label: "Settings", onClick: () => alert("Settings!") },
];

export default function soandso() {
  return (
  <div className="fixed top-0 left-0 h-screen w-1/10 flex flex-col items-center bg-green-600  shadow-2xl z-50">
      <Dock
    className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full items-center text-black"
        items={[
          {
            icon: "🏠",
            label: "Home",
            onClick: () => alert("Home!"),
            className:
              "flex flex-col items-center text-black hover:bg-gray-700 rounded-lg p-2 sm:p-3 w-4/5 transition justify-center",
            menuOptions: [
              { label: "Settings", onClick: () => alert("Settings for Home") },
              { label: "Open", onClick: () => alert("Open Home") },
            ],
          },
          {
            icon: "📄",
            label: "Docs",
            onClick: () => alert("Docs!"),
            className:
              "flex flex-col items-center text-black hover:bg-gray-700 rounded-lg p-2 sm:p-3 w-4/5 transition",
          },
          {
            icon: "💬",
            label: "Contact",
            onClick: () => alert("Contact!"),
            className:
              "flex flex-col items-center text-black hover:bg-gray-700 rounded-lg p-2 sm:p-3 w-4/5 transition",
          },
        ]}
      />
    </div>
  );
}
