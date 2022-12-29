interface SectionProps {
  id: string;
  children: React.ReactNode;
  title: string;
}

export function Section({ id, children, title }: SectionProps) {
  return (
    <div className="md:p-8 m-auto md:w-3/4 w-full p-4" id={id}>
      <h1 className="text-left text-slate-300 text-3xl mt-16 font-bold">
        {title}
      </h1>
      <hr className="border-slate-600 mt-2" />
      {children}
    </div>
  );
}