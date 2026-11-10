import { SearchX } from 'lucide-react';

export default function EmptyState({ title = 'Nothing to show yet', children, icon: Icon = SearchX }) {
  return (
    <div className="flex flex-col items-center border border-dashed border-stone-300 px-6 py-16 text-center">
      <Icon aria-hidden="true" className="mb-5 size-8 text-bronze-500" strokeWidth={1.25} />
      <h3 className="text-2xl">{title}</h3>
      {children && <div className="mt-3 max-w-md text-ink-500">{children}</div>}
    </div>
  );
}
