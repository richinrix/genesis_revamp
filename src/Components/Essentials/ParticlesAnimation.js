import React from "react";
import Particles from "react-tsparticles";
import "../CSS/animation.css";
export default function ParticlesAnimation() {
  return (
    <div className=" flex justify-center ">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#020303",
            },
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
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
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 150,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: {
                value: "#ffffff",
              },
              distance: 150,
              enable: true,
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
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
            },
            number: {
              density: {
                enable: true,
              },
              value: 60,
            },
            opacity: {
              random: {
                enable: true,
              },
              value: {
                min: 0.1,
                max: 0.5,
              },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
              },
            },
            size: {
              random: {
                enable: true,
              },
              value: {
                min: 0.1,
                max: 5,
              },
              animation: {
                enable: true,
                speed: 10,
                minimumValue: 0.1,
              },
            },
            twinkle: {
              lines: {
                enable: true,
                frequency: 0.005,
                color: {
                  value: "#f3ff00",
                },
              },
              particles: {
                enable: true,
                color: {
                  value: "#ffff00",
                },
              },
            },
          },
        }}
      />
    </div>
  );
}
