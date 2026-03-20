export function Avatar({ initials }: { initials: string }) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-sm font-semibold text-black">
      {initials}
    </div>
  );
}
