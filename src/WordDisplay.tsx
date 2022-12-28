import React from "react";
import styles from "./Hangman.module.scss";
import { GameStatus } from "./App";

interface WordDisplayProps {
  word: string;
  wordToShow: string;
  status: GameStatus;
}

export default class WordDisplay extends React.Component<WordDisplayProps> {
  render() {
    const wordToShow =
      this.props.status !== GameStatus.playing
        ? this.props.word
        : this.props.wordToShow;
    var i = -1;
    return (
      <div>
        {Array.from(wordToShow).map((l) => {
          i++;
          return (
            <span
              className={
                this.props.wordToShow[i] === "*"
                  ? styles.worddisplayletterhide
                  : styles.worddisplaylettershow
              }
            >
              {l}
            </span>
          );
        })}
      </div>
    );
  }
}
