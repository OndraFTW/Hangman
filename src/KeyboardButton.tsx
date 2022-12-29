import React from "react";
import styles from "./Hangman.module.scss";

interface KeyboardButtonProps {
  click: (event: React.MouseEvent<HTMLButtonElement>, letter: string) => void;
  letter: string;
  block: boolean;
}

export default class KeyboardButton extends React.Component<KeyboardButtonProps> {
  render() {
    return (
      <>
        <button
          className={styles.keyboardletterbutton}
          onClick={(e) => this.props.click(e, this.props.letter)}
          disabled={this.props.block}
        >
          {this.props.letter}
        </button>
      </>
    );
  }
}
