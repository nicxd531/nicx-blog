import Alert from 'react-bootstrap/Alert';
import { AnimatePresence, motion } from "framer-motion"

const Alert1 = () => {
    // used alert from bootstrap and also motion and AnimatePresence form framer motion for animation
    return ( 
        <AnimatePresence>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
                }
            }}
            >
                <Alert className='alert' variant='info'>
                Blogs can only be posted if you are loged-in as an admin <a href="/">log in</a>
                </Alert>
            </motion.div> 
        </AnimatePresence>
    );
}
 
export default Alert1;