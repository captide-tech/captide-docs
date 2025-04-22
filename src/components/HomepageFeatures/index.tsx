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
        Access Captide's AI agent for Q&A on over 750,000 SEC filings and earnings calls. Get document snippets or streaming answers with source citations.
      </>
    ),
    icon: <FileJson className={styles.featureIcon} />,
  },
  {
    title: 'JavaScript SDK',
    description: (
      <>
        Display source documents with our Captide.js React components. Embed the document viewer in your app for direct access to financial information with source linking.
      </>
    ),
    icon: <Code className={styles.featureIcon} />,
  },
  {
    title: 'Comprehensive Documentation',
    description: (
      <>
        Integrate financial document intelligence into your applications with our detailed guides, API references, and code examples.
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
