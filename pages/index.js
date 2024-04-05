import Link from "next/link";
import db from "../data/db.json"

export default function Home() {
  return (
    <>
      <h1 className="title">Next-js tutorial</h1>
      <ul className="season-ul">
        {
          db.seasons.map(
            season =>
              <li className="season-li" key={season.id} >
                <Link href={season.path}>{season.title}</Link>
              </li>
          )
        }
      </ul>
    </>
  );
}
