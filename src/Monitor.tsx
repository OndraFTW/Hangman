import React from "react";
import styles from "./Hangman.module.scss";
import Hangman from "./Hangman";
import WordDisplay from "./WordDisplay";
import { GameStatus } from "./App";

interface MonitorProps {
  word: string;
  wordToShow: string;
  tries: number;
  mistakes: number;
  status: GameStatus;
}

export default class Monitor extends React.Component<MonitorProps> {
  getMessage() {
    switch (this.props.status) {
      case GameStatus.playing:
        return "There is a chance.";
      case GameStatus.lost:
        return "You are dead!";
      case GameStatus.won:
        return "You won!";
    }
  }

  render() {
    return (
      <div className={styles.monitor}>
        <Hangman mistakes={this.props.mistakes} />
        <div>{this.getMessage()}</div>
        <WordDisplay
          word={this.props.word}
          wordToShow={this.props.wordToShow}
          status={this.props.status}
        />
        <div>Tries: {this.props.tries}</div>
        <div>Mistakes: {this.props.mistakes}</div>
      </div>
    );
  }
}
