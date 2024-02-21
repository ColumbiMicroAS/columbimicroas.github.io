import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Payroll+ Lønnshåndtering',
        Img: require('@site/static/img/stock/money_step.jpg').default,
        link: '/docs/category/lønnshåndtering',
        description: (
            <p>
                Payroll+ Lønnshåndtering vil hjelpe deg med å sette lønnstiger for de ansatte som vil hjelpe deg med å
                holde orden på lønnsøkninger.

            </p>
        ),
    },
    {
        title: 'Payroll+ Maritim Pensjonskasse',
        Img: require('@site/static/img/stock/fishingship.jpg').default,
        link: '/docs/category/maritim-pensjonskasse',
        description: (
            <p>
                Payroll+ Maritim Pensjonskasse er et system for som vil hjelpe deg med å lage MPK-rapporter fra dine Visma Payroll data.
            </p>
        ),
    },
];

function Feature({Img, title, link, description}) {
    return (

        <div className={clsx('col col--4')}>
            <a href={link} className={styles.featureLink}>
                <div className="text--center">
                    <img src={Img} className={styles.featureImg} alt={title}/>
                </div>
                <div className="text--center padding-horiz--md">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </a>
        </div>

    )
        ;
}

export default function HomepageFeatures() {
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
