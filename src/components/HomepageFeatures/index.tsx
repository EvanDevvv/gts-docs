import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Bus Spawners',
    description: (
      <>
        GTS Assets has designed multiple spawners ever since we have released, and every time a new one is released, it gets better!
      </>
    ),
  },
  {
    title: 'Auto Speccing Plugin',
    description: (
      <>
        GTS Assets has created the first ever Auto Speccing Plugin for GenX and Huxley Buses, to make ROBLOX bus speccing go by a lot faster. Our plug-in changes exterior options of your bus, such as: Rub Rail Color (Only Huxley), Rim Colors, District Name, and even light model changes!
      </>
    ),
  },
  {
    title: 'Buildings',
    description: (
      <>
        GTS Assets has also created Building Models that are Unnamed, so you can customize them to your liking!
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
