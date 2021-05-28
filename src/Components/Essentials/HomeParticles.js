import React from "react";
import Particles, {
  InteractivityDetect,
  MoveDirection,
  OutMode,
  ShapeType,
  SizeMode,
  StartValueType,
} from "tsparticles";
import "../CSS/animation.css";

export default function HomeParticles() {
  return (
    <div className=" flex justify-center ">
      <Particles
        id="homeTsparticles"
        options={{
          background: {
            color: {
              value: "#000000",
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
              onDiv: {
                selectors: "#repulse-div",
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: {
                  enable: true,
                  force: 60,
                },
              },
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 80,
              },
              grab: {
                distance: 400,
              },
              repulse: {
                distance: 80,
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
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
              speed: 6,
            },
            number: {
              density: {
                enable: true,
              },
              limit: 500,
              value: 1000,
            },
            opacity: {
              value: 0.5,
              animation: {
                speed: 1,
                minimumValue: 0.1,
              },
            },
            size: {
              random: {
                enable: true,
                minimumValue: 0.5,
              },
              value: {
                min: 0.5,
                max: 2.5,
              },
              animation: {
                speed: 40,
                minimumValue: 0.1,
              },
            },
          },
        }}
      />
    </div>
  );
}
