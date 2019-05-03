precision mediump float;

uniform float time;
uniform float hover;
uniform vec2 resolution;
uniform vec2 mouse;
uniform sampler2D texture;


// Simplex 2D noise

vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 1.5 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 100.0 * dot(m, g);
}

float rnd(vec2 n){
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float whiteNoise(vec2 p, vec3 c) {
  float color = (c.r + c.g + c.b) / 1.5;
  float vignette = 1.5 - length(p);
  color *= vignette;

  float noise = rnd(gl_FragCoord.st + mod(time, 10.0));
  color *= noise * 0.5 + 0.5;

  float scanLine = abs(sin(p.y * 150.0 + time * 5.0)) * 0.5 + 0.5;
  color *= scanLine;

  return color;
}

vec3 render(vec2 p) {

  vec4 t = texture2D(texture, p);
  vec4 rt = texture2D(texture, p * hover);

  vec3 c = vec3(0.0);

  c += vec3(rt.r, t.g, t.b);
  if(hover > 1.0) {
    c = vec3( c * whiteNoise(p, c) * 3.6);
  }
  return c;
}

void main(void) {
  vec2 uv = gl_FragCoord.xy / resolution;

  vec4 c = vec4(render(uv), 1.0);

  gl_FragColor = c;
}
