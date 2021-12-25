#pragma glslify: random = require("glsl-random")
#pragma glslify: snoise3 = require("glsl-noise/simplex/3d")

// snoise3(vec3(uv.y * 1.4, uv.x * 0.2, time * 0.1))

precision highp float;
uniform float time;
uniform float circleSize;
uniform vec2 resolution;
uniform vec2 mouse;

void main(void) {
  vec2 uv = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

  vec3 color1 = vec3(0.92, 0.51, 0.88);
  vec3 color2 = vec3(0.14, 0.85, 1.0);

  float mixValue = distance(uv * circleSize, mouse * 0.3);
  vec3 color = mix(color1, color2 , mixValue) ;

  vec2 st = fract((gl_FragCoord.xy + vec2(time * 0.0008)) / resolution * 2.9);
  float v = random(st);

  vec4 c = vec4(color + vec3(-v * 0.1), 1.0);

  gl_FragColor = c;
}