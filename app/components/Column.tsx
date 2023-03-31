export default function Column({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8">
      {children}
    </div>
  );
}
