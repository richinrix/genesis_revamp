import { Vector } from "tsparticles";
function pathGen(
  rndFunc,
  period,
  nbHarmonics,
  attenHarmonics,
  lowValue = 0,
  highValue = 1
) {
  const arP0 = [],
    arP1 = [],
    amplitudes = [],
    increments = [],
    phases = [],
    randomFunc = rndFunc !== null && rndFunc !== void 0 ? rndFunc : Math.random;
  let globAmplitude = 0;
  if (nbHarmonics < 1) nbHarmonics = 1;
  for (let kh = 1; kh <= nbHarmonics; ++kh) {
    arP0[kh] = randomFunc();
    arP1[kh] = randomFunc();
    amplitudes[kh] = kh === 1 ? 1 : amplitudes[kh - 1] * attenHarmonics;
    globAmplitude += amplitudes[kh];
    increments[kh] = kh / period;
    phases[kh] = randomFunc();
  }
  amplitudes.forEach(
    (value, kh) =>
      (amplitudes[kh] = (value / globAmplitude) * (highValue - lowValue))
  );
  return () => {
    let pf,
      pfl,
      signal = 0;
    for (let kh = nbHarmonics; kh >= 1; --kh) {
      pf = phases[kh] += increments[kh];
      if (phases[kh] >= 1) {
        pf = phases[kh] -= 1;
        arP0[kh] = arP1[kh];
        arP1[kh] = randomFunc();
      }
      pfl = Math.pow(pf, 2) * (3 - 2 * pf);
      signal += (arP0[kh] * (1 - pfl) + arP1[kh] * pfl) * amplitudes[kh];
    }
    return signal + lowValue;
  };
}
const seaPathGenerator = {
  init: () => {},
  update: () => {},
  generate: (p) => {
    if (p.pathGen === undefined) {
      p.pathGen = pathGen(null, 100, 2, 0.8, -0.03, 0.03);
    }
    if (p.seaVelocity === undefined) {
      p.seaVelocity = Vector.create(0, 0);
      p.seaVelocity.length = Math.random() * 0.6 + 0.8;
      p.seaVelocity.angle = Math.random() * Math.PI * 2;
    } else {
      p.seaVelocity.length += 0.01;
      p.seaVelocity.angle = (p.seaVelocity.angle + p.pathGen()) % (Math.PI * 2);
    }
    p.velocity.x = 0;
    p.velocity.y = 0;
    return p.seaVelocity;
  },
};
export { seaPathGenerator };
