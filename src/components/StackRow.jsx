import MonoLabel from './MonoLabel.jsx';

const GROUPS = [
  { label: "Languages",       items: ["PHP 8.x", "Node.js", "React", "JavaScript"] },
  { label: "PHP Frameworks",  items: ["Drupal 10+", "Symfony", "Laravel", "CodeIgniter"] },
  { label: "Databases",       items: ["MySQL", "SQL Server", "MariaDB", "MongoDB"] },
  { label: "Cloud",           items: ["AWS", "Acquia", "Azure", "DigitalOcean"] },
  { label: "Integrations",    items: ["Salesforce", "Auth0", "Stripe", "SAP"] },
];

export default function StackRow() {
  return (
    <section className="py-7 border-b border-rule bg-bg-soft">
      <div className="container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {GROUPS.map((g) => (
          <div key={g.label}>
            <MonoLabel className="text-muted">{g.label}</MonoLabel>
            <ul className="list-none p-0 m-0 mt-2.5 text-[13px] leading-[1.8] text-ink-soft">
              {g.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
