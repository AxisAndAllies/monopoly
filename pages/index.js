import Head from "next/head";
import styles from "../styles/Home.module.css";
import Monopoly from "../assets/monopoly";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const pickRandElem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const sleep = (millis) => new Promise((resolve) => setTimeout(resolve, millis));

const BuyButton = ({ cost, onClick }) => {
  // console.log(cost);
  return <button onClick={onClick}>Buy for ${cost}</button>;
};

const ActionButton = ({ descript, action }) => {
  // console.log(descript);
  return action ? <button onClick={action}>{descript}</button> : null;
};
const Player = ({ name }) => {
  return (
    <label
      style={{
        "background-color": "lightcoral",
        padding: "0.4em",
        fontSize: ".8em",
      }}
    >
      {JSON.stringify(name)}
    </label>
  );
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
      name: "Alice",
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
    switch (p.id) {
      case "go":
        return null;
        break;
      case "jail":
        return null;
        // return () => {}; // todo implement getting out of jail...
        break;
      case "chance":
        return () => {
          let card = pickRandElem(chance);
          toast(card.title);
          evaluateCard(card);
        };
        break;
      case "freeparking":
        return null;
        break;
      case "communitychest":
        return () => {
          let card = pickRandElem(communitychest);
          toast(card.title);
          evaluateCard(card);
        };
        break;
      case "gotojail":
        return null;
        break;
      case "luxurytax":
        return null;
        break;
      // default:
      //   toast("darn");
      //   break;
    }
  };

  const MoneyButtons = (p) => {
    console.log(p, "hi");
    if (!p.ownedby || p.ownedby !== -1) return null;
    // return null;
    return p.ownedby !== curPlayerId() ? (
      <ActionButton
        descript={`Pay Rent (${p.rent})`}
        action={() => {
          //pass
        }}
      />
    ) : (
      <BuyButton
        cost={p.price}
        onClick={() => {
          setPlayers(p.price);
        }}
      />
    );
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
          <p>
            {curPlayer().name}'s turn (${curPlayer().money})
          </p>
          <button
            onClick={async () => {
              let roll =
                Math.floor(Math.random() * 6) +
                Math.floor(Math.random() * 6) +
                1;
              toast("rolled a " + roll);
              for (let i = 0; i < roll; i++) {
                setPlayerPos(curPlayerId(), curPlayer().pos + 1);
                await sleep(250);
              }
              if (curPlayer().pos === 30) {
                //gotojail
                toast("Go to jail!");
                setPlayerPos(curPlayerId(), 10);
              }
              if (curPlayer().pos === 38) {
                // pay luxury tax
                toast("Pay luxury tax ($75)");
                addPlayerMoney(curPlayerId(), -75);
              }
              if (curPlayer().pos === 4) {
                // pay income tax
                // 200 or $10% of assets
                // toast("Pay income tax ($...)");
              }
              if (curPlayer().pos === 0) {
                // pass go
                toast("Collected $200");
                addPlayerMoney(curPlayerId(), 200);
              }
              console.log(players, turn);
            }}
          >
            Roll
          </button>
          <button
            onClick={() => {
              setTurn((turn) => (turn + 1) % players.length);
              toast("Ended turn.");
            }}
          >
            Next Turn
          </button>
        </p>

        <div className={styles.grid}>
          {tiles
            .map((t) => properties.filter((p) => p.id == t.id)[0])
            // .sort((a, b) => a.position - b.position)
            .map((p, ind) => (
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
                      {ind === curPlayer().pos && MoneyButtons(p)}
                    </>
                  )}
                  {players
                    .filter((pl) => pl.pos === ind)
                    .map((pl) => (
                      <Player name={pl.name} />
                    ))}
                  <br></br>
                  {p.group === "Special" && (
                    // && curPlayer().pos === ind
                    <ActionButton
                      descript={(() => {
                        if (p.id === "chance" || p.id === "community chest") {
                          return "Draw";
                        }
                        return "special action";
                      })()}
                      action={specialActions(p)}
                    />
                  )}
                </div>
              </>
            ))}
        </div>
      </main>
      <ToastContainer autoClose={2000} newestOnTop={true} />
    </div>
  );
}
