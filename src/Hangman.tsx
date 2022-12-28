import React from "react";
import styles from "./Hangman.module.scss";

const HANGMEN = [
  [
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
  ],
  [
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
    "  _____ ",
    "        ",
  ],
  [
    "        ",
    "        ",
    " |      ",
    " |      ",
    " |      ",
    " |      ",
    " |      ",
    " |_____ ",
    "        ",
  ],
  [
    "        ",
    "  ___   ",
    " |      ",
    " |      ",
    " |      ",
    " |      ",
    " |      ",
    " |_____ ",
    "        ",
  ],
  [
    "        ",
    "  ___   ",
    " |   |  ",
    " |   o  ",
    " |      ",
    " |      ",
    " |      ",
    " |_____ ",
    "        ",
  ],
  [
    "        ",
    "  ___   ",
    " |   |  ",
    " |   o  ",
    " |   |  ",
    " |      ",
    " |      ",
    " |_____ ",
    "        ",
  ],
  [
    "        ",
    "  ___   ",
    " |   |  ",
    " |   o  ",
    " |  /|\\ ",
    " |      ",
    " |      ",
    " |_____ ",
    "        ",
  ],
  [
    "        ",
    "  ___   ",
    " |   |  ",
    " |   o  ",
    " |  /|\\ ",
    " |  / \\ ",
    " |      ",
    " |_____ ",
    "        ",
  ],
];

interface HangmanProps {
  mistakes: number;
}

export default class Hangman extends React.Component<HangmanProps> {
  render() {
    const hangman =
      HANGMEN[
        this.props.mistakes >= HANGMEN.length - 1
          ? HANGMEN.length - 1
          : this.props.mistakes
      ];
    return (
      <div className={styles.hangman}>
        {hangman.map((l) => {
          return <div className={styles.hangmanline}>{l}</div>;
        })}
      </div>
    );
  }
}
