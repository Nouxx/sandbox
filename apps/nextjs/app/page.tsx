import Image from "next/image";
import styles from "./page.module.css";

function LinkComponent({ label }: Readonly<{ label: string }>) {
  return (
    <li>
      <a href={`/${label}`}>{label}</a>
    </li>
  );
}

const routes = [
  "email-validation",
  "css-grid-overlay",
  "hidden-button",
  "dialog",
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>Next.js sandbox</h1>
          <p>Available routes:</p>
          <ul>
            {routes.map((link) => (
              <LinkComponent label={link} key={link} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
