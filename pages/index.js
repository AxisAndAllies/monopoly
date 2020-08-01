import Head from "next/head";
import styles from "../styles/Home.module.css";
import Monopoly from "../assets/monopoly";
import { useState } from "react";

const pickRandElem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const BuyButton = ({ cost, onClick }) => {
  // console.log(cost);
  return <button onClick={onClick}>Buy for ${cost}</button>;
};

const ActionButton = ({ descript, action }) => {
  // console.log(descript);
  return <button onClick={action}>{descript}</button>;
};

export default function Home() {
  const { properties, tiles, chance, communitychest } = Monopoly;
  const [players, setPlayers] = useState([
    {
      name: "Bob",
      money: 1500,
      pos: 0,
      id: "bob",
    },
    {
      name: "Sally",
      money: 1500,
      pos: 0,
      id: "sally",
    },
  ]);
  let [turn, setTurn] = useState(0);

  const curPlayer = () => players[turn];
  const curPlayerId = () => players[turn].id;

  const addPlayerMoney = (id, amount) => {
    let newPlayers = [...players];
    players.filter((p) => p.id == id)[0].money += amount;
    setPlayers(newPlayers);
  };
  const setPlayerPos = (id, pos) => {
    let newPlayers = [...players];
    players.filter((p) => p.id == id)[0].pos = pos % tiles.length;
    setPlayers(newPlayers);
  };

  const evaluateCard = (card) => {
    if (card.movenearest) {
      //pass
    }
    if (card.move) {
      if (card.tileid) {
        setPlayerPos(
          curPlayerId,
          properties.filter((p) => p.id == card.tileid)[0].position
        );
        // TODO: handle payment...
      }
      if (card.groupid) {
        setPlayerPos(
          curPlayerId,
          properties.filter((p) => p.id == card.tileid)[0].position
        );
        // TODO: handle payment...
      }
      if (card.count) {
        setPlayerPos(curPlayerId(), curPlayer().pos + count);
      }
    }
    if (card.addfunds) {
      addPlayerMoney(curPlayerId(), card.amount);
    }
    if (card.removefunds) {
      addPlayerMoney(curPlayerId(), -card.amount);
    }
    if (card.removefundstoplayers) {
      //
    }
    if (card.propertycharges) {
      //
    }
    if (card.jail) {
      if (card.subaction === "goto") {
        setPlayerPos(curPlayerId(), 10);
      }
      if (card.subaction === "getout") {
        //
      }
    }
    if (card.addfundsfromplayers) {
      // add to you
      // subtract from players
    }
  };

  const specialActions = (p) => {
    () => {
      switch (p.id) {
        case "go":
          return () => addPlayerMoney(curPlayerId(), 200);
          break;
        case "jail":
          return () => setPlayerPos(curPlayerId(), 10);
          break;
        case "chance":
          return () => {
            let card = pickRandElem(chance);
            alert(card.title);
            evaluateCard(card);
          };
          break;
        case "freeparking":
          return () => setPlayerPos(curPlayerId(), 20);
          break;
        case "communitychest":
          return () => {
            let card = pickRandElem(communitychest);
            alert(card.title);
            evaluateCard(card);
          };
          break;
        case "gotojail":
          return () => setPlayerPos(curPlayerId(), 10);
          break;
        case "luxurytax":
          return () => addPlayerMoney(curPlayerId(), -75);
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
          <p>{curPlayer().name}'s turn</p>
          <button
            onClick={() => {
              let roll =
                Math.floor(Math.random() * 6) +
                Math.floor(Math.random() * 6) +
                1;
              alert("rolled a " + roll);
              setPlayerPos(curPlayerId(), curPlayer().pos + roll);
              console.log(players);
            }}
          >
            Roll
          </button>
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
