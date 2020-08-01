import Head from "next/head";
import styles from "../styles/Home.module.css";
import Monopoly from "../assets/monopoly";
import { useState } from "react";

const pickRandElem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const DiceButton = () => {
  const [val, setVal] = useState(6);
  return (
    <button
      onClick={() => {
        setVal(
          Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 1
        );
        console.log("rolled", val);
      }}
    >
      Roll Dice ({val})
    </button>
  );
};

const BuyButton = ({ cost, onClick }) => {
  // console.log(cost);
  return <button onClick={onClick}>Buy for ${cost}</button>;
};

const ActionButton = ({ descript, action }) => {
  // console.log(descript);
  return <button onClick={action}>{descript}</button>;
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

  let curPlayerId = () => players[turn].id;
  let addPlayerMoney = (id, amount) => {
    newPlayers = [...players];
    players[id].money += amount;
    setPlayers(newPlayers);
  };
  let setPlayerPos = (id, pos) => {
    newPlayers = [...players];
    players[id].pos = pos;
    setPlayers(newPlayers);
  };

  const specialActions = (p) => {
    () => {
      switch (p.id) {
        case "go":
          return () => addPlayerMoney(curPlayerId, 200);
          break;
        case "jail":
          return () => setPlayerPos(curPlayerId, 10);
          break;
        case "chance":
          return () => {
            let card = pickRandElem(chance);
          };
          break;
        case "freeparking":
          return () => setPlayerPos(curPlayerId, 10);
          break;
        case "communitychest":
          return () => {
            let card = pickRandElem(communitychest);
            if (card.tileid) {
              setPlayerPos(
                curPlayerId,
                properties.filter((p) => p.id == card.tileid)[0].position
              );
            }
            if (card.movenearest) {
              //pass
            }
            if (card.move) {
              //
            }
            if (card.addfunds) {
              addPlayerMoney(curPlayerId, card.amount);
            }
            if (card.removefunds) {
              addPlayerMoney(curPlayerId, -card.amount);
            }
            if (card.removefundstoplayers) {
              //
            }
            if (card.propertycharges) {
              //
            }
            if (card.jail) {
              if (card.subaction === "goto") {
              }
              if (card.subaction === "getout") {
                //
              }
            }
            if (card.addfundsfromplayers) {
            }
          };
          break;
        case "gotojail":
          return () => setPlayerPos(curPlayerId, 10);
          break;
        case "luxurytax":
          return () => setPlayerPos(curPlayerId, 10);
          break;
      }
    };
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Monopoly</h1>

        <p className={styles.description}>
          {/* Roll Dice */}
          <DiceButton />
          <button
            onClick={() => {
              setTurn((turn) => (turn + 1) % players.length);
              console.log(turn);
            }}
          >
            Next Turn
          </button>
        </p>

        <div className={styles.grid}>
          {tiles
            .map((t) => properties.filter((p) => p.id == t.id)[0])
            // .sort((a, b) => a.position - b.position)
            .map((p) => (
              <>
                <div className={styles.card}>
                  <p>{p.name}</p>

                  <p>{p.mortgaged && "***Mortgaged"}</p>
                  <p>
                    {p.ownedby &&
                      p.ownedby !== -1 &&
                      `***owned by ${p.ownedby}`}
                  </p>
                  {p.buildings ? <p>Buildings: {p.buildings}</p> : null}

                  {p.price && (
                    <>
                      <p>rent = ${p.rent}</p>
                      <BuyButton
                        cost={p.price}
                        onClick={() => {
                          console.log("clicked");
                        }}
                      />
                      {p.ownedby && (
                        <ActionButton
                          descript={"Pay Rent"}
                          action={() => {
                            //pass
                          }}
                        />
                      )}
                    </>
                  )}
                  {p.group === "Special" && (
                    <ActionButton
                      descript="special action"
                      action={specialActions(p)}
                    />
                  )}
                </div>
              </>
            ))}
        </div>
      </main>
    </div>
  );
}
