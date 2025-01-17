import React from 'react';
import Image from '../images/job-interview6.jpg';
import SectionHead from './SectionHead';
import { GiCutDiamond } from 'react-icons/gi';
import { values } from '../data';
import Card from '../UI/Card';

const Values = () => {
    return (
        <section className='values'>
            <div className="container values__container">
                <div className="values__left">
                    <div className="values__image">
                        <img src={Image} alt="Job Interview" />
                    </div>
                </div>
                <div className="values__right">
                    <SectionHead icon={<GiCutDiamond />} title="Videos" />
                    <p>
                        Explore a treasure trove of insightful interviews. Welcome to our video library, where past conversations come to life.
                    </p>
                    <div className="values__wrapper">
                        {
                            values.map(({ id, icon, title, desc }) => (
                                <Card key={id} className="values__value">
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Values;
