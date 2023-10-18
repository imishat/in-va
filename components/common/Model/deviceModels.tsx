import mypic from "../../../public/my.png";

export const ModelAnimationType = {
  SpringUp: "spring-up",
  LaptopOpen: "laptop-open",
};

export const deviceModels = {
  phone: {
    url: mypic,
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp,
  },
  laptop: {
    url: mypic,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.LaptopOpen,
  },
};
