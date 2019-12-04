import posed from "react-pose";
import { tween } from "popmotion";

const LeftEntrance = posed.div({
  left: { x: -1500 },
  right: {
    x: 0,
    transition: props => tween({ ...props, duration: 3000 })
  }
});

const RightEntrance = posed.div({
  left: { x: 3500 },
  right: {
    x: 0,
    transition: props => tween({ ...props, delay: 3000, duration: 2000 })
  }
});

const TextDiv = posed.div({
  visible: {
    opacity: 1,
    transition: {
      opacity: { ease: "easeOut", duration: 2000 },
      default: { ease: "linear", duration: 500 }
    }
  },
  hidden: { opacity: 0 }
});

export { TextDiv, LeftEntrance, RightEntrance };
