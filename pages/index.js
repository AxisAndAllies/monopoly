//@ts-check

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Monopoly from "../assets/monopoly";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const pickRandElem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const sleep = (millis) => new Promise((resolve) => setTimeout(resolve, millis));

const MortgageButton = ({ cost, onClick }) => (
  <button onClick={onClick}>Mortgage, receive ${cost}</button>
);
const UnMortgageButton = ({ cost, onClick }) => (
  <button onClick={onClick}>
    Un-mortgage, pay ${Math.round(cost * 100) / 100}
  </button>
);
const BuyButton = ({ cost, onClick }) => (
  <button onClick={onClick}>Buy for ${cost}</button>
);
const SellButton = ({ cost, onClick }) => (
  <button onClick={onClick}>Sell for ${cost}</button>
);
const BuyBuildingButton = ({ cost, onClick }) => (
  <button onClick={onClick}>Buy 1 building for ${cost}</button>
);
const SellBuildingButton = ({ cost, onClick }) => (
  <button onClick={onClick}>Sell 1 building for ${cost}</button>
);
// const ActionButton = ({ descript, action }) =>
//   action ? <button onClick={action}>{descript}</button> : null;

const calcRent = (property) => {
  let rent = property.rent;
  if (property.buildings) {
    rent = property.multpliedrent[property.buildings - 1];
  }
  return rent;
};

const Player = ({ name, color }) => (
  <label
    style={{
      backgroundColor: color,
      padding: "0.4em",
      fontSize: ".8em",
    }}
  >
    {JSON.stringify(name)}
  </label>
);
export default function Home() {
  const { tiles, chance, communitychest } = Monopoly;
  const [properties, setProperties] = useState(Monopoly.properties);
  const [players, setPlayers] = useState([
    {
      name: "Bob",
      money: 1500,
      pos: 0,
      id: 200,
      color: "lightcoral",
    },
    {
      name: "Alice",
      money: 1500,
      pos: 0,
      id: 201,
      color: "mediumseagreen",
    },
  ]);
  let [turn, setTurn] = useState(0);
  let [hasRolled, setHasRolled] = useState(false);

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

  const setPropOwner = (propId, ownerId) => {
    let newprops = [...properties];
    newprops.filter((pr) => pr.id === propId)[0].ownedby = ownerId;
    setProperties(newprops);
  };
  const toggleMortgage = (propId) => {
    let newprops = [...properties];
    let pr = newprops.filter((pr) => pr.id === propId)[0];
    newprops.filter((pr) => pr.id === propId)[0].mortgaged = !pr.mortgaged;
    setProperties(newprops);
  };
  const addHouse = (propId, amount) => {
    let newprops = [...properties];
    let pr = newprops.filter((pr) => pr.id === propId)[0];
    newprops.filter((pr) => pr.id === propId)[0].buildings += amount;
    setProperties(newprops);
  };

  const checkAndPayRent = (landedOn) => {
    if (
      landedOn.ownedby &&
      landedOn.ownedby !== -1 &&
      landedOn.ownedby !== curPlayerId()
    ) {
      let actualRent = calcRent(landedOn);
      // auto pay rent
      addPlayerMoney(curPlayerId(), -actualRent);
      console.log(landedOn);
      addPlayerMoney(landedOn.ownedby, actualRent);
      toast(
        `Paid ${actualRent} to ${
          players.filter((pl) => pl.id == landedOn.ownedby)[0].name
        }`
      );
    }
  };

  const evaluateCard = (card) => {
    console.log(card);
    switch (card.action) {
      case "movenearest":
        //pass
        break;
      case "move":
        if (card.tileid) {
          let curPos = curPlayer().pos;
          let newPos = properties.filter((p) => p.id == card.tileid)[0]
            .position;
          if (curPos >= newPos) {
            // this means you passed Go
            addPlayerMoney(curPlayerId(), 200);
            toast("Passed Go, collected $200");
          }
          setPlayerPos(curPlayerId, newPos);
          // pay owner if necessary
          const landedOn = properties.filter(
            (pr) =>
              pr.id === tiles.filter((t, ind) => ind === curPlayer().pos)[0].id
          )[0];
          checkAndPayRent(landedOn);
        }
        if (card.groupid) {
          setPlayerPos(
            curPlayerId,
            properties.filter((p) => p.id == card.tileid)[0].position
          );
          // TODO: handle payment...
        }
        if (card.count) {
          setPlayerPos(curPlayerId(), curPlayer().pos + card.count);
        }
        break;
      case "addfunds":
        addPlayerMoney(curPlayerId(), card.amount);
        break;
      case "removefunds":
        addPlayerMoney(curPlayerId(), -card.amount);
        break;
      case "removefundstoplayers":
        //
        break;
      case "propertycharges":
        //
        break;
      case "jail":
        if (card.subaction === "goto") {
          setPlayerPos(curPlayerId(), 10);
        }
        if (card.subaction === "getout") {
          //
        }
        break;
      case "addfundsfromplayers":
        // add to you
        // subtract from players
        break;
      default:
        throw Error("unhandled case");
    }
  };

  const specialActions = (p) => {
    switch (p.id) {
      case "go":
      case "freeparking":
      case "gotojail":
      case "luxurytax":
        return () => {};
        break;
      case "jail":
        return () => {}; // todo implement getting out of jail...
        break;
      case "chance":
        return () => {
          let card = pickRandElem(chance);
          toast.info(card.title);
          evaluateCard(card);
        };
        break;
      case "communitychest":
        return () => {
          let card = pickRandElem(communitychest);
          toast.info(card.title);
          evaluateCard(card);
        };
      default:
        throw Error("unhandled case");
    }
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
          {!hasRolled && (
            <button
              onClick={async () => {
                setHasRolled(true);
                let roll =
                  Math.floor(Math.random() * 6) +
                  Math.floor(Math.random() * 6) +
                  1;
                toast("rolled a " + roll);
                for (let i = 0; i < roll; i++) {
                  setPlayerPos(curPlayerId(), curPlayer().pos + 1);
                  await sleep(200);
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
                if (curPlayer().pos - roll <= 0) {
                  // pass go
                  addPlayerMoney(curPlayerId(), 200);
                  toast("Passed Go, collected $200");
                }
                const landedOn = properties.filter(
                  (pr) =>
                    pr.id ===
                    tiles.filter((t, ind) => ind === curPlayer().pos)[0].id
                )[0];
                checkAndPayRent(landedOn);

                if (landedOn.group === "Special") {
                  // auto do special action
                  specialActions(landedOn)();
                }
              }}
            >
              Roll
            </button>
          )}
          {hasRolled && (
            <button
              onClick={() => {
                setTurn((turn) => (turn + 1) % players.length);
                toast("Ended turn.");
                setHasRolled(false);
              }}
            >
              End Turn
            </button>
          )}
        </p>

        <div className={styles.grid}>
          {tiles
            .map((t) => properties.filter((p) => p.id == t.id)[0])
            // .sort((a, b) => a.position - b.position)
            .map((p, ind) => (
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute" }}>
                  {players
                    .filter((pl) => pl.pos === ind)
                    .map((pl) => (
                      <Player name={pl.name} color={pl.color} />
                    ))}
                </div>
                <div
                  className={styles.card}
                  style={{
                    borderColor: players.filter((pl) => pl.id == p.ownedby)[0]
                      ?.color,
                    borderWidth: p.ownedby ? 2 : 1,
                    backgroundColor: p.mortgaged ? "#ccc" : "#eaeaea",
                  }}
                >
                  <p>
                    {p.buildings !== undefined ? (
                      <>
                        <span style={{ backgroundColor: p.group }}>
                          &nbsp;{"*".repeat(p.buildings || 0)}&nbsp;
                        </span>
                        &nbsp;&nbsp;
                      </>
                    ) : null}
                    {p.name}
                  </p>

                  <label>{p.mortgaged && "(mortgaged)"}</label>
                  {p.buildings ? <p>Buildings: {p.buildings}</p> : null}

                  {p.price && (
                    <>
                      <p>rent = ${calcRent(p)}</p>
                      {p.ownedby == curPlayerId() && (
                        <>
                          {p.mortgaged ? (
                            <UnMortgageButton
                              cost={p.price * 0.55}
                              onClick={() => {
                                toast.info(`Un-mortgaged ${p.name}`);
                                addPlayerMoney(curPlayerId(), -p.price * 0.55); // mortgage cost + 10%
                                toggleMortgage(p.id);
                              }}
                            />
                          ) : (
                            <MortgageButton
                              cost={p.price >> 1}
                              onClick={() => {
                                toast.info(`Mortgaged ${p.name}`);
                                addPlayerMoney(curPlayerId(), p.price >> 1); // halfcost
                                toggleMortgage(p.id);
                              }}
                            />
                          )}
                          {p.buildings != undefined && p.buildings < 5 ? (
                            <BuyBuildingButton
                              cost={p.housecost}
                              onClick={() => {
                                toast.info(`Bought 1 building on ${p.name}`);
                                addPlayerMoney(curPlayerId(), -p.housecost);
                                addHouse(p.id, 1);
                              }}
                            />
                          ) : null}
                          {p.buildings ? (
                            <SellBuildingButton
                              cost={p.housecost >> 1}
                              onClick={() => {
                                toast.info(`Sold 1 building on ${p.name}`);
                                addPlayerMoney(curPlayerId(), p.housecost >> 1);
                                addHouse(p.id, -1);
                              }}
                            />
                          ) : null}
                          <SellButton
                            cost={p.price >> (p.mortgaged ? 2 : 1)}
                            onClick={() => {
                              addPlayerMoney(
                                curPlayerId(),
                                p.price >> (p.mortgaged ? 2 : 1)
                              ); // halfcost
                              setPropOwner(p.id, -1);
                              // reset mortgage
                              if (
                                properties.filter((pr) => pr.id === p.id)[0]
                                  .mortgaged
                              )
                                toggleMortgage(p.id);
                            }}
                          />
                        </>
                      )}
                      {ind == curPlayer().pos && p.ownedby === -1 && (
                        <BuyButton
                          cost={p.price}
                          onClick={() => {
                            addPlayerMoney(curPlayerId(), -p.price);
                            setPropOwner(p.id, curPlayerId());
                          }}
                        />
                      )}
                    </>
                  )}
                  <br></br>
                </div>
              </div>
            ))}
        </div>
      </main>
      <ToastContainer autoClose={3000} newestOnTop={true} />
    </div>
  );
}
