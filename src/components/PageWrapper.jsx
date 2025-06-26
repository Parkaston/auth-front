
import { motion } from 'framer-motion';
//Caracteristicas de fade in y fade out para las páginas de la aplicación
//Envolvemos el contenido de la pagina con este componente para que tengan una transicion suave pero consistente
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}    
      animate={{ opacity: 1 }}    
      exit={{ opacity: 0 }}       
      transition={{ duration: 0.4 }} 
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
