import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  {
    url: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?auto=format&fit=crop&q=80',
    caption: 'Rehabilitated Sea Turtle Ready for Release',
    credit: 'Photo by NMLC'
  },
  {
    url: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&q=80',
    caption: 'Sea Turtle Swimming in Natural Habitat',
    credit: 'Photo by NMLC'
  },
  {
    url: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&q=80',
    caption: 'Marine Biologist Examining Turtle',
    credit: 'Photo by NMLC'
  }
];

const PhotoGallery = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {photos.map((photo, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        className="relative group overflow-hidden rounded-lg"
      >
        <img
          src={photo.url}
          alt={photo.caption}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <p className="font-medium mb-1">{photo.caption}</p>
            <p className="text-sm opacity-75">{photo.credit}</p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

export default PhotoGallery;