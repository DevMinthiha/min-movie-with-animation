import React from "react";
import { motion } from "framer-motion";

const Card = ({ movie }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="card"
    >
      <p>{movie.title}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt=""
      />
    </motion.div>
  );
};

export default Card;
