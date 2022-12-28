import React from "react";
import Keyboard from "./Keyboard";
import Monitor from "./Monitor";
import styles from "./Hangman.module.scss";

const LETTERS = Array.from("QWERTYUIOPASDFGHJKLZXCVBNM");

const WORDS = [
  "inexpensive",
  "crook",
  "popcorn",
  "nappy",
  "lovely",
  "elegant",
  "mighty",
  "concerned",
  "preserve",
  "ring",
  "domineering",
  "kitty",
];

export enum GameStatus {
  playing,
  lost,
  won,
}

interface AppProps {}

interface AppState {
  tries: string[];
  mistakes: number;
  status: GameStatus;
  word: string;
  wordToShow: string;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.buttonPress = this.buttonPress.bind(this);
    this.state = this.getBaseState();
    window.addEventListener("keydown", (e: KeyboardEvent) => {
      this.keyPressed(e.key.toUpperCase());
    });
  }

  getBaseState(): AppState {
    const word = WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
    console.log(word);
    return {
      tries: [],
      mistakes: 0,
      status: GameStatus.playing,
      word,
      wordToShow: "*".repeat(word.length),
    };
  }

  buttonPress(event: React.MouseEvent<HTMLButtonElement>, letter: string) {
    this.keyPressed(letter);
  }

  keyPressed(letter: string) {
    if (!LETTERS.includes(letter)) {
      if (this.state.status !== GameStatus.playing) {
        this.setState(this.getBaseState());
      }
    } else {
      if (
        this.state.status !== GameStatus.playing ||
        this.state.tries.includes(letter)
      ) {
        return;
      }
      const newState: AppState = { ...this.state };
      newState.tries.push(letter);
      var newWordToShow = Array.from(this.state.wordToShow);
      var isMistake: boolean = true;
      for (var i = 0; i < this.state.word.length; i++) {
        if (this.state.word[i] === letter) {
          newWordToShow[i] = letter;
          isMistake = false;
        }
      }
      if (isMistake) {
        newState.mistakes++;
      }
      if (newState.mistakes >= 7) {
        newState.status = GameStatus.lost;
      } else if (!newWordToShow.includes("*")) {
        newState.status = GameStatus.won;
      }
      newState.wordToShow = newWordToShow.join("");
      this.setState(newState);
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <Monitor
          word={this.state.word}
          wordToShow={this.state.wordToShow}
          tries={this.state.tries.length}
          mistakes={this.state.mistakes}
          status={this.state.status}
        />
        <Keyboard
          click={this.buttonPress}
          tries={this.state.tries}
          block={this.state.status !== GameStatus.playing}
        />
      </div>
    );
  }
}
