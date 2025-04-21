import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { FileJson, Code, FileText } from 'lucide-react';

type FeatureItem = {
  title: string;
  description: ReactNode;
  icon: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'REST API',
    description: (
      <>
        Access Captide's powerful AI capabilities through our HTTP API. Integrate with any programming language or platform.
      </>
    ),
    icon: <FileJson className={styles.featureIcon} />,
  },
  {
    title: 'JavaScript SDK',
    description: (
      <>
        Use our TypeScript SDK for seamless integration with your JavaScript applications. Strongly typed for better developer experience.
      </>
    ),
    icon: <Code className={styles.featureIcon} />,
  },
  {
    title: 'Comprehensive Documentation',
    description: (
      <>
        Detailed guides and API references to help you quickly integrate Captide's features into your applications.
      </>
    ),
    icon: <FileText className={styles.featureIcon} />,
  },
];

function Feature({title, description, icon}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div className={styles.featureIconWrapper}>{icon}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
