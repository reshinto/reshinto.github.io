import clsx from "clsx";
import React from "react";
import {formatTitle} from "../../utils";
import styles from "./styles.module.css";

export default function RepoCard(props) {
  const {name, description, tech, html_url, image, client} = props;

  return (
    <div className={clsx("card card--full-height", styles.cardDirect)}>
      <a className={styles.cardLink} href={html_url} />
      <img
        src={image}
        onError={(event) => (event.target.style.display = "none")}
        alt=""
      />
      <div className={"card__header"}>
        <h3>{formatTitle(name)}</h3>
      </div>
      <div className={"card__body"}>
        <p>{description}</p>
      </div>
      <div className={clsx("card__footer", styles.bottom)}>
        <div className={styles.bottomIcon}>
          <p>{`🤝 ${client}`}</p>
        </div>
        <div className={styles.bottomSpace} />
      </div>
    </div>
  );
}
