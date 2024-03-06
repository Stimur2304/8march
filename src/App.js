import './App.css';
import {motion} from "framer-motion"
import heart from "../src/heart1.jpeg"
import heartt from "../src/heart2.png"
import flower1 from "../src/flower1.png"

function App() {
  return (
    <div className="App">
      <div >
        <motion.div className='header'
        initial={{ opacity: -4, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration:2}}
        >
          <h1>C 8 Марта!</h1>
        </motion.div>
      </div>

      <motion.div
      initial={{ opacity: -4, x:-150}}
      animate={{ opacity: 1, x: 0 }}
      transition={{duration:2}}
      >
     <div className='container'>
      <div className='desk'>
        <p>Дорогие представительницы прекрасного пола ! Сердечно поздравляю вас с Международным женским днем! В этот прекрасный весенний день хочется пожелать вам океан радости, бесконечного счастья и море вдохновения! Пусть каждый миг вашей жизни будет наполнен яркими красками, счастливыми моментами и невероятными впечатлениями! Благодарю вас за вашу красоту, умение быть сильными и нежными одновременно, за ваш вклад в семью, общество и мир! Вы - настоящие волшебницы, создающие вокруг себя атмосферу добра и тепла! Пусть ваш день будет полон заботы и ласки, понимания и уважения, а каждый ваш шаг наполнен чудесами и успехами!</p>
      </div>
      <motion.img
      initial={{ opacity: -4, x:-150}}
      animate={{ opacity: 1, x: 0 }}
      transition={{duration:2}}
      className='heart1'
      src={heart}
      >
      </motion.img>
      <motion.img
      initial={{ opacity: -4, x:-150}}
      animate={{ opacity: 1, x: 0 }}
      transition={{duration:2}}
      className='flower1'
      src={flower1}
      >
      </motion.img>

      <motion.img
      initial={{ opacity: -4, x:-150}}
      animate={{ opacity: 1, x: 0 }}
      transition={{duration:2}}
      className='heart2'
      src={heartt}
      >
      </motion.img>

      <motion.img
      initial={{ opacity: -4, x:-150}}
      animate={{ opacity: 1, x: 0 }}
      transition={{duration:2}}
      className='flower2'
      src={flower1}
      >
      </motion.img>
     </div>
      </motion.div>

      <p className="author">Samatov Timur</p>
    </div>
  )
}

export default App;
