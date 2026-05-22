import MonoLabel from './MonoLabel.jsx';

const GROUPS = [
  { label: "Languages",       items: ["PHP 8.x", "SQL", "JavaScript", "Bash"] },
  { label: "CMS / Framework", items: ["Drupal 10", "Symfony", "Laravel", "Legacy custom"] },
  { label: "Databases",       items: ["MySQL", "MariaDB", "SQL Server", "PostgreSQL"] },
  { label: "Cloud",           items: ["AWS", "Acquia", "RDS", "ECS / EC2"] },
  { label: "Integrations",    items: ["Salesforce", "Auth0", "Stripe", "Algolia"] },
];

export default function StackRow() {
  return (
    <section className="py-7 border-b border-rule bg-bg-soft">
      <div className="container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {GROUPS.map((g) => (
          <div key={g.label}>
            <MonoLabel className="text-muted">{g.label}</MonoLabel>
            <ul className="list-none p-0 m-0 mt-[10px] text-[13px] leading-[1.8] text-ink-soft">
              {g.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
