import Head from "next/head";
import styles from "../styles/Home.module.css";
import Monopoly from "../assets/monopoly";
import { useState } from "react";

const DiceButton = () => {
  const [val, setVal] = useState(6);
  return (
    <button
      onClick={() => {
        // lol not acc
        setVal(Math.floor(Math.random() * 12) + 1);
        console.log("rolled", val);
      }}
    >
      Roll Dice ({val})
    </button>
  );
};

const BuyButton = ({ cost, onClick }) => {
  console.log(cost);
  return <button onClick={onClick}>Buy for ${cost}</button>;
};

const ActionButton = ({ descript, action }) => {
  console.log(descript);
  return <button onClick={action}>Action: {descript}</button>;
};

export default function Home() {
  let { properties, tiles, chance, communitychest } = Monopoly;
  let [players, setPlayers] = useState([
    {
      name: "bob",
      money: 1500,
      pos: 0,
    },
    {
      name: "sally",
      money: 1500,
      pos: 0,
    },
  ]);
  let [turn, setTurn] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Monopoly</h1>

        <p className={styles.description}>
          Roll Dice
          <DiceButton />
        </p>

        <div className={styles.grid}>
          {tiles
            .map((t) => properties.filter((p) => p.id == t.id)[0])
            // .sort((a, b) => a.position - b.position)
            .map((p) => (
              <>
                <div className={styles.card}>
                  <p>{JSON.stringify(p)}</p>
                  {p.price && (
                    <BuyButton
                      cost={p.price}
                      onClick={() => {
                        console.log("clicked");
                      }}
                    />
                  )}
                  <ActionButton
                    descript={() => {
                      //pass
                    }}
                    action={() => {
                      //pass
                    }}
                  />
                </div>
              </>
            ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
