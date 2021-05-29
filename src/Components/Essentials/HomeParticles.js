import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";

export default function HomeParticles() {
  const [isPhone, setIsPhone] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 700) {
      setIsPhone(true);
    }
  }, []);

  return (
    <div className=" flex justify-center w-screen h-screen">
      <Particles
        id="tsparticles"
        options={
          isPhone
            ? {
                background: {
                  color: {
                    value: "transparent",
                  },
                  position: "50% 50%",
                  repeat: "no-repeat",
                  size: "fit",
                },
                fullScreen: {
                  enable: false,
                  zIndex: 0,
                },
                interactivity: {
                  events: {
                    onClick: {
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                  },
                  modes: {
                    bubble: {
                      distance: 400,
                      duration: 2,
                      opacity: 0.8,
                      size: 40,
                    },
                    grab: {
                      distance: 400,
                    },
                    repulse: {
                      distance: 100,
                      duration: 0.8,
                      speed: 0.5,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#ffd805",
                  },
                  links: {
                    color: {
                      value: "#ffffff",
                    },
                    distance: 150,
                    opacity: 0.4,
                  },
                  move: {
                    attract: {
                      rotate: {
                        x: 600,
                        y: 1200,
                      },
                    },
                    enable: true,
                    path: {},
                    outModes: {
                      default: "destroy",
                      bottom: "destroy",
                      left: "destroy",
                      right: "destroy",
                      top: "destroy",
                    },
                    speed: 5,
                  },
                  number: {
                    density: {
                      enable: true,
                      factor: 200,
                    },
                    value: 0,
                  },
                  opacity: {
                    animation: {
                      speed: 3,
                      minimumValue: 0.1,
                    },
                  },
                  size: {
                    value: {
                      min: 0.1,
                      max: 10,
                    },
                    animation: {
                      enable: true,
                      sync: true,
                      destroy: "max",
                      minimumValue: 0.1,
                      startValue: "min",
                    },
                  },
                },
                emitters: {
                  autoPlay: true,
                  direction: "top",
                  life: {},
                  rate: {
                    quantity: 2,
                    delay: 0.1,
                  },
                  size: {
                    mode: "percent",
                    height: 0,
                    width: 100,
                  },
                  position: {
                    x: 50,
                    y: 100,
                  },
                },
              }
            : {
                background: {
                  color: {
                    value: "transparent",
                  },
                  position: "50% 50%",
                  repeat: "no-repeat",
                  size: "fit",
                },
                fullScreen: {
                  enable: false,
                  zIndex: 0,
                },
                interactivity: {
                  events: {
                    onClick: {
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                  },
                  modes: {
                    bubble: {
                      distance: 400,
                      duration: 2,
                      opacity: 0.8,
                      size: 40,
                    },
                    grab: {
                      distance: 400,
                    },
                    repulse: {
                      distance: 100,
                      duration: 0.8,
                      speed: 0.5,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#ffd805",
                  },
                  links: {
                    color: {
                      value: "#ffffff",
                    },
                    distance: 150,
                    opacity: 0.4,
                  },
                  move: {
                    attract: {
                      rotate: {
                        x: 600,
                        y: 1200,
                      },
                    },
                    enable: true,
                    path: {},
                    outModes: {
                      default: "destroy",
                      bottom: "destroy",
                      left: "destroy",
                      right: "destroy",
                      top: "destroy",
                    },
                    speed: 5,
                  },
                  number: {
                    density: {
                      enable: true,
                      factor: 3000,
                    },
                    value: 0,
                  },
                  opacity: {
                    animation: {
                      speed: 3,
                      minimumValue: 0.1,
                    },
                  },
                  size: {
                    value: {
                      min: 0.1,
                      max: 20,
                    },
                    animation: {
                      enable: true,
                      sync: true,
                      destroy: "max",
                      minimumValue: 0.1,
                      startValue: "min",
                    },
                  },
                },
                emitters: {
                  autoPlay: true,
                  direction: "top",
                  life: {},
                  rate: {
                    quantity: 2,
                    delay: 0.1,
                  },
                  size: {
                    mode: "percent",
                    height: 0,
                    width: 100,
                  },
                  position: {
                    x: 50,
                    y: 100,
                  },
                },
              }
        }
      />
    </div>
  );
}
