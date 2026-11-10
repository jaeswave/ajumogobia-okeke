import Reveal from '../common/Reveal.jsx';

/** Renders the structured narrative sections of a practice area. */
export default function PracticeDetailsBody({ practice }) {
  return (
    <div className="prose-firm">
      <Reveal>
        <p className="font-serif text-[1.65rem]! leading-snug! text-midnight-900">{practice.intro}</p>
      </Reveal>
      {practice.sections.map((s) => (
        <Reveal key={s.heading} amount={0.1}>
          <h2>{s.heading}</h2>
          {s.body && <p>{s.body}</p>}
          {s.items && (
            <ul>
              {s.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          )}
        </Reveal>
      ))}
    </div>
  );
}
