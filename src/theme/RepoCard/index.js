import clsx from "clsx";
import React from "react";
import {formatTitle} from "../../utils";
import styles from "./styles.module.css";

export default function RepoCard(props) {
  const {
    name,
    html_url,
    description,
    language,
    stargazers_count,
    forks_count,
    owner,
  } = props;

  const image = `https://raw.githubusercontent.com/${owner?.login}/${name}/master/images/demo.gif`;
  const altImage = `https://raw.githubusercontent.com/${owner?.login}/${name}/master/images/demo.png`;

  return (
    <div className={clsx("card card--full-height", styles.cardDirect)}>
      <a className={styles.cardLink} href={html_url} />
      <img
        src={image}
        onError={(event) => (event.target.style.display = "none")}
        alt=""
      />
      <img
        src={altImage}
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
          <p>{`💻 ${language}`}</p>
        </div>
        <div className={styles.bottomIcon}>
          <p>{`⭐ ${stargazers_count}`}</p>
        </div>
        <div className={styles.bottomIcon}>
          <p>{`🍴 ${forks_count}`}</p>
        </div>
        <div className={styles.bottomSpace} />
      </div>
    </div>
  );
}
