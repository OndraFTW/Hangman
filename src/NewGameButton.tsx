import React from "react";
import styles from "./Hangman.module.scss";

interface NewGameButtonProps {
  click: (event: React.MouseEvent<HTMLButtonElement>) => void;
  block: boolean;
}

export default class NewGameButton extends React.Component<NewGameButtonProps> {
  render() {
    return (
      <>
        <button
          className={styles.keyboardspacebutton}
          onClick={(e) => this.props.click(e)}
          disabled={this.props.block}
        >
          {"New game"}
        </button>
      </>
    );
  }
}
