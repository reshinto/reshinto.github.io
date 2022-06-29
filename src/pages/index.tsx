import React, {useState, useEffect} from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

let i = 0;

function HomepageHeader() {
  const [text, setText] = useState<any>([
    "Software Engineer",
    "Full-Stack Developer",
  ]);
  const [count, setCount] = useState<number>(0);
  const [show, setShow] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const {siteConfig} = useDocusaurusContext();

  const update = () => {
    const letter = text[i].charAt(count);
    const textlength = text[i].length;

    if (count <= textlength && isDeleting === false) {
      setCount(count + 1);
      setShow(show + letter);
    } else {
      if (show.length === 0) {
        setIsDeleting(false);
        setCount(0);
        i++;
      } else {
        setIsDeleting(true);
        setShow(show.slice(0, show.length - 1));
        setCount(0);
      }
      if (i === text.length) {
        i = 0;
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => update(), 250);
    return () => clearInterval(intervalId);
  }, [update]);

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Hey! I'm Terence Kong</h1>
        <h2 className="hero__subtitle">
          {siteConfig.title} {show}
          <span className="blink">|</span>
        </h2>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
