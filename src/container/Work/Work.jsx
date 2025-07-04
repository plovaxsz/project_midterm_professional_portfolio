import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  // FIX: Animation state should be an object, not an array with an object.
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    // FIX: Pass an object to the state setter.
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      // FIX: Pass an object to the state setter.
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === 'All') {
        setFilterWork(works);
      } else {
        // FIX: Use optional chaining (?.) to prevent crashing if work.tags is undefined.
        setFilterWork(works.filter((work) => work.tags?.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['IoT', 'Robotics', 'Embedded System', 'IoT Programming', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {/* FIX: Use a unique and stable key from your data, like work._id. */}
        {filterWork.map((work) => (
          <div className="app__work-item app__flex" key={work._id || work.title}>
            <div
              className="app__work-img app__flex"
            >
              {/* FIX: Check if imgUrl exists before trying to render an image. */}
              {work.imgUrl && (
                <img src={urlFor(work.imgUrl)} alt={work.title} />
              )}

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                {/* FIX: Only render the link if work.projectLink exists. */}
                {work.projectLink && (
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                )}

                {/* FIX: Only render the link if work.codeLink exists. */}
                {work.codeLink && (
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                )}
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              {/* FIX: The main source of the crash. Check if tags exist and have items. */}
              {work.tags && work.tags.length > 0 && (
                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
