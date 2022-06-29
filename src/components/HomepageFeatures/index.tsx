import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Svg from "../../../static/img/undraw_docusaurus_react.svg";

type FeatureItem = {
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    description: (
      <>
        Software engineering has always had a place in my life. My first
        experience with code was back in Singapore polytechnic (High School
        equivalent), where I wrote my first line of code in C++. The feeling I
        got from that of being able to create something out of nothing was just
        mind-blowing. I would graduate from the course with a diploma in
        Electronics, Computer, and Communications Engineering.
      </>
    ),
  },
  {
    description: (
      <>
        Wanting to acquire a broader and varied knowledge of the arts and
        sciences, I travelled to Japan to pursue an International Liberal Arts
        Degree at Waseda University instead of a STEM degree in Singapore. Over
        there, I gained the ability to recognize the political, social,
        historical, and philosophical implications of contemporary experience,
        which is critical to life-long learning.
      </>
    ),
  },
  {
    description: (
      <>
        My initial job post was at Relo Excel International, a Japanese company
        providing real estate and travel support related work. During my time
        there, I witnessed the usefulness of programming in automating workflow.
        My curiosity led me back into the world of software engineering, which,
        in turn, exposed me to new technologies such as mobile, data science,
        web, VR / AR, and much more.
      </>
    ),
  },
];

function Feature({description}: FeatureItem) {
  return <p>{description}</p>;
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx("col")}>
            <div className="text--center">
              <Svg className={styles.featureSvg} />
            </div>
            <div className="text--center padding-horiz--md">
              <h3>
                Passionate about devising elegant problem-solving methods and
                learning new technologies
              </h3>
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
