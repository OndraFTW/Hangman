import React from "react";
import styles from "./Hangman.module.scss";
import KeyboardButton from "./KeyboardButton";

interface KeyboardProps {
  click: (event: React.MouseEvent<HTMLButtonElement>, letter: string) => void;
  tries: string[];
  block: boolean;
}

export default class Keyboard extends React.Component<KeyboardProps> {
  render() {
    const row1 = Array.from("QWERTYUIOP");
    const row2 = Array.from("ASDFGHJKL");
    const row3 = Array.from("ZXCVBNM");
    return (
      <div className={styles.keyboard}>
        <div>
          {row1.map((k: string) => {
            return (
              <KeyboardButton
                letter={k}
                click={this.props.click}
                block={this.props.block || this.props.tries.includes(k)}
              />
            );
          })}
        </div>
        <div>
          {row2.map((k: string) => {
            return (
              <KeyboardButton
                letter={k}
                click={this.props.click}
                block={this.props.block || this.props.tries.includes(k)}
              />
            );
          })}
        </div>
        <div>
          {row3.map((k: string) => {
            return (
              <KeyboardButton
                letter={k}
                click={this.props.click}
                block={this.props.block || this.props.tries.includes(k)}
              />
            );
          })}
        </div>
        <div>
          <KeyboardButton
            letter={"New game"}
            click={this.props.click}
            block={!this.props.block}
          />
        </div>
      </div>
    );
  }
}
