export default function LoadingState({ label = 'Loading' }) {
  return (
    <div role="status" aria-live="polite" className="flex min-h-[70vh] items-center justify-center bg-ivory-50">
      <div className="flex flex-col items-center gap-5">
        <span className="font-serif text-4xl text-midnight-900">A<em className="text-bronze-500">&amp;</em>O</span>
        <span className="relative h-px w-24 overflow-hidden bg-stone-200">
          <span className="absolute inset-y-0 left-0 w-1/3 animate-[loader_1.2s_ease-in-out_infinite] bg-bronze-500" />
        </span>
        <span className="sr-only">{label}…</span>
      </div>
      <style>{'@keyframes loader{0%{transform:translateX(-100%)}100%{transform:translateX(300%)}}'}</style>
    </div>
  );
}
